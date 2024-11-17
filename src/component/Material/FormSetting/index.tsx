
import { Button, Form, Input, Space, type FormProps ,type FormInstance} from "antd";
import React from "react";
import { omit } from "lodash-es";
import { useContext } from 'react';
// import { formContext } from "../Context";
import { createContext } from "react";
import { eventbus } from "@/utils/EventBus";
const formContext = createContext<FormInstance | null>(null)
export const FormSetting: React.FC<SettingProps & FormProps | any> = (props) => {

  const [form] = Form.useForm();
  
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onClick = () => {
    console.log(form.getFieldsValue())
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
 
  const onChange = () => {
    props.formGet(form)
    eventbus.emit("formChange", null)
    return form.getFieldsValue()
  }
  // const 
  return (
    <>
      <formContext.Provider value={form}>
        <Form form={form} onChange={onChange} >

          {props.children}

       
        </Form>
      </formContext.Provider>
    </>
  );
};
export {
  formContext
}
export default FormSetting;
