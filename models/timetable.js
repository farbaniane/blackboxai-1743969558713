const mysql = require('mysql');
const db = require('../server').db;

const Timetable = {
    create: (timetableData, callback) => {
        const sql = 'INSERT INTO timetables SET ?';
        db.query(sql, timetableData, callback);
    },
    getByClass: (classId, callback) => {
        const sql = 'SELECT * FROM timetables WHERE class_id = ? ORDER BY day, period';
        db.query(sql, classId, callback);
    },
    update: (id, timetableData, callback) => {
        const sql = 'UPDATE timetables SET ? WHERE id = ?';
        db.query(sql, [timetableData, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM timetables WHERE id = ?';
        db.query(sql, id, callback);
    }
};

module.exports = Timetable;