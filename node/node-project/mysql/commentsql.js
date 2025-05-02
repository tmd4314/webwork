const commentsql = {
  selectList : "SELECT * FROM comment WHERE bid = ?",
  insertInfo : "insert comment ( writer, content, bid, create_date) values (?, ?, ?, now())",
  selectInfo : "select * from comment where id = ?",
  updateInfo : "update comment set ? where id = ?",
  deleteInfo : "delete from comment where id = ?"
}
module.exports = commentsql;