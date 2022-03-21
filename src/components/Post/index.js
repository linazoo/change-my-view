import React from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../../utils/api";

export default function Post() {
  const { id } = useParams();
  React.useEffect(() => {
    fetchPost(id);
  }, []);

  return <div>Post</div>;
}
