import { LikeOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

import dayjs from "dayjs";
import "./CommentsListView.css";
import { Comment } from "../../types/types";
import React from "react";

interface CommentListViewProps {
  comments: Comment[] | null;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const CommentsListView: React.FC<CommentListViewProps> = ({ comments }) => {
  //   console.log(props);

  return (
    comments && (
      <>
        <List
          className="CommentsListView__List"
          itemLayout="vertical"
          size="large"
          dataSource={comments}
          renderItem={(comment: Comment) => (
            <List.Item
              key={comment.comment_id}
              actions={[
                <p>{dayjs(comment.created_at).format("DD/MM/YYYY • HH:mm")}</p>,
                <Space size="large">
                  <IconText
                    icon={LikeOutlined}
                    text={`${comment.votes}`}
                    key="list-vertical-like-o"
                  />
                </Space>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={comment.author_avatar_url} />}
                title={`@${comment.author}`}
              />
              <p>{comment.body}</p>
            </List.Item>
          )}
        />
      </>
    )
  );
};

export default CommentsListView;
