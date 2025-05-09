
module.exports = {
  selectByBno: `
    SELECT no, writer, content, created_dt 
    FROM T_COMMENT_BOARD 
    WHERE bno = ? 
    ORDER BY no DESC
  `
};
