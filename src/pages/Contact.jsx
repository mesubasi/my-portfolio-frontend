// Contact.jsx

import React from 'react'
import { Button, Flex, Form, Input, message } from 'antd';
import Header from "../components/header/Header"

const About = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(() => {
      message.success("Your message was sent successfully!")
    }).catch((error) => {
      message.error("Please fill out all form fields")
    })
  }

  return (
    <>
      <div className='fixed inset-0 bg-background bg-black bg-no-repeat bg-right-top bg-local bg-auto'>
        <Header />
      </div >
      <div className='flex justify-center'>
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
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
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

            <Form.Item
              wrapperCol={{
                offset: 14,
              }}
            >
              <Flex gap="small">
                <Button type="primary" htmlType="submit" onClick={handleSubmit} >
                  Submit
                </Button>
                <Button danger onClick={() => {
                  form.resetFields();
                  message.success('Form fields cleared successfully');
                }}>
                  Clear
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </section >
      </div >
    </>
  )
}

export default About
