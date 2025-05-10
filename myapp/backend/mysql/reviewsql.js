const sqlList = {
  selectByBookId : "SELECT * FROM review WHERE book_id = ? ORDER BY review_id DESC",
  selectById : "select * from review where review_id=?",
  insertReview : "insert review set ?",
  updateReview : "update review set ? where review_id = ?",
  deleteReview : "delete from review where review_id = ?"
}

module.exports = sqlList;