// @ts-ignore

import ldap from 'ldapjs';

const {
  LDAP_URL,
  LDAP_BIND_DN,
  LDAP_BIND_PASSWORD,
  LDAP_BASE_DN,
  LDAP_IDENTIFYING_ATTRIBUTE,
} = process.env;

if (
  !LDAP_URL ||
  !LDAP_BIND_DN ||
  !LDAP_BIND_PASSWORD ||
  !LDAP_BASE_DN ||
  !LDAP_IDENTIFYING_ATTRIBUTE
) {
  throw new Error("Missing LDAP environment variables");
}

export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const client = ldap.createClient({ url: LDAP_URL });

    // First bind as the service account
    client.bind(LDAP_BIND_DN, LDAP_BIND_PASSWORD, (err: Error | undefined) => {
      if (err) {
        client.unbind();
        return reject(new Error("LDAP bind failed: " + err.message));
      }

      // Search for the user DN
      const searchOptions = {
        filter: `(${LDAP_IDENTIFYING_ATTRIBUTE}=${login})`,
        scope: 'sub',
        attributes: ['dn'],
      };

      client.search(LDAP_BASE_DN, searchOptions, (searchErr: Error | undefined, res: any) => {
        if (searchErr) {
          client.unbind();
          return reject(new Error("LDAP search failed: " + searchErr.message));
        }

        let userDN: string | null = null;
        res.on('searchEntry', (entry: { object: { dn: string } }) => {
          userDN = entry.object.dn;
        });

        res.on('end', () => {
          if (!userDN) {
            client.unbind();
            return resolve(false); // User not found
          }

          // Try to bind as the user to verify password
          client.bind(userDN, password, (userErr: Error | undefined) => {
            client.unbind();
            if (userErr) {
              return resolve(false); // Invalid password
            }
            return resolve(true); // Authenticated
          });
        });

        res.on('error', (err: Error) => {
          client.unbind();
          return reject(new Error("LDAP search error: " + err.message));
        });
      });
    });
  });
}
/*declare module 'ldapjs';

const {
  LDAP_URL,
  LDAP_BIND_DN,
  LDAP_BIND_PASSWORD,
  LDAP_BASE_DN,
  LDAP_IDENTIFYING_ATTRIBUTE,
} = process.env;

if (
  !LDAP_URL ||
  !LDAP_BIND_DN ||
  !LDAP_BIND_PASSWORD ||
  !LDAP_BASE_DN ||
  !LDAP_IDENTIFYING_ATTRIBUTE
) {
  throw new Error("Missing LDAP environment variables");
}

// Mock LDAP database - Add your test users here
const mockLdapUsers = [
  { login: "admin", password: "admin123" },
  { login: "doctor.silva", password: "password123" },
  { login: "nurse.maria", password: "nurse456" },
  { login: "nir.joao", password: "nir789" },
  { login: "medstudent", password: "student123" },
  { login: "cardiologist", password: "cardio456" },
  { login: "luistieres@gmail.com",password:"luistieres"},
  { login: "luistieres@gmail.comm",password:"luistieres"},
  { login: "admin",password:"admin"},
  { login:"teste",password:"teste"}
  // Add more test users as needed
];

export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
  console.log(`LDAP Service: Checking credentials for login: ${login}`);
  
  // Check if user exists in mock database
  const user = mockLdapUsers.find(u => u.login === login && u.password === password);
  
  if (user) {
    console.log(`LDAP Service: User ${login} found and password matches`);
    return true;
  } else {
    console.log(`LDAP Service: User ${login} not found or password incorrect`);
    return false;
  }

  // --- Original LDAP code below (commented out for testing) ---
  // return new Promise((resolve, reject) => {
  //   const client = ldap.createClient({ url: LDAP_URL });
  //   // ...existing code...
  // });
}
*/