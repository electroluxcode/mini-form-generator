
import { Button, Form ,Space,type FormProps} from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & FormProps | any> = (props) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log(values);
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <Form form={form}>
     {props.children}

     <Form.Item {...tailLayout} style={{"width":"100%"}}>
      
         <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
         <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" >
            Fill form
          </Button>
         </div>
        
      </Form.Item>
    </Form>

  );
};

export default PlaceHolderSetting;
