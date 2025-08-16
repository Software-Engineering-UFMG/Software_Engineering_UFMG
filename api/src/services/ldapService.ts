// @ts-ignore
declare module 'ldapjs';

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
