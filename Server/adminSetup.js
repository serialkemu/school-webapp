// adminSetup.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./Models/userModel'); // Adjust path as needed

const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin123'; // Use a secure password

mongoose.connect('mongodb+srv://damonitor:dam123@cluster0.t8ra2vx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const setupAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const admin = new User({
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
    });
    await admin.save();
    console.log('Admin user created successfully!');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
};

setupAdmin();
