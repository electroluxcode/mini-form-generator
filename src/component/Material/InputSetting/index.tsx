
import { Form, Input,type InputProps, } from "antd";
import React from "react";
import {omit}  from "lodash-es";

export const PlaceHolderSetting: React.FC<SettingProps & InputProps> = (props) => {
  const componentProps  = omit(props,["name","label","className","style"])
  return (

    <Form.Item
      name={props?.name}
      label={props?.label}
      className={props?.className}
      style={props?.style}
      initialValue={props.defaultValue}
    >
      <Input
        {...componentProps}
      ></Input>
    </Form.Item>

  );
};

export default PlaceHolderSetting;
