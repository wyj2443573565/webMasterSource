import React, { Component } from 'react'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ContextDemo from '../02/context'
import la from './loadableComponent'
const files=require.context('./childRoutes',false,/\.js$/)
const routeList=[]
files.keys().forEach(key=>{
  const child=files(key).default
  routeList.push(...child)
})

const SubRoute=()=>{
  return(
    <BrowserRouter>
      <Switch>
        {
          routeList.map(value=>{
            return(
              <PrivateRoute
                exact={value.exact===undefined?true:false}
                path={value.path}
                key={value.path}
                component={la(value.component)}
              />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}
export  default  SubRoute
