import React from "react";
import { Space } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
} from "@ant-design/icons";

import dayjs from "dayjs";

import "./VotePanelView.css";
import { Article } from "../../types/types";

interface VotePanelViewProps {
  currentArticle: Article | undefined;
  currentLikes: number | undefined;
  currentArticleLike: number | undefined;
  handleLike: () => void;
  handleDislike: () => void;
}

const VotePanelView: React.FC<VotePanelViewProps> = ({
  currentArticle,
  currentLikes,
  currentArticleLike,
  handleLike,
  handleDislike,
}) => {
  return (
    currentArticle && (
      <>
        <Space className="VotePanelView__panel">
          <p>{dayjs(currentArticle.created_at).format("DD/MM/YYYY • HH:mm")}</p>
          <Space>
            <MessageOutlined />
            <p>{currentArticle.comment_count}</p>
          </Space>
          <Space>
            {currentArticleLike === 1 ? (
              <LikeFilled onClick={handleLike} />
            ) : (
              <LikeOutlined onClick={handleLike} />
            )}
            <p>{currentLikes}</p>
            {currentArticleLike === -1 ? (
              <DislikeFilled onClick={handleDislike} />
            ) : (
              <DislikeOutlined onClick={handleDislike} />
            )}
          </Space>
        </Space>
      </>
    )
  );
};

export default VotePanelView;
