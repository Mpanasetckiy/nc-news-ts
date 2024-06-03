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
