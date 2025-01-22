import { useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Contact from './components/contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Projects from './components/Projects/Projects';

let x= createBrowserRouter([
  {path:'',element: <Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'projects',element:<Projects/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},

  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return<>
  <RouterProvider router={x}/>
  </>
}

export default App
