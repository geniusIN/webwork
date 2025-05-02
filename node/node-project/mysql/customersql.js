const sqlList = {
  selectList : "select * from customers",
  selectById : "select * from customers where id=?",
  insertInfo : "insert customers set ?",
  updateInfo : "update customers set ? where id = ?",
  deleteInfo : "delete from customers where id = ?"

}

module.exports = sqlList;