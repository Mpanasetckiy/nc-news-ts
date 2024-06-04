import React from "react";

import { Card, Avatar, Image, Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  MessageOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";

import dayjs from "dayjs";

import "./ArticleCardView.css";
import { Article } from "../../types/types";

interface ArticleCardViewProps {
  currentArticle: Article | undefined;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ArticleCardView: React.FC<ArticleCardViewProps> = ({
  currentArticle,
}) => {
  console.log(currentArticle);

  return (
    currentArticle && (
      <>
        <Card className="ArticleCardView__Card" actions={[]}>
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
          <Space className="ArticleCardView__panel">
            <p>
              {dayjs(currentArticle.created_at).format("DD/MM/YYYY • HH:mm")}
            </p>
            <Space>
              <MessageOutlined />
              <p>{currentArticle.comment_count}</p>
            </Space>
            <Space>
              <LikeOutlined />
              <p>{currentArticle.votes}</p>
              <DislikeOutlined />
            </Space>
          </Space>
        </Card>
      </>
    )
  );
};

export default ArticleCardView;
