import './App.css'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import ProductItems from './products/comp/ProductItems'
import Functional from './products/comp/Functional'
import Button from './context-comp/Button'
import Text from './context-comp/Text'
function App() {
  return (
    <div>
      {/* <ProductItems name='Kiran' city='Hyd' />
      <Functional /> */}
      <Text />
      <Button />
    </div>
  )
}

export default App
