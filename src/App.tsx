import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MainPage, BasketPage } from './pages';

function App() {

  return (
    <Router>
      <Routes>        
          <Route path='/' element={<MainPage/>}></Route>
          <Route path=':page' element={<MainPage/>}></Route>
          <Route path='basket' element={<BasketPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
