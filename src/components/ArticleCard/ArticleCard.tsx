import { useEffect, useState } from "react";

import { useAxios } from "../../hooks/useAxios";

import ArticleCardView from "./ArticleCardView";
import CommentsList from "../CommentsList/CommentsList";
import CreateComment from "../CreateComment/CreateComment";

import { Comment } from "../../types/types";
interface ArticleCardProps {
  articleId: string | undefined;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const [currentArticle, setCurrentArticle] = useState();
  const [comments, setComments] = useState<Comment[] | null>(null);
  const { isLoading, sendRequest } = useAxios();

  useEffect(() => {
    fetchArticleById();
    fetchCommentsByArticleId();
  }, []);

  const fetchArticleById = async () => {
    try {
      const { article } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/articles/${props.articleId}`
      );
      if (article) {
        setCurrentArticle(article);
      }
    } catch (error) {}
  };

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
      <ArticleCardView currentArticle={currentArticle} />
      <CreateComment
        articleId={props.articleId}
        comments={comments}
        setComments={setComments}
      />
      <CommentsList comments={comments} />
    </>
  );
};

export default ArticleCard;
