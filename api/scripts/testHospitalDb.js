const { Client } = require('pg');

const connectionString = 'postgres://red2green_ufmg:Xzffr28&!@10.36.2.35:6544/dbaghu?schema=agh';

const client = new Client({
  connectionString,
});

async function testConnection() {
    // filepath: c:\Users\luis.tieres\Desktop\Red2Green\Software_Engineering_UFMG\api\scripts\testHospitalDb.js
console.log('Starting hospital_db connection test...');
// ...existing code...
  try {
    await client.connect();
    console.log('Connected successfully to hospital_db!');
    const res = await client.query('SELECT NOW()');
    console.log('Server time:', res.rows[0]);
  } catch (err) {
    console.error('Connection error:', err.message);
    console.error(err.stack);
    process.exit(1);
  } finally {
    await client.end();
    process.exit(0);
  }
}

testConnection();