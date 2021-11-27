import './Registration.css';
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Select, Button, DatePicker } from 'antd';
import {Container} from '../../wrappers/container/Container';
import {Loader} from '../../components/loader/Loader';
import {defaultAvatar} from '../../constants/api/common';
import { addAction, resetAction } from '../../actions/RegistrationActions';

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    name: '${label} is not a valid name!',
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
    string: {
      len: "'${label}' must be exactly ${len} characters",
      min: "'${label}' must be at least ${min} characters",
      max: "'${label}' cannot be longer than ${max} characters",
      range: "'${label}' must be between ${min} and ${max} characters",
    },
  pattern: {
      mismatch: "поле неверно заполнено",
  }
};
/* eslint-enable no-template-curly-in-string */

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value=""> </Option>
        <Option value="mr">mr.</Option>
        <Option value="ms">ms.</Option>
        <Option value="mrs">mrs.</Option>
        <Option value="miss">miss.</Option>
        <Option value="dr">dr.</Option>
      </Select>
    </Form.Item>
);

const Registration = ({loading, id, addUser, error, resetState}) => {
  const history = useHistory();
    useEffect(() => {
        if(id)
        {
            history.push("/user/"+id);
            resetState();
            return;
        }
        if(error)
        {
            resetState();
            alert(error);
        }
    }, [id, error]);


  const onFinish = (form) => {
    const [firstName, lastName] = form.name.split(" ");
    const date = form.birth? (new Date(form.birth)).toISOString() : "";
    addUser({
        title: form.prefix,
        firstName: firstName,
        lastName: lastName,
        gender: form.gender,
        email: form.email,
        dateOfBirth: date,
        phone: form.phone,
        picture: defaultAvatar,
        location: {
          street: form.street,
          city: form.city,
          state: form.state,
          country: form.country
        }
    });
  };

  return (
    <section className="registration"><Container>
        {loading? <Loader/> : ""}
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name='name' label="Имя Фамилия" rules={[{
            required: true ,
            pattern: "^[A-Za-zА-Яа-я]{2,50} [A-Za-zА-Яа-я]{2,50}$"}
          ]}>
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item name='email' label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='gender' label="Пол">
            <Select style={{ width: 90 }}>
              <Select.Option value=""> </Select.Option>
              <Select.Option value="female">Ж</Select.Option>
              <Select.Option value="male">М</Select.Option>
              <Select.Option value="other">O</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name='birth'label="День Рождение">
            <DatePicker />
          </Form.Item>
          <Form.Item name='phone' label="Телефон">
            <Input />
          </Form.Item>
          <Form.Item name='state' label="Штат/Область" rules={[{ min: 2, max: 30 }]}>
            <Input />
          </Form.Item>
          <Form.Item name='street' label="Улица" rules={[{ min: 2, max: 100 }]}>
            <Input />
          </Form.Item>
          <Form.Item name='city' label="Город" rules={[{ min: 2, max: 30 }]}>
            <Input />
          </Form.Item>
          <Form.Item name='country' label="Страна" rules={[{ min: 2, max: 30 }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
          </Form.Item>
        </Form>
    </Container></section>
  );
};

export default connect(
  (state) => ({
    loading: state.registration.loading,
    id: state.registration.id,
    error: state.registration.error,
  }),
  (dispatch) => ({
    addUser: bindActionCreators(addAction, dispatch),
    resetState: bindActionCreators(resetAction, dispatch),
  }),
)(Registration);