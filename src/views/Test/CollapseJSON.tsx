import { CompProps } from "@/component/SettingScheme/type";

export const CollapseJSON: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            Component: "Input",
            data: {
                label:"dd",
                placeholder: "我是折叠面板一"
            },
        },
        {
            Component: "Select",
            data: {
                options:[{
                    label: "选项一",
                    value: "1"
                },{
                    label: "选项二",
                    value: "2"
                }],
                defaultValue: "1"
            },
        },
    ],
    data: {
    }
}]