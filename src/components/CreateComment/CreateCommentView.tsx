import { Button, Input, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import "./CreateCommentView.css";

interface CreateCommentViewProps {
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClick: () => void;
  commentBody: string;
  inputStatus: boolean;
}

const CreateCommentView: React.FC<CreateCommentViewProps> = (props) => {
  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        className="CreateCommentView__container"
      >
        <Space style={{ width: "100%", justifyContent: "space-around" }}>
          <Input.TextArea
            status={!props.inputStatus ? "" : "error"}
            maxLength={500}
            placeholder="Add a comment"
            value={props.commentBody}
            onChange={props.handleChange}
          />

          <Button type="default" shape="circle" onClick={props.handleClick}>
            +
          </Button>
        </Space>
      </Space>
    </>
  );
};

export default CreateCommentView;
