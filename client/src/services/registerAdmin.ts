import axios from 'axios';

async function registerAdmin() {
  try {
    await axios.post('http://localhost:3001/api/users', {
      name: 'Admin User',
      birthDate: '01/01/1980',
      username: 'admin123',
      phone: '(31)99999-9999',
      password: 'admin',
      role: 'Admin',
      specialty: '',
    });
    console.log('Admin user registered successfully!');
  } catch (error: any) {
    if (error.response && error.response.status === 409) {
      console.log('Admin user already exists.');
    } else {
      console.error('Error registering admin user:', error.message);
    }
  }
}

registerAdmin();
