import logo from './logo.svg';
import './App.css';
import ShoppingCartButton from './components/ShoppingCartButton/ShoppingCartButton';
import LoginRegisterButton from './components/LoginRegisterButton/LoginRegisterButton';
import Header from './layouts/Header/Header';
import MainSlider from './layouts/MainSlider/MainSlider';

function App() {
  return (
    <div className="App">
    <Header/>
    <MainSlider/>
    </div>
  );
}

export default App;
