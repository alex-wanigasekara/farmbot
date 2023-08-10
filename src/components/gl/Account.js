import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Account() {
  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const [account, setAccount] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const url = `http://localhost:8080/farmbot/accounts/${id}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      form.setFieldsValue(json);
      setAccount(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: 'Hello world!',
  //     gender: 'male',
  //   });

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      // onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="baseAccount"
        label="Base Account"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="ASSETS">ASSETS</Option>
          <Option value="LIABILITIES">LIABILITIES</Option>
          <Option value="INCOME">INCOME</Option>
          <Option value="EXPENSES">EXPENSES</Option>
          <Option value="CAPITAL">CAPITAL</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          htmlType="button"
          // onClick={onReset}
        >
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
  // <div className="accounts">{account && console.table(account)}</div>;

  // <div>{{ accounts }}</div>;
}

export default Account;
