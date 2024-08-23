
import { Form, InputNumber,type InputNumberProps, } from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & InputNumberProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style","defaultValue","compKey"])
  return (
    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
      <InputNumber
        {...componentProps}
      />
    </Form.Item>

  );
};

export default PlaceHolderSetting;
