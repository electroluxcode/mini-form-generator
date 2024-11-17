import { CompProps } from "@/component/RenderScheme/type";
import { genRandomKey } from "@/utils/genRandomKey";

export const PreviewJSON: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            Component: "Input",
            guard: `({item,value,form})=>
            {       
                  const itemContainer = form.getFieldsValue()
                    if(itemContainer.input11 === "noshow" && item.data.name === "input11"){
                        return false
                }
                    
            }`,
            data: {
                label: "我是输入框11",
                name: "input11",
                placeholder: "我是输入框placeholder",
                compKey:genRandomKey(),
            },
        },{
            Component: "Input",
            guard: `({item,value,form})=>{
                console.log({item,value,form})
            }
            `,
            data: {
                label: "我是输入框99",
                name: "input99",
                placeholder: "我是输入框placeholder",
                compKey:genRandomKey(),
            },
        },
        
        
        {
            Component: "test",
            data:{
                compKey:genRandomKey(),
                name:"我是test组件"
            }
        },
        // PreviewSetting
        {
            Component: "PreviewSetting",
            data:{
                compKey:genRandomKey(),
                 name:"我是PreviewSetting组件"
            }
        },
        // {
        //     Component: "Operate",
        //     data:{
        //          name:"我是Operate组件"
        //     }
        // }
    ],
    data: {
        compKey:genRandomKey(),
    }
}]

