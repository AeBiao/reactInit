import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const { Option } = Select;  
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
function Form1() {
    const [currency, setCurrency] = useState<any>('demo');
    const [sval, setSval] = useState<any>('全国');
    const [svalr, setSvalr] = useState<any>('指定渠道');
    const { token } = theme.useToken();
     const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    };
    const log = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
    };  
    const selec = (e:any) => {
        console.log(e);
        setSval(e)
    }
    const selecr = (e:any) => {
        console.log(e);
        setSvalr(e)
    }
    //表格
    const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

  return (
      <Form>
          <Row>
          <Col span={12} >
              <Form.Item name="a" label="协议客户" initialValue="选择客户" rules={[{
                  required: true,
                  message: 'Input something!',
                },]}>
                      <Input style={{ width: 200 }}></Input>
                      <span>上海正业科技有限公司</span>
              </Form.Item>
             
          </Col>
          <Col span={12}>
               <Form.Item name="ar" label="协议客户" rules={[{
                  required: true,
                  message: 'Input something!',
                },]}>
                   <Select defaultValue="demo" style={{ width: 200 }}>
          <Select.Option value="demo" >正常</Select.Option>
          <Select.Option value="demo2" >非正常</Select.Option>
        </Select>
             </Form.Item>
              </Col>
          </Row>
          <Row>
              <Col span={12}>
                  <Form.Item name="b" label="购进指标">
                      <Select defaultValue="demo3" style={{ width: 80 }} >
          <Select.Option value="demo3" >金额</Select.Option>
          <Select.Option value="demo4" >现金</Select.Option>
                    </Select>
                    <Input style={{ width: 360 }} placeholder="输入金额/数量"></Input>
                  </Form.Item>
              </Col>
              <Col span={12}>
                   <Form.Item name="b" label="纯销指标" >
                      <Select defaultValue="demo3" style={{ width: 80 }} >
          <Select.Option value="demo3" >金额</Select.Option>
          <Select.Option value="demo4" >现金</Select.Option>
                    </Select>
                    <Input style={{ width: 360 }} placeholder="输入金额/数量"></Input>
                  </Form.Item>
               </Col>
          </Row>
          <Row>
              <Col span={12}>
                  <Form.Item name="c" label="销售区域" >
                      <div className='flex  '>
                       <Select
                          placeholder="选择区域"
                          onChange={selec}
        style={{ width: 120 ,height:30}}
        options={[
          {
            value: '全国',
            label: '全国',
          },
          {
            value: '纽约',
            label: '纽约',
          },
          {
            value: '温州',
            label: '温州',
          },
        ]}
                      />
                      <Tag closable onClose={log} style={{ width: 50 ,height:30}} >
                        {sval}
                          </Tag>
                          </div>

                  </Form.Item>
               </Col>
              <Col span={12}>
                   <Form.Item name="date-time-picker" label="签订时间" >
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" defaultValue={dayjs('2022:12:12 12:08:23', 'YYYY-MM-DD HH:mm:ss')}/>
    </Form.Item>
               </Col>
          </Row>
          <Row>
              <Col span={12}>
                  <Form.Item name="d" label="购进渠道">
                      <div className='flex  '>
                       <Select defaultValue="demo5" style={{ width: 100 }}  onChange={selecr}>
          <Select.Option value="demo5" >指定渠道</Select.Option>
          <Select.Option value="demo6" >购进渠道</Select.Option>
                      </Select>
                       <Tag  onClose={log} style={{ width: 70 ,height:30}} >
                        {svalr}
                          </Tag>
                          </div>
                  </Form.Item>
              </Col>
          </Row>
          <Row>
              <Table columns={columns} dataSource={data} style={{ width: "80%",margin:"0 auto" }} pagination={false}/>;
          </Row>
    </Form>
  )
}

export default Form1