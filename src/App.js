// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextUtils from './components/TextUtils';

function App() {
  return (
   <>
    <Navbar brandName={'Text Utils'} home={'home'}/>
    <TextUtils/>
   </>
  );
}
export default App;
