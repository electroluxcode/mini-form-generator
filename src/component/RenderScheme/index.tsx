import { isFunction,isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";

// 引入 组件
import { SchemaFieldComp } from '@/component/Material';
import { useRef, useState } from "react";
import { eventbus } from "@/utils/EventBus";
// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item,customComponent, ...restData }: RecursiveCompProps) => {
  const { children, data, refOption,...rest } = item;
  let { Component } = item
  const formRef = useRef(null)
  const formGet = (form)=>{
    if(!form){
      return formRef.current
    }
    formRef.current = form
    return form
  }
  let registerComp
  if(customComponent){
    registerComp = {
      ...SchemaFieldComp["components"],
      ...customComponent["components"],
    }
  }else{
    registerComp = {
      ...SchemaFieldComp["components"],
      
    }
  }
  


  if (typeof Component === 'string') {
    Component = registerComp[Component]
    if (!Component) {
      return <>no exist</>
    }
  }
  if(typeof Component === 'object') {
    if(!Component.key) {
      // return <>nokey</>
    }
    return <>{Component}</>
  }
  if (!Component) {
    return null;
  }
  // 渲染 children 的递归调用
  const childElements = children ? (
    children.map((child) => {
      return isFunction(RecursiveComp) ?
        RecursiveComp({formRef:formRef, item: child, key: child?.data?.compKey || Math.random(), customComponent}) :
        <RecursiveComp formRef={formRef} item={child} key={child?.data?.compKey || Math.random()} customComponent={customComponent} />
    })
  ) : null;

  const [shouldRender, setShouldRender] = useState(true)

  eventbus.on("formChange",()=>{
    if(item?.guard){
      const isjudgeRender = eval(item.guard)({item,form: restData.formRef.current})
      if(isjudgeRender === false ){
        setShouldRender(false)
      }
    }
  })
  return shouldRender && <div key={Math.random()}>
    <Component 
      {...data} formRef={formRef}  key={data?.compKey || Math.random()*10000} formGet={formGet} >
    {childElements}
  </Component>
  </div>
};

// 主组件
const Comp: React.FC<CompProps> = ({ data,customComponent }) => {
  
 
  return (
    <>
      {data && data.length && Array.isArray(data) && data.map((item, index) => {

        return <RecursiveComp customComponent={customComponent} key={item?.data?.compKey || index} item={item} />
      })}
    </>
  );
};


export default Comp;