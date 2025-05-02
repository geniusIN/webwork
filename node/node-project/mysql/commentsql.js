const sqlList = {
  selectList : "select * from comment",
  selectById : "select * from comment where id=?",
  insertInfo : "insert comment set ?",
  updateInfo : "update comment set ? where id = ?",
  deleteInfo : "delete from comment where id = ?"

}

module.exports = sqlList;