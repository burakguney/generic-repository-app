const pool = require('../../db');
const format = require('pg-format');

const create = async (table, column, value) => {

    const query = format('INSERT INTO %I (%I) VALUES (%L) RETURNING *', table, column, value);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing create query', error.stack);
        throw error;
    }
}

const update = async (table, column, value, id) => {

    const query = format('UPDATE %I SET (%I) = (%L) WHERE id = %L RETURNING *', table, column, value, id);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing create query', error.stack);
        throw error;
    }
}

const getAll = async (table) => {

    const query = format('SELECT * FROM %I', table);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing getAll query', error.stack);
        throw error;
    }
}

const getById = async (table, id) => {

    const query = format('SELECT * FROM %I WHERE id = %L', table, id);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing getById query', error.stack);
        throw error;
    }
}

const getByColumn = async (tableName, column, value) => {

    const query = format('SELECT * FROM %I WHERE %I = %L', tableName, column, value);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing getById query', error.stack);
        throw error;
    }
}

const deleteById = async (table, id) => {

    const query = format('DELETE FROM %I WHERE id = %L', table, id);
    console.log(query);

    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error executing getById query', error.stack);
        throw error;
    }
}

module.exports = { create, update, getAll, getById, getByColumn, deleteById };