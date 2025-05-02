const boardsql = {
  selectList : "select * from board",
  insertInfo : "insert board (title, writer, content, create_date) values (?, ?, ?, now())",
  selectInfo : "select * from board where id = ?",
  updateInfo : "update board set ? where id = ?",
  deleteInfo : "delete from board where id = ?"
}
module.exports = boardsql;