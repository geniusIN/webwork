const sqlList = {
  selectList : "select * from board",
  selectById : "select * from board where id=?",
  insertInfo : "insert board set ?",
  updateInfo : "update board set ? where id = ?",
  deleteInfo : "delete from board where id = ?"

}

module.exports = sqlList;