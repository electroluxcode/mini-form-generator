import { useRoutes} from 'react-router-dom'
import { AppSwrapper } from './style'

import routes from './router'
import {Provider} from 'react-redux'
import store from './store'


interface Function{
  getName:any
}


// eslint-disable-next-line no-extend-native

function App() {
  // console.log("routes:",routes)
  // routes.push({
  //   path:"/path2",
  //   element:components["login"]()
  // } as any)
  // @ts-ignore
  const element = useRoutes(routes)
//   console.log("则会使：22",element)
  return (
    <>
  <Provider store={store} >
    <AppSwrapper>{element}</AppSwrapper>
    {/* ceshi */}
  </Provider>
     
    </>
  )
}

export default App