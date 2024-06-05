import { Button, Form, Select } from "antd";

import { LoginFormProps } from "./LoginForm";

import "./LoginFormView.css";

const LoginFormView: React.FC<LoginFormProps> = (props) => {
  return (
    <div className="LoginFormView__container">
      <h1>Welcome to the NC News App</h1>
      <h2>Select a user</h2>
      <Form
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={props.handleLogin}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please choose a user!",
            },
          ]}
        >
          <Select
            placeholder="Choose a user"
            options={props.users.map((user) => {
              return { value: user.username };
            })}
          />
        </Form.Item>
        <Form.Item className="LoginFormView__btnContainer">
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        {/* <div className="LoginFormView__link">
          <p>Don't have an account?</p>
          <Link to="/sign-up">Sign up!</Link>
        </div> */}
      </Form>
    </div>
  );
};

export default LoginFormView;
