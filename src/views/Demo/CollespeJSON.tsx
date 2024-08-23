import { CompProps } from "@/component/SettingScheme/type";

export const PreviewJSON: CompProps["data"] = [{
    Component: "Collapse",
    children: [
        {
            Component: "CollapsePanelScheme",
            data: {
                key:"basic",
                compKey:"Input-1111111",
            },
            children:[{
                
            }]
        },
        
    ],
    data: {
        compKey:"123456",
        defaultActiveKey:["basic", "advance"]
    }
}]

