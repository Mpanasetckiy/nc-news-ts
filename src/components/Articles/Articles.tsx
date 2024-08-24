import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "antd";

import { useAxios } from "../../hooks/useAxios";

import ArticlesView from "./ArticlesView";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { isLoading, sendRequest } = useAxios();
  const [searchParams] = useSearchParams();
  const orderParam = searchParams.get("order");
  const sortParam = searchParams.get("sort_by");

  useEffect(() => {
    fetchArticles();
  }, [sortParam, orderParam]);

  const fetchArticles = async () => {
    try {
      const { articles } = await sendRequest(
        `${
          import.meta.env.VITE_API_URL
        }/articles?sort_by=${sortParam}&order=${orderParam}`
      );

      if (!isLoading) {
        setArticles(articles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Skeleton active avatar></Skeleton>;
  }

  return (
    <>
      <ArticlesView articles={articles} />
    </>
  );
};

export default Articles;
