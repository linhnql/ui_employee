import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, InputNumber, Select, Drawer, DatePicker, message } from "antd";

const { Option } = Select;

const FormUpdate = (props) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Something went wrong, please try again!")
  };

  return (
    props.data !== undefined && props.homeId === props.data.id && (
      <Drawer
        title="Update employee information"
        placement="right"
        onClose={props.onCloseUpdateForm}
        visible={props.visibleUpdateForm}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={props.onSubmitHandleUpdateHome}
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
            initialValue={`${props.data?.address}`}
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
            initialValue={props.data?.gender}
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
            initialValue={props.data?.birthday}
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
            initialValue={`${props.data?.address}`}
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
            initialValue={props.data?.hasAccount}
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

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update employee information
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    )
  );
};

export default FormUpdate;
