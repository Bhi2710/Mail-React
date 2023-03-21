import './App.css';
import Middle from './components/Emailbody/Middle';
import Sidebar from './components/Emailbody/Sidebar';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <div className='app_body'>
        <Sidebar />
        <Middle />
        <Main />
      </div>
    </div>
  );
}

export default App;
