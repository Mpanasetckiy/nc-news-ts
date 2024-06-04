import { useParams } from "react-router-dom";

import NavTop from "../components/NavTop/NavTop";
import NavBottom from "../components/NavBottom/NavBottom";
import ArticleCard from "../components/ArticleCard/ArticleCard";

const Article = () => {
  const { article_id } = useParams();

  return (
    <>
      <NavTop title="Article" isPage={false} />
      <ArticleCard articleId={article_id} />
      <NavBottom />
    </>
  );
};

export default Article;
