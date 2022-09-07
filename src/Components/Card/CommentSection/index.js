import React, { useEffect, useState } from "react";

function CommentSection({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const commentsFromLocalStorage = JSON.parse(
      localStorage.getItem("comments")
    )?.filter((item) => item.id === id);
    setComments(commentsFromLocalStorage);
  }, []);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    const commentsFromLocalStorage =
      JSON.parse(localStorage.getItem("comments")) || [];
    const newComments = [...commentsFromLocalStorage, { id, comment }];

    localStorage.setItem("comments", JSON.stringify(newComments));
    setComments(newComments?.filter((item) => item.id === id));
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 0.2,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <textarea
          onChange={handleComment}
          style={{
            backgroundColor: "black",
            height: 50,
            width: "100%",
            border: "1px solid white",
            borderRadius: 20,
            margin: 20,
            padding: 10,
            color: "white",
          }}
        />
        <div
          onClick={handleAddComment}
          style={{
            justifyItems: "flex-end",
            color: "white",
            marginLeft: 20,
            border: "1px solid white",
            borderRadius: 7,
            padding: 10,
          }}
        >
          <span>Add Comment</span>
        </div>
      </div>
      <div>
        {comments &&
          comments.map((item) => (
            <div
              style={{
                margin: 20,
                paddingTop: 5,
              }}
            >
              <p
                style={{ color: "white", width: 80, flex: 1, flexWrap: "wrap" }}
              >
                {item.comment}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentSection;
