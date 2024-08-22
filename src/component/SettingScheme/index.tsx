import { isFunction,isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";

// 引入 组件
import { SchemaFieldComp } from '@/component/Material';
// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item,customComponent }: RecursiveCompProps) => {
  const { children, data, refOption,...rest } = item;
  let { Component } = item

  let registerComp
  registerComp = {
    ...SchemaFieldComp["components"],
    ...customComponent["components"],
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
    children.map((child,index) => {
      return isFunction(RecursiveComp) ?
        RecursiveComp({ item: child,key:data?.compKey || index,customComponent  }) :
        <RecursiveComp item={child} key={data?.compKey || index} customComponent={customComponent}  />
    })
  ) : null;

  return <Component  {...data}  key={data?.compKey || Math.random()*10000} >
    {childElements}
  </Component>
};

// 主组件
const Comp: React.FC<CompProps> = ({ data,customComponent }) => {
  return (
    <>
      {data && data.length && Array.isArray(data) && data.map((item, index) => (
        <RecursiveComp customComponent={customComponent} key={item?.compKey || index} item={item} />
      ))}
    </>
  );
};


export default Comp;