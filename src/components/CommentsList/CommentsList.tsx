import { useEffect, useState } from "react";

import { useAxios } from "../../hooks/useAxios";

import CommentsListView from "./CommentsListView";
interface CommentsListProps {
  articleId: string | undefined;
}

const CommentsList: React.FC<CommentsListProps> = (props) => {
  const [comments, setComments] = useState([]);
  const { isLoading, sendRequest } = useAxios();

  useEffect(() => {
    fetchCommentsByArticleId();
  }, []);

  const fetchCommentsByArticleId = async () => {
    try {
      const { comments } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/articles/${props.articleId}/comments`
      );

      if (!isLoading) {
        setComments(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommentsListView comments={comments} />
    </>
  );
};

export default CommentsList;
