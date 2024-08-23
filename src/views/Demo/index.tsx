
import Comp from '@/component/PreviewScheme'

import React, { useContext, useEffect } from 'react'
import { PreviewJSON } from "./PreviewJSON"
import { Button, Input, message } from 'antd'
import { isObject } from "lodash-es"
import styles from "./index.module.less"
import { eventbus } from '@/utils/EventBus'
const TestComp = () => {
  return <div style={{ marginBottom: "16px" }} key={"959"}>
    我是自定义组件：传入customComponent数组可自定义你自己的元素
  </div>
}
let customComponent = {
  components: {
    "test": TestComp,
    data:{
      compKey:2
    }

  }
}
// dfs递归children 寻找指定的name
const deleteByName:any = (options, name) => {
  if(!options){
    return
  }
  
  // console.log("ci:", options,name)
  for (let i = 0; i < options.length; i++) {
        if(options[i]?.data?.name == name){
          options.splice(i,1)
          return options
      }
      if (options[i].children) {
          options[i].children = deleteByName(options[i].children,name) ?? [];
      }
  }
  return options;
};

import { createContext } from "react";


let EventbusContext = createContext(eventbus)

export {EventbusContext}
export default function Test() {
  let [textState, setTextState] = React.useState(JSON.stringify(PreviewJSON, null, 2))
  const [isError, setIsError] = React.useState(false)
  let EventbusContextCase = useContext(EventbusContext)

 
  const onChange = (e) => {
    try {
      if (isObject(JSON.parse(e.target.value))) {
        setTextState(e.target.value)
        setIsError(false)
      }
    } catch {
      setTextState(e.target.value)
      setIsError(true)
    }

  }
  EventbusContextCase.on("delete",(e = {})=>{
    const data = deleteByName(JSON.parse(textState),e?.name)
    setTextState(JSON.stringify(data, null, 2))
    // setTextState(JSON(data))
    console.log("data", data,PreviewJSON)
  })
  return (
    <>
   
      <div className={styles.container}>
       
        <div className={styles.bgsize} >
          <div className={styles.bgtitle}>
            组件选择
          </div>

        </div>
        <div className={styles.preview}>
          <Comp data={isError ? [] : JSON.parse(textState)} customComponent={customComponent}></Comp>
        </div>
        <div className={styles.bgsize}>
          <div className={styles.bgtitle}>
            组件json预览
          </div>
          <Input.TextArea style={{
            height: "90%"
          }}
            onChange={(e)=>{
              onChange(e)
            }
            }
            value={textState}></Input.TextArea>
        </div>
      </div>
      
    </>

  )
}
