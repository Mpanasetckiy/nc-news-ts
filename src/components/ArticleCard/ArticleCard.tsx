import { useEffect, useState } from "react";

import { useAxios } from "../../hooks/useAxios";

import ArticleCardView from "./ArticleCardView";
import CommentsList from "../CommentsList/CommentsList";
interface ArticleCardProps {
  articleId: string | undefined;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const [currentArticle, setCurrentArticle] = useState();
  const { isLoading, sendRequest } = useAxios();

  useEffect(() => {
    fetchArticleById();
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

  return (
    <>
      <ArticleCardView currentArticle={currentArticle} />
      <CommentsList articleId={props.articleId} />
    </>
  );
};

export default ArticleCard;
