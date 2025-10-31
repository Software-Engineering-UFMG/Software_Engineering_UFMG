const ldap = require('ldapjs');

// LDAP Configuration
const LDAP_CONFIG = {
    serverUri: 'ldap://10.36.2.21',
    bindDN: 'CN=TAGS,OU=Servicos,OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br',
    bindPassword: 'T4g5@2022!',
    baseDN: 'OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br'
};

async function findUser(username) {
    console.log(`🔍 Searching for user: ${username}`);
    
    const client = ldap.createClient({
        url: LDAP_CONFIG.serverUri,
        timeout: 5000,
        connectTimeout: 5000,
    });

    return new Promise((resolve, reject) => {
        client.bind(LDAP_CONFIG.bindDN, LDAP_CONFIG.bindPassword, (err) => {
            if (err) {
                client.unbind();
                reject(err);
                return;
            }

            const searchOptions = {
                filter: `(samaccountname=${username})`,
                scope: 'sub',
                attributes: ['dn']
            };

            client.search(LDAP_CONFIG.baseDN, searchOptions, (err, res) => {
                if (err) {
                    client.unbind();
                    reject(err);
                    return;
                }

                let userFound = false;
                let userDN = null;
                
                res.on('searchEntry', (entry) => {
                    userFound = true;
                    userDN = entry.dn.toString();
                });

                res.on('error', (err) => {
                    client.unbind();
                    reject(err);
                });

                res.on('end', () => {
                    client.unbind();
                    if (userFound) {
                        console.log('✅ User found');
                        resolve({ found: true, dn: userDN });
                    } else {
                        console.log('❌ User not found');
                        resolve({ found: false, dn: null });
                    }
                });
            });
        });
    });
}

async function authenticateUser(userDN, password) {
    console.log(`🔐 Testing authentication...`);
    
    const client = ldap.createClient({
        url: LDAP_CONFIG.serverUri,
        timeout: 5000,
        connectTimeout: 5000,
    });

    return new Promise((resolve) => {
        client.bind(userDN, password, (err) => {
            client.unbind();
            
            if (err) {
                console.log('❌ Authentication failed');
                resolve({ authenticated: false });
            } else {
                console.log('✅ Authentication OK');
                resolve({ authenticated: true });
            }
        });
    });
}

async function testUser(username, password) {
    try {
        // Step 1: Find user
        const userResult = await findUser(username);
        
        if (!userResult.found) {
            return { userFound: false, authenticated: false };
        }
        
        // Step 2: Test password
        const authResult = await authenticateUser(userResult.dn, password);
        
        return {
            userFound: true,
            authenticated: authResult.authenticated
        };
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        return { userFound: false, authenticated: false };
    }
}

// Test the user
async function runTest() {
    const username = 'riquelme.silva';
    const password = 'Matador123@'; // Replace with actual password
    
    console.log('🚀 Testing LDAP Authentication...\n');
    
    const result = await testUser(username, password);
    
    console.log('\n📊 Results:');
    console.log(`User Found: ${result.userFound}`);
    console.log(`Authentication: ${result.authenticated ? 'OK' : 'Failed'}`);
    
    return result;
}

// Run test if script is executed directly
if (require.main === module) {
    runTest();
}

module.exports = { testUser, findUser, authenticateUser };