import { Collapse,CollapsePanelScheme } from "./Collapse";
// import {}

const ma = ()=>{
    return <>我是ma组件</>
}

export const createSchemaField = (prop)=>{
  return prop
}
export const SchemaFieldComp = createSchemaField({
    components:{
        Collapse,
        CollapsePanelScheme,
        ma
    }
})