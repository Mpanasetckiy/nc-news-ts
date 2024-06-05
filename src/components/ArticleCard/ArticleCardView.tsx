import React from "react";

import { Card, Avatar, Image } from "antd";

import "./ArticleCardView.css";

import { Article } from "../../types/types";
import VotePanel from "../VotePanel/VotePanel";
interface ArticleCardViewProps {
  currentArticle: Article | undefined;
}

const ArticleCardView: React.FC<ArticleCardViewProps> = ({
  currentArticle,
}) => {
  return (
    currentArticle && (
      <>
        <Card className="ArticleCardView__Card">
          <Card.Meta
            avatar={<Avatar src={currentArticle.author_avatar_url} />}
            title={currentArticle.name}
            description={`@${currentArticle.author}`}
          />
          <h1>{currentArticle.title}</h1>
          <Image
            className="ArticlesView__img"
            src={currentArticle.article_img_url}
          />
          <p>{currentArticle.body}</p>
          <VotePanel currentArticle={currentArticle}></VotePanel>
        </Card>
      </>
    )
  );
};

export default ArticleCardView;
