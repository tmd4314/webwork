const commentsql = {
  countList : "select * from t_comment_board",
  selectList : "SELECT * FROM t_comment_board WHERE bno = ?",
}
module.exports = commentsql;