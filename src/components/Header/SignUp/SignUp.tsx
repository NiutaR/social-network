import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import Illustration from "./Illustration/Illustration";
import styleSignUp  from './SignUp.module.css';

const SignUp: React.FC = () => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    /*const validateMessages = {
        required: 'This field is required!',
        types: {
          email: 'This field is not a valid email!',
          number: 'This field is not a valid number!',
        },
        number: {
          range: 'This field must be between ${min} and ${max}',
        },
      };*/
      
    

    const onFinish = (values: string) => {
        console.log(values);
    };
    return (
       <div className={styleSignUp.formBlock}>
        <Illustration></Illustration>
         
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
                maxWidth: 500,
              }}
        >
            <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true, },]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "username"]}
                label="Username"
                rules={[{ required: true, },]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email", },]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[{ type: "number", min: 0, max: 99, },]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    
       </div>
    );
}

export default SignUp;
