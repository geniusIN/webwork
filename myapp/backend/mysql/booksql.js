const sqlList = {
  selectList : "select * from book",
  selectById : "select * from book where id=?",
  insertToList : "insert book set ?",
  updateBook : "update book set ? where id = ?",
  deleteBook : "delete from book where id = ?"
}

module.exports = sqlList;