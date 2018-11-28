const db = require('./database-connection')

module.exports = {
    getAll() {
        return db('students')
    },
    getById(id){
        return db('students').where({id: id}).first()
    },
    createStudent(newStudent) {
        return db('students').insert(newStudent).returning('*')
    }  
}