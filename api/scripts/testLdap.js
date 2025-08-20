require('dotenv').config({ path: './.env' });

const { checkUserInLdap } = require('../src/services/ldapService');

// Replace with a real LDAP username and password for testing
const testLogin = 'luis.tieres';
const testPassword = 'deuspai21@';

(async () => {
  try {
    const result = await checkUserInLdap(testLogin, testPassword);
    console.log(`LDAP authentication result for ${testLogin}:`, result ? 'SUCCESS' : 'FAIL');
  } catch (error) {
    console.error('LDAP test error:', error);
  }
})();