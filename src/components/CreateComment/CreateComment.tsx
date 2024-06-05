import { useContext, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { AuthContext } from "../../context/auth-context";

import CreateCommentView from "./CreateCommentView";
import { Comment } from "../../types/types";

interface CreateCommentProps {
  articleId: string | undefined;
  comments: Comment[] | null;
  setComments: React.Dispatch<React.SetStateAction<Comment[] | null>>;
}

const CreateComment: React.FC<CreateCommentProps> = ({
  articleId,
  setComments,
}) => {
  const [commentBody, setCommentBody] = useState("");
  const [inputStatus, setInputStatus] = useState(false);
  const { isLoading, sendRequest, contextHolder } = useAxios();
  const { user } = useContext(AuthContext);

  const postComment = async () => {
    try {
      const { newComment } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/articles/${articleId}/comments`,
        "POST",
        {
          username: user?.username,
          body: commentBody.trim(),
        }
      );
      if (!isLoading) {
        setComments((prev) => {
          if (prev !== null) {
            return [
              { ...newComment, author_avatar_url: user?.avatar_url },
              ...prev,
            ];
          } else {
            return { ...newComment, author_avatar_url: user?.avatar_url };
          }
        });
        setInputStatus(false);
        setCommentBody("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputVal = target.value;
    setCommentBody(inputVal);
    setInputStatus(false);
  };

  const handleClick = () => {
    if (commentBody !== "" && user && user.username) {
      postComment();
    } else {
      setInputStatus(true);
    }
  };
  return (
    user && (
      <>
        {contextHolder}
        <CreateCommentView
          handleChange={handleChange}
          handleClick={handleClick}
          commentBody={commentBody}
          inputStatus={inputStatus}
        />
      </>
    )
  );
};

export default CreateComment;
