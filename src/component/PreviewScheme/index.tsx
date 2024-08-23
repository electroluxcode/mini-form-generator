import { isFunction, isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";

import styles from './index.module.less';

import svg from "@/asset/image/delete.svg"
import eyeopen from "@/asset/image/eye-open.svg"
// 引入 组件
import { SchemaFieldComp } from '@/component/Material';
import { message, Modal } from "antd";
import { useState ,useContext} from "react";
import { eventbus } from "@/utils/EventBus";
// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item, customComponent }: RecursiveCompProps) => {
  const { children, data, refOption, ...rest } = item;
  let { Component } = item
  const [isShow, setIsShow] = useState(true)
  const onClick = () => {
    message.success("删除组件")
    setIsShow(false)
    eventbus.emit("delete",data)
  }
  let registerComp
  registerComp = {
    ...SchemaFieldComp["components"],
    ...customComponent["components"],
  }

  let compKey = Math.random() * 10000
  let isMain = false
  if (typeof Component === 'string') {
    if (Component == "Form") {
      isMain = true
    }
    Component = registerComp[Component]
    if (!Component) {
      return <>no exist</>
    }
  }
  if (typeof Component === 'object') {
    if (!Component.key) {
      return <>nokey</>
    }
    return <>{Component}</>
  }
  if (!Component) {
    return <>no component</>;
  }
  // 渲染 children 的递归调用
  const childElements = children ? (
    children.map((child) => {
      console.log("isFunction(RecursiveComp).", isFunction(RecursiveComp))
      return <RecursiveComp item={child} key={child?.data?.compKey } customComponent={customComponent} />
        
    })
  ) : null;
  if (isMain) {
    return <div key={Math.random()}>
      <Component  {...data}  >
        {childElements}
      </Component>
    </div>
  }
 
  return <div key={Math.random()}>
    {
      isShow &&
      <div className={styles.formitem}>
        <div className={styles.dragpanel}>
          <div className={styles.panellist} >
            <img className={styles.panelimg} src={eyeopen} alt="" onClick={() => {
              Modal.info({
                title: '组件面板参数(预渲染)',
                content: JSON.stringify(data, null, 2),
                centered: true
              })
            }} />
            <img className={styles.panelimg} src={svg} alt="" onClick={onClick} />
          </div>
        </div>
        <Component  {...data} key={data?.compKey || compKey} >
          {childElements}
        </Component>
      </div>
    }
  </div>


};

// 主组件
const Comp: React.FC<CompProps> = ({ data, customComponent }) => {
  // const 
  return (
    <>
      {data && data.length && Array.isArray(data) && data.map((item, index) => {
        return <RecursiveComp customComponent={customComponent} key={index} item={item} />
      })}
    </>
  );
};


export default Comp;