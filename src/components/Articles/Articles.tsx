import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

const Articles = () => {
  const [articles, setArticles] = useState();
  const { isLoading, sendRequest } = useAxios();
  const [searchParams, setSearchParams] = useSearchParams();
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

  return <></>;
};

export default Articles;
