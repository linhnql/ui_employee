import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, DatePicker, Select, Drawer, message } from "antd";

// const { Option } = Select;

const FormAdd = (props) => {

  const onFinishFailed = (errorInfo) => {
    message.error("Please enter all required fields")
    console.log("Failed:", errorInfo);
  };

  return (
    <Drawer
      title="Add employee"
      placement="right"
      onClose={props.onCloseAddForm}
      visible={props.visibleAddForm}
    >
      <Form
        name="basic"
        form={props.addForm}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={props.onSubmitHandleAddHome}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Enter name field!",
            },
          ]}
        >
          <Input placeholder={"Enter name..."} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Chose gender!",
            },
          ]}
          >
          <Select>
            <Select.Option value="0">Male</Select.Option>
            <Select.Option value="1">Female</Select.Option>
            <Select.Option value="2">Others</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[
            {
              required: true,
              message: "Chose birthday!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Enter employee address!",
            },
          ]}

        >
          <Input placeholder={"Enter address"} />
        </Form.Item>
        <Form.Item
          label="Has account?"
          name="hasAccount"
          rules={[
            {
              required: true,
              message: "Does he/she has bank account?",
            },
          ]}
          >
          <Select>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default FormAdd;
