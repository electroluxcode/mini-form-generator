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
                    Component: "ma"
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
        defaultActiveKey: ["basic", "advance"],
    }
}]