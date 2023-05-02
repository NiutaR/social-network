import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";


const LogIn: React.FC = () => {

  const onFinish = (values: string) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{
          maxWidth: 500,
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link className="login-form-forgot" href="" >Forgot password</Link>
          
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link href="">register now!</Link>
        </Form.Item>
      </Form>
  );
}

export default LogIn;
