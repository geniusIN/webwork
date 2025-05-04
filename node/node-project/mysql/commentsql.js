const sqlList = {
    selectByBoardId: "SELECT * FROM comment WHERE board_id = ? ORDER BY created_at ASC",
    insert: "INSERT INTO comment (board_id, writer, content) VALUES (?, ?, ?)",
    delete: "DELETE FROM comment WHERE comment_id = ?",
    update: "UPDATE comment SET content = ? WHERE comment_id = ?",
};

module.exports = sqlList;
