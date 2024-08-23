import { CompProps } from "@/component/SettingScheme/type";

export const CollapseJSON: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            Component: "Input",
            data: {
                label: "我是输入框",
                name: "input",
                placeholder: "我是输入框placeholder",
                compKey:"Input-1111111",
            },
        },
        {
            Component: "Select",
            data: {
                label: "我是选择框",
                name: "select",
                compKey:"Select-1111111",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],
                defaultValue: "1"
            },
        },
      
        {
            Component: "CheckBox",
            data: {
                compKey:"CheckBox-1111111",
                label: "我是多选框",
                name: "checkbox",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],


            }
        },
        {
            // 时间选择器
            Component: "TimePicker",
            data: {
                compKey:"TimePicker-1111111",
                label: "我是时间选择器",
                name: "TimePicker",
            }
        },
        
        {
            // rate
            Component: "Rate",
            data: {
                compKey:"Rate-1111111",
                label: "我是评分",
                name: "rate",
                value: 3
            }
        },
        {
            // cascader
            Component: "Cascader",
            data: {
                compKey:"Cascader-1111111",
                label: "我是级联选择器",
                name: "cascader",
                options: [
                    {
                        value: "zhejiang",
                        label: "Zhejiang",
                        children: [
                            {
                                value: "hangzhou",
                                label: "Hangzhou",
                                children: [
                                    {
                                        value: "xihu",
                                        label: "West Lake"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: "jiangsu",
                    }
                ]
            }
        },
        {
            // slider
            Component: "Slider",
            data: {
                compKey:"Slider-1111111",
                label: "我是滑块",
                name: "slider",
                value: 50
            }
            
        },
        {
            Component: "test",
            data:{
                compKey:551
            }
        },
        {
            Component: "Operate"
            ,data:{
                compKey:5512
            }
        }
    ],
    data: {
        compKey:"123456"
    }
}]


export const JSON1: CompProps["data"] = [{
    Component: "Form",
    children: [
        {
            // 时间选择器
            Component: "DatePicker",
            data: {
                label: "我是日期选择器",
                name: "datePicker",
                type: "datetime"
            }
        },
        {
            Component: "Radio",
            data: {
                label: "我是单选框",
                name: "radio",
                options: [{
                    label: "选项一",
                    value: "1"
                }, {
                    label: "选项二",
                    value: "2"
                }],
                defaultValue: "1"
            }
        },
       
        {
            //颜色选择器
            Component: "ColorPicker",
            data: {
                label: "我是颜色选择器",
                name: "ColorPicker",
            }
        },
        {
            // switch
            Component: "Switch",
            data: {
                label: "我是开关",
                name: "switch",
                defaultValue: true
            }
        }, {
            // slider
            Component: "Slider",
            data: {
                label: "我是滑块",
                name: "slider",
            }
            
        },
        {
            Component: "test",
            data: {
                compKey:"552"
            }
        },
        {
            Component: "Operate",
            data: {
                compKey:"55"
            }
        }
    ],
    data: {
    }
}]