import { CompProps } from "@/component/SettingScheme/type";

export const CollapseJSON: CompProps["data"] = [{
    Component: "Collapse",
    children: [
        {
            Component: "CollapsePanelScheme",
            data: {
                compKey: "basic",
                title: "我是折叠面板一"
            },
            children: [
                {
                    Component: "ma",
                    data:{
                        compKey:"121",
                    }
                }
            ],
        },
        {
            Component: "CollapsePanelScheme",
            data: {
                compKey: "advance",
                title: "我是折叠面板二"
            },
            children: [
                    {
                        Component: <>你好</>
                    }
            ],
        },
    ],
    data: {
        compKey:"1222",
        defaultActiveKey: ["basic", "advance"],
    }
}]