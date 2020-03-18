const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("schemes");
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first();
}

function add(scheme) {
    return db("schemes")
    .insert(scheme)
}

function update(changes, id) {
    return db("schemes")
    .where({ id })
    .update(changes)
    .then(()=>{
        return findById(id);
    })
}

function remove(id) {
    return db("schemes")
    .where({ id: id })
    .del()
}

