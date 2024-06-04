import { useEffect, useState } from "react";

import { useAxios } from "../../hooks/useAxios";

import ArticleCardView from "./ArticleCardView";

interface ArticleCardProps {
  articleId: string | undefined;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const [currentArticle, setCurrentArticle] = useState();
  const [comments, setComments] = useState([]);
  const { isLoading, sendRequest } = useAxios();

  useEffect(() => {
    fetchArticle();
    fetchCommentsByArticleId();
  }, []);

  const fetchArticle = async () => {
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
    </>
  );
};

export default ArticleCard;
