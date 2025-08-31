require('dotenv').config({ path: './.env' });

const { userExistsInLdap, checkUserInLdap } = require('../src/services/ldapService');

// Replace with a real LDAP username for existence check
const testLogin = 'luistieres@gmail.com';

(async () => {
  try {
    const exists = await userExistsInLdap(testLogin);
    console.log(`LDAP user existence for ${testLogin}:`, exists ? 'FOUND' : 'NOT FOUND');
    // If you want to also test authentication, uncomment below:
    // const testPassword = 'Matador1234@';
    // const authResult = await checkUserInLdap(testLogin, testPassword);
    // console.log(`LDAP authentication result for ${testLogin}:`, authResult ? 'SUCCESS' : 'FAIL');
  } catch (error) {
    console.error('LDAP test error:', error);
  }
})();