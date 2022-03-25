import React from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../utils/api";

export default function Post() {
  const [post, setPost] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const { id } = useParams();
  React.useEffect(() => {
    fetchPost(id).then((data) => {
      const commentsData = data[1].data.children;
      setComments(commentsData);
      const postInfo = data[0].data.children[0].data;
      setPost(postInfo);
    });
  }, []);

  return (
    <div tabindex="0" className="each-post">
      <div>
        <h1
          className="title"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p
          className="long-text"
          dangerouslySetInnerHTML={{ __html: post.selftext }}
        />
      </div>

      <ul tabindex="0" className="comments">
        <p className="replies">Replies</p>
        {comments.map((comment) => {
          return (
            <li key={comment.data.id}>
              <div>
                <p
                  className="author"
                  dangerouslySetInnerHTML={{ __html: comment.data.author }}
                />
                <p
                  className="long-text"
                  dangerouslySetInnerHTML={{ __html: comment.data.body }}
                />
                <hr />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
