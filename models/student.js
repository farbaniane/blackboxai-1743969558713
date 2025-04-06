const mysql = require('mysql');
const db = require('../server').db; // Adjust the path as necessary

const Student = {
    create: (studentData, callback) => {
        const sql = 'INSERT INTO students SET ?';
        db.query(sql, studentData, callback);
    },
    // Additional CRUD methods can be added here
};

module.exports = Student;