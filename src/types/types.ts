interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface User {
  username: string;
  name: string;
  avatar_url: string;
}

export interface Article {
  article_id: number;
  article_img_url: string;
  author: string;
  author_avatar_url: string;
  body: string;
  comment_count: number;
  created_at: string;
  title: string;
  topic: string;
  votes: number;
}
