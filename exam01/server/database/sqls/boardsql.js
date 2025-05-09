const booksql = {
  selectList : "select * from t_board_board",
  insertInfo : "insert t_board_board (title, writer, content, created_dt) values (?, ?, ?, now())",
  selectInfo : "select * from t_board_board where no = ?",
  updateInfo: "update t_board_board set updated_dt = NOW(), title = ?, writer = ?, content = ? where no = ?"
}
module.exports = booksql;