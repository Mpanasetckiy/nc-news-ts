import { useContext, useEffect, useState } from "react";
import VotePanelView from "./VotePanelView";

import { Article } from "../../types/types";
import { useAxios } from "../../hooks/useAxios";
import { AuthContext } from "../../context/auth-context";
interface VotePanelProps {
  currentArticle: Article | undefined;
}

const VotePanel: React.FC<VotePanelProps> = ({ currentArticle }) => {
  const { user, addLikedArticle } = useContext(AuthContext);
  const [currentLikes, setCurrentVotes] = useState<number | undefined>(0);
  const { isLoading, sendRequest } = useAxios();

  let currentArticleLike: number | undefined = 0;

  if (user && user.likes && currentArticle) {
    currentArticleLike = user.likes[currentArticle.article_id];
  }

  useEffect(() => {
    if (currentArticle) {
      setCurrentVotes(currentArticle.votes);
    }
  }, [currentArticle]);

  const patchArticleVotes = async (vote: number) => {
    try {
      if (currentLikes !== undefined) {
        setCurrentVotes((prev) => (prev !== undefined ? prev + vote : vote));
      }

      const { article } = await sendRequest(
        `${import.meta.env.VITE_API_URL}/articles/${
          currentArticle?.article_id
        }`,
        "PATCH",
        { inc_vote: vote }
      );
    } catch (error) {
      if (currentLikes !== undefined) {
        setCurrentVotes((prev) => (prev !== undefined ? prev - vote : vote));
      }
      console.log(error);
    }
  };

  const handleLike = () => {
    if (currentArticle) {
      if (!currentArticleLike || currentArticleLike === 0) {
        addLikedArticle(currentArticle?.article_id, 1);
        patchArticleVotes(1);
      } else if (currentArticleLike === -1) {
        addLikedArticle(currentArticle?.article_id, 1);
        patchArticleVotes(2);
      } else if (currentArticleLike === 1) {
        addLikedArticle(currentArticle?.article_id, 0);
        patchArticleVotes(-1);
      }
    }
  };

  const handleDislike = () => {
    if (currentArticle) {
      if (!currentArticleLike || currentArticleLike === 0) {
        addLikedArticle(currentArticle?.article_id, -1);
        patchArticleVotes(-1);
      } else if (currentArticleLike === 1) {
        addLikedArticle(currentArticle?.article_id, -1);
        patchArticleVotes(-2);
      } else if (currentArticleLike === -1) {
        addLikedArticle(currentArticle?.article_id, 0);
        patchArticleVotes(1);
      }
    }
  };

  return (
    <>
      <VotePanelView
        currentArticle={currentArticle}
        currentLikes={currentLikes}
        currentArticleLike={currentArticleLike}
        handleLike={handleLike}
        handleDislike={handleDislike}
      ></VotePanelView>
    </>
  );
};

export default VotePanel;
