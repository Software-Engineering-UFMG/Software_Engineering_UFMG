// Mock LDAP database - Add your test users here
const mockLdapUsers = [
  { login: "admin", password: "admin123" },
  { login: "doctor.silva", password: "password123" },
  { login: "nurse.maria", password: "nurse456" },
  { login: "nir.joao", password: "nir789" },
  { login: "medstudent", password: "student123" },
  { login: "cardiologist", password: "cardio456" },
  { login: "luistieres@gmail.com", password: "luistieres" },
  { login: "luistieres@gmail.comm", password: "luistieres" },
  { login: "admin", password: "admin" },
  { login: "teste", password: "teste" }
  // Add more test users as needed
];

// Returns user object from mock array
export async function getLdapUser(login: string): Promise<any | null> {
  const user = mockLdapUsers.find(u => u.login === login);
  return user ? { ...user, dn: `mock-dn-for-${user.login}` } : null;
}

export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
  console.log(`LDAP Service: Checking credentials for login: ${login}`);
  const user = mockLdapUsers.find(u => u.login === login && u.password === password);
  if (user) {
    console.log(`LDAP Service: User ${login} found and password matches`);
    return true;
  } else {
    console.log(`LDAP Service: User ${login} not found or password incorrect`);
    return false;
  }
}

export async function userExistsInLdap(login: string): Promise<boolean> {
  console.log(`LDAP Service: Checking existence for login: ${login}`);
  const user = mockLdapUsers.find(u => u.login === login);
  if (user) {
    console.log(`LDAP Service: User ${login} exists`);
    return true;
  } else {
    console.log(`LDAP Service: User ${login} does not exist`);
    return false;
  }
}

export async function userIsInRequiredGroup(login: string): Promise<boolean> {
  // Always return true for mock
  return true;
}