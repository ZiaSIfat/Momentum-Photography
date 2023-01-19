
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Title from './Components/Title/Title';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Checkout from './Components/Checkout/Checkout';
import Blogs from './Components/Blogs/Blogs';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
