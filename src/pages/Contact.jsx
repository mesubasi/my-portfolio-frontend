// Contact.jsx

import React from 'react'
import { Button, Flex, Form, Input, message } from 'antd';
import { FaChevronRight } from "react-icons/fa";
import Header from "../components/header/Header";

const About = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:3480/api/contact/to-send', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      message.success("Form Sent Successfully!")
      form.resetFields();
    } catch (error) {
      message.error("Form Failed to Submit!")
      console.log(error);
    }
  }

  return (
    <>
      <div className='fixed inset-0 bg-background bg-black bg-no-repeat bg-right-top bg-local bg-auto'>
        <Header firstLink={"/portfolio"} secondLink={"/about"} pageName={"Home"} pageNameSecond={"About"} />
      </div >
      <div className='flex justify-center'>
        <div className='w-[30%]'>
          <section >
            <Form
              layout='vertical'
              form={form}
              scrollToFirstError
              style={{
                paddingBlock: 120,
              }}
              labelCol={{
                span: 50,
              }}
              wrapperCol={{
                span: 25,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="namesurname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name Surname!',
                  },
                ]}
                label={<label style={{ color: "white" }}>Name Surname</label>}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label={<label style={{ color: "white" }}>E-mail</label>}
                rules={[
                  {
                    required: true,
                    message: 'The input is not valid E-mail!',
                    type: 'email'
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="description"
                label={<label style={{ color: "white" }}>Message</label>}
                rules={[
                  {
                    required: true,
                    message: 'Please input your Message!',
                  },
                ]}
              >
                <Input.TextArea rows={10} cols={50} />
              </Form.Item>

              <Form.Item>
                <div className="flex justify-end gap-4">
                  <Button type="primary" htmlType="submit" className='w-20 h-10 flex justify-center items-center bg-primary'>
                    <FaChevronRight className='flex' />
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </section >
        </div >
      </div>
    </>
  )
}

export default About
