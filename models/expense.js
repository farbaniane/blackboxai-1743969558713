const mysql = require('mysql');
const db = require('../server').db;

const Expense = {
    create: (expenseData, callback) => {
        const sql = 'INSERT INTO expenses SET ?';
        db.query(sql, expenseData, callback);
    },
    getByCategory: (category, callback) => {
        const sql = 'SELECT * FROM expenses WHERE category = ?';
        db.query(sql, category, callback);
    },
    getMonthlySummary: (month, year, callback) => {
        const sql = `SELECT category, SUM(amount) as total 
                    FROM expenses 
                    WHERE MONTH(date) = ? AND YEAR(date) = ?
                    GROUP BY category`;
        db.query(sql, [month, year], callback);
    },
    // Additional methods for reporting and analysis
    getByDateRange: (startDate, endDate, callback) => {
        const sql = 'SELECT * FROM expenses WHERE date BETWEEN ? AND ?';
        db.query(sql, [startDate, endDate], callback);
    }
};

module.exports = Expense;