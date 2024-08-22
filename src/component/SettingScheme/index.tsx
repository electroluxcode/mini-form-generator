import { isFunction,isObject } from "lodash-es";
import { CompProps, RecursiveCompProps } from "./type";

// 引入 组件
import { SchemaFieldComp } from '@/component/Material';

// 递归组件
const RecursiveComp: React.FC<RecursiveCompProps> | React.ElementType | any = ({ item }: RecursiveCompProps) => {
  const { children, data, ...rest } = item;
  let { Component } = item
  if (typeof Component === 'string') {
    Component = SchemaFieldComp["components"][Component]
    if (!Component) {
      return <>no exist</>
    }
  }
  if(typeof Component === 'object') {
    return <>{Component}</>
  }
  if (!Component) {
    return null;
  }
  // 渲染 children 的递归调用
  const childElements = children ? (
    children.map((child,index) => {
      console.log(33,RecursiveComp,data)
      return isFunction(RecursiveComp) ?
        RecursiveComp({ item: child,key:data?.compKey || index  }) :
        <RecursiveComp item={child} key={data?.compKey || index}  />
    })
  ) : null;

  console.log("childElementsL", childElements,data)
  try{
    return <Component  {...data}  key={data?.compKey || ''}>
    {childElements}
  </Component>
  } catch {
    return 
  }

};

// 主组件
const Comp: React.FC<CompProps> = ({ data }) => {
  console.log("RecursiveComp:", data)
  return (
    <>
      {data.map((item, index) => (
        <RecursiveComp key={item?.compKey || index} item={item} />
      ))}
    </>
  );
};


export default Comp;