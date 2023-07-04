import React from 'react'
import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
    //表格
    const columns: ColumnsType<DataType> = [
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
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
];
    //表格2
    const columnss: ColumnsType<DataType> = [
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) =>  <Select defaultValue="demo3"  >
          <Select.Option value="demo3" >金额</Select.Option>
          <Select.Option value="demo4" >现金</Select.Option>
                    </Select>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) =>  <Select defaultValue="demo3"  >
          <Select.Option value="demo3" >金额</Select.Option>
          <Select.Option value="demo4" >现金</Select.Option>
                    </Select>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Input placeholder='请输入'></Input>,
        },
   {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) =>  <Select defaultValue="demo3"  >
          <Select.Option value="demo3" >金额</Select.Option>
          <Select.Option value="demo4" >现金</Select.Option>
                    </Select>,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) =>  <DatePicker defaultValue={dayjs('2015/01/01','HH:mm:ss')}  />,
  },
  {
    title: '协议价（元）',
    dataIndex: 'name',
    key: 'name',
    render: (text) =>  <DatePicker defaultValue={dayjs('2015/01/01', 'HH:mm:ss')}/>,
  },
]

const datas: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

function Form2() {
  return (
      <>
          <Form>
              <Row>
                  <Col span={4}>
                      <Form.Item name="a" label="产品" >
                          <Input style={{ width: "80px" }} placeholder='选择产品'></Input>
                           <a href="###">美复胶丸 24元/盒</a>
                      </Form.Item>
                         
                  </Col>
                  <Col span={4}>
                      <Form.Item name="time" label="协议效期" >
                       <RangePicker showTime />
                          
                       </Form.Item>
                  </Col>
                  <Col span={15}></Col>
                  <Col span={1}>
                      <Button type="dashed" danger>删除</Button>
                  </Col>
              </Row>
              <Row>
                  <Table columns={columns} dataSource={data} style={{ width: "100%" }} pagination={false} />
                    <Table columns={columnss} dataSource={datas} style={{ width: "100%" }} pagination={false}/>
                  
              </Row>
          </Form>
      </>
  )
}

export default Form2