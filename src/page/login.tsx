import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './widthStore';
import { ConfigProvider, Button, Checkbox, Form, Input } from 'antd';
import { login } from '../api/user';
import { message } from 'antd'
import { useHistory } from 'react-router-dom';
interface TypePorps {
    card: any;
    dialog: any;
    showDialog: Function;
}

function Login(props: TypePorps) {
const history=useHistory()
    const { card, dialog, showDialog } = props;
    const { name } = card;
    const { status } = dialog;
    const onFinish = (value:any) => {
        login({ ...value }).then(res => {
            if (res.code==20000) {
                 message.open({
                type: 'success',
                content: '登录成功',
                 });
                history.push({pathname:"/",search:"name=2"})
            }
        }).then(() => {
            
        })

    }
    const onFinishFailed = (values:any) => {
        
    }
    useEffect(() => {
    },[])
    return (
        <>
            <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
                <Form name='basic' style={{maxWidth:600}} onFinish={onFinish} onFinishFailed={onFinishFailed} labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}>
                    <Form.Item label="姓名" name="userName" initialValue="admin" rules={[{ required: true, message: "请填写姓名" }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="密码" name="password" initialValue="admin@12138" rules={[{ required: true, message: "请填写密码" }]}> 
                        <Input></Input>
                    </Form.Item>
                     <Form.Item  valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                    </Form.Item>
                </Form>
                </ConfigProvider>
            </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
