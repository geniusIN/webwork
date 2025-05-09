const sqlList = {
  selectList : "select * from T_BOARD_BOARD",
  selectByNo : "select * from T_BOARD_BOARD where no=?",
  insertToList : "insert T_BOARD_BOARD set ?",
  updateBoard : "update T_BOARD_BOARD set ? where no = ?",
  deleteBoard : "delete from T_BOARD_BOARD where no = ?"
}

module.exports = sqlList;