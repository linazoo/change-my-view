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
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <p dangerouslySetInnerHTML={{ __html: post.selftext }} />

      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.data.id}>
              <div>
                <p dangerouslySetInnerHTML={{ __html: comment.data.body }} />
                <p dangerouslySetInnerHTML={{ __html: comment.data.author }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
