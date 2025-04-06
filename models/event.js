const mysql = require('mysql');
const db = require('../server').db;

const Event = {
    create: (eventData, callback) => {
        const sql = 'INSERT INTO events SET ?';
        db.query(sql, eventData, callback);
    },
    getAll: (callback) => {
        const sql = 'SELECT * FROM events ORDER BY date, time';
        db.query(sql, callback);
    },
    update: (id, eventData, callback) => {
        const sql = 'UPDATE events SET ? WHERE id = ?';
        db.query(sql, [eventData, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM events WHERE id = ?';
        db.query(sql, id, callback);
    }
};

module.exports = Event;