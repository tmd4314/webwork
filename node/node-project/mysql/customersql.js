const customersql = {
  selectList : "select * from customers",
  insertInfo : "insert customers (name, email, phone, address) values (?, ?, ?, ?)",
  selectInfo : "select * from customers where id = ?",
  updateInfo : "update customers set ? where id = ?",
  deleteInfo : "delete from customers where id = ?"
}
module.exports = customersql;