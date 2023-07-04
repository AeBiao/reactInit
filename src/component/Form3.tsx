import React, { useState } from 'react';
import { RadioChangeEvent ,Input, Button} from 'antd';
import { Radio, Tabs,Form } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
const operations = <Button  type="primary">新增</Button>;
type PositionType = 'left' | 'right';
const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const { TextArea } = Input;
function Form3() {
      const [size, setSize] = useState<SizeType>('small');

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  return (
      <div>
        <Tabs
              defaultActiveKey="1"
              tabBarExtraContent={operations}
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `协议 ${id}`,
            key: id,
              children: <Form>
                  <Form.Item label={`协议${id}`} >
                      <Button type="dashed" danger style={{float:"right"}}>删除</Button>
                  </Form.Item>
               <TextArea rows={4} placeholder="请输入" maxLength={6} />
              </Form>,
          };
        })}
      />
    </div>
  )
}

export default Form3