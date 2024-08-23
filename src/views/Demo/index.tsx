
import Comp from '@/component/PreviewScheme'

import React from 'react'
import { CollapseJSON, JSON1 } from "./CollapseJSON"
import { Button, Input, message } from 'antd'
import { isObject } from "lodash-es"
import styles from "./index.module.less"
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

export default function Test() {
  let [textState, setTextState] = React.useState(JSON.stringify(CollapseJSON, null, 2))
  const [isError, setIsError] = React.useState(false)
  return (
    <>
      <div className={styles.container}>
        {/* <div className={
          styles.item1
        }>
          <Button style={{padding:"2px 5px","margin":"0 2px"}} onClick={()=>{
            const jsonString = JSON.stringify(JSON1, null, 2); // 格式化 JSON
            const textarea = document.createElement('textarea');
            textarea.value = jsonString;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            message.success("复制成功")
          }}>复制预设1</Button>
          
        </div> */}
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
            onChange={(e) => {
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
            }
            value={textState}></Input.TextArea>
        </div>
      </div>
    </>

  )
}