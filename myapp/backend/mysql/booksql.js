const booksql = {
  selectList : "select * from book",
  insertInfo : "insert book (book_title, isbn, writer, price, img, publisher, page, create_date) values (?, ?, ?, ?, ?, ?, ?, now())",
  selectInfo : "select * from book where id = ?",
  updateInfo : "update book set ? where id = ?",
  deleteInfo : "delete from book where id = ?"
}
module.exports = booksql;