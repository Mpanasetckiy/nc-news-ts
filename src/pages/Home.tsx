import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAxios } from "../hooks/useAxios";

import NavTop from "../components/NavTop/NavTop";
import FilterBar from "../components/FilterBar/FilterBar";
import NavBottom from "../components/NavBottom/NavBottom";

const Home = () => {
  const [articles, setArticles] = useState();
  const { isLoading, sendRequest } = useAxios();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortingOptions, setSortingOptions] = useState({
    sort_by: "created_at",
    order: "desc",
  });

  useEffect(() => {
    setSearchParams(sortingOptions);
    fetchArticles();
  }, [sortingOptions]);

  const fetchArticles = async () => {
    try {
      const { articles } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/articles?sort_by=${
          sortingOptions.sort_by
        }&order=${sortingOptions.order}`
      );
      if (!isLoading) {
        setArticles(articles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavTop isPage={true} title="Articles" />
      <FilterBar
        sortingOptions={sortingOptions}
        setSortingOptions={setSortingOptions}
      />
      <NavBottom />
    </>
  );
};

export default Home;
