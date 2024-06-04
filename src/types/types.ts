export interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  addLikedArticle: (article_id: number, like: number) => void;
}

export interface User {
  username: string;
  name: string;
  avatar_url: string;
  likes: { [key: number]: number };
}

export interface Article {
  article_id: number;
  article_img_url: string;
  author: string;
  author_avatar_url: string;
  body: string;
  comment_count: number;
  created_at: string;
  name?: string;
  title: string;
  topic: string;
  votes: number;
}
