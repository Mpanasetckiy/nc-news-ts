import React from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";

import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Image, List, Space } from "antd";

import { Article } from "../../types/types";

import config from "../../config.json";
import getRoute from "../../utils/getRoute.ts";

import "./ArticlesView.css";
interface ArticlesViewProps {
  articles: Article[];
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ArticlesView: React.FC<ArticlesViewProps> = ({ articles }) => {
  const { routes } = config;

  return (
    <>
      <List
        className="ArticlesView__List"
        itemLayout="vertical"
        size="large"
        dataSource={articles}
        renderItem={(article: Article) => (
          <List.Item
            key={article.article_id}
            actions={[
              <p>{dayjs(article.created_at).format("DD/MM/YYYY • HH:mm")}</p>,
              <Space size="large">
                <IconText
                  icon={MessageOutlined}
                  text={`${article.comment_count}`}
                  key="list-vertical-message"
                />
                <IconText
                  icon={LikeOutlined}
                  text={`${article.votes}`}
                  key="list-vertical-like-o"
                />
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={article.author_avatar_url} />}
              title={`@${article.author}`}
              description={`#${article.topic}`}
            />
            <Link to={getRoute(routes.article, String(article.article_id))}>
              <h1>{article.title}</h1>
            </Link>
            <Image
              className="ArticlesView__img"
              src={article.article_img_url}
            />
            <p>{article.body}</p>
          </List.Item>
        )}
      />
    </>
  );
};

export default ArticlesView;
