import CommentsListView from "./CommentsListView";

import { Comment } from "../../types/types";
interface CommentsListProps {
  comments: Comment[] | null;
}

const CommentsList: React.FC<CommentsListProps> = (props) => {
  return (
    <>
      <CommentsListView {...props} />
    </>
  );
};

export default CommentsList;
