import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import NavBar from './components/NavBar'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductsDetail from './pages/ProductsDetail'
import Purchases from './pages/Purchases'

function App() {

  const isLoading = useSelector(state => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
        <NavBar/>
        {isLoading && <LoadingScreen/>}
        <Container className='m-5'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductsDetail/>}/>
            <Route element={<ProtectedRoutes/>}>
              <Route path='/purchases' element={<Purchases/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App
