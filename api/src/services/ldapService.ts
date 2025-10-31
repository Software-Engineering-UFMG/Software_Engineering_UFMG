const ldap = require('ldapjs');

// LDAP Configuration
const LDAP_CONFIG = {
    serverUri: 'ldap://10.36.2.21',
    bindDN: 'CN=TAGS,OU=Servicos,OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br',
    bindPassword: 'T4g5@2022!',
    baseDN: 'OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br'
};

// Keep only the admin user as exception
const adminUser = { login: "admin", password: "admin" };

// Helper function for real LDAP authentication
async function authenticateWithLdap(username: string, password: string): Promise<boolean> {
    try {
        // Step 1: Find user
        const client = ldap.createClient({
            url: LDAP_CONFIG.serverUri,
            timeout: 5000,
            connectTimeout: 5000,
        });

        return new Promise((resolve) => {
            client.bind(LDAP_CONFIG.bindDN, LDAP_CONFIG.bindPassword, (err: Error | null) => {
                if (err) {
                    client.unbind();
                    resolve(false);
                    return;
                }

                const searchOptions = {
                    filter: `(samaccountname=${username})`,
                    scope: 'sub',
                    attributes: ['dn']
                };

                client.search(LDAP_CONFIG.baseDN, searchOptions, (err: Error | null, res: any) => {
                    if (err) {
                        client.unbind();
                        resolve(false);
                        return;
                    }

                    let userDN: string | null = null;
                    
                    res.on('searchEntry', (entry: any) => {
                        userDN = entry.dn.toString();
                    });

                    res.on('error', (searchErr: Error | null) => {
                        client.unbind();
                        resolve(false);
                    });

                    res.on('end', () => {
                        client.unbind();
                        
                        if (!userDN) {
                            resolve(false);
                            return;
                        }

                        // Step 2: Authenticate with found DN
                        const authClient = ldap.createClient({
                            url: LDAP_CONFIG.serverUri,
                            timeout: 5000,
                            connectTimeout: 5000,
                        });

                        authClient.bind(userDN, password, (authErr: Error | null) => {
                            authClient.unbind();
                            resolve(!authErr);
                        });
                    });
                });
            });
        });
    } catch (error) {
        return false;
    }
}

// Helper function to check if user exists in LDAP
async function userExistsInRealLdap(username: string): Promise<boolean> {
    try {
        const client = ldap.createClient({
            url: LDAP_CONFIG.serverUri,
            timeout: 5000,
            connectTimeout: 5000,
        });

        return new Promise((resolve) => {
            client.bind(LDAP_CONFIG.bindDN, LDAP_CONFIG.bindPassword, (err: Error | null) => {
                if (err) {
                    client.unbind();
                    resolve(false);
                    return;
                }

                const searchOptions = {
                    filter: `(samaccountname=${username})`,
                    scope: 'sub',
                    attributes: ['dn']
                };

                client.search(LDAP_CONFIG.baseDN, searchOptions, (err: Error | null, res: any) => {
                    if (err) {
                        client.unbind();
                        resolve(false);
                        return;
                    }

                    let userFound = false;
                    
                    res.on('searchEntry', (_entry: any) => {
                        userFound = true;
                    });

                    res.on('error', (searchErr: Error | null) => {
                        client.unbind();
                        resolve(false);
                    });

                    res.on('end', () => {
                        client.unbind();
                        resolve(userFound);
                    });
                });
            });
        });
    } catch (error) {
        return false;
    }
}

// Your existing functions - EXACTLY THE SAME interface
export async function getLdapUser(login: string): Promise<any | null> {
    // Admin exception
    if (login === adminUser.login) {
        return { ...adminUser, dn: `mock-dn-for-${adminUser.login}` };
    }

    // Check real LDAP
    const exists = await userExistsInRealLdap(login);
    return exists ? { login, dn: `ldap-dn-for-${login}` } : null;
}

export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
    console.log(`LDAP Service: Checking credentials for login: ${login}`);
    
    // Admin exception
    if (login === adminUser.login && password === adminUser.password) {
        console.log(`LDAP Service: Admin user ${login} authenticated`);
        return true;
    }

    // Real LDAP authentication
    const isAuthenticated = await authenticateWithLdap(login, password);
    
    if (isAuthenticated) {
        console.log(`LDAP Service: User ${login} found and password matches`);
        return true;
    } else {
        console.log(`LDAP Service: User ${login} not found or password incorrect`);
        return false;
    }
}

export async function userExistsInLdap(login: string): Promise<boolean> {
    console.log(`LDAP Service: Checking existence for login: ${login}`);
    
    // Admin exception
    if (login === adminUser.login) {
        console.log(`LDAP Service: Admin user ${login} exists`);
        return true;
    }

    // Real LDAP check
    const exists = await userExistsInRealLdap(login);
    
    if (exists) {
        console.log(`LDAP Service: User ${login} exists`);
        return true;
    } else {
        console.log(`LDAP Service: User ${login} does not exist`);
        return false;
    }
}

export async function userIsInRequiredGroup(login: string): Promise<boolean> {
    // Always return true for now (you can implement group checking later)
    return true;
}

// // Mock LDAP database - Add your test users here
// const mockLdapUsers = [
//   { login: "admin", password: "admin123" },
//   { login: "doctor.silva", password: "password123" },
//   { login: "nurse.maria", password: "nurse456" },
//   { login: "nir.joao", password: "nir789" },
//   { login: "medstudent", password: "student123" },
//   { login: "cardiologist", password: "cardio456" },
//   { login: "luistieres@gmail.com", password: "luistieres" },
//   { login: "luistieres@ebserh.com", password: "luistieres" },
//   { login: "riquelme.silva@ebserh.com", password: "riquelme.silva" },
//   { login: "admin", password: "admin" },
//   { login: "teste", password: "teste" }
//   // Add more test users as needed
// ];

// // Returns user object from mock array
// export async function getLdapUser(login: string): Promise<any | null> {
//   const user = mockLdapUsers.find(u => u.login === login);
//   return user ? { ...user, dn: `mock-dn-for-${user.login}` } : null;
// }

// export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
//   console.log(`LDAP Service: Checking credentials for login: ${login}`);
//   const user = mockLdapUsers.find(u => u.login === login && u.password === password);
//   if (user) {
//     console.log(`LDAP Service: User ${login} found and password matches`);
//     return true;
//   } else {
//     console.log(`LDAP Service: User ${login} not found or password incorrect`);
//     return false;
//   }
// }

// export async function userExistsInLdap(login: string): Promise<boolean> {
//   console.log(`LDAP Service: Checking existence for login: ${login}`);
//   const user = mockLdapUsers.find(u => u.login === login);
//   if (user) {
//     console.log(`LDAP Service: User ${login} exists`);
//     return true;
//   } else {
//     console.log(`LDAP Service: User ${login} does not exist`);
//     return false;
//   }
// }

// export async function userIsInRequiredGroup(login: string): Promise<boolean> {
//   // Always return true for mock
//   return true;
// }