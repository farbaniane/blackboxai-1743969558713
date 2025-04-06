const mysql = require('mysql');
const db = require('../server').db;

const Class = {
    create: (classData, callback) => {
        const sql = 'INSERT INTO classes SET ?';
        db.query(sql, classData, callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM classes';
        db.query(sql, callback);
    },
    update: (id, classData, callback) => {
        const sql = 'UPDATE classes SET ? WHERE id = ?';
        db.query(sql, [classData, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM classes WHERE id = ?';
        db.query(sql, id, callback);
    }
};

module.exports = Class;