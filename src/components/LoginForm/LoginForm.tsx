import LoginFormView from "./LoginFormView";

export interface LoginFormProps {
  users: User[];
  handleLogin: (chosenUser: { username: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  return <LoginFormView {...props} />;
};

export default LoginForm;
