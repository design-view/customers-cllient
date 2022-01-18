import './App.css';
import CustomerList from './components/CustomerList';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateCustomer from './components/CreateCustomer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const title = "그린고객관리";
  return (
    <div className="App">
      <Header title={title} />
      <div className='contents'>
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/create" element={<CreateCustomer />} />
        </Routes>
      </div> 
      <Footer title={title}/>
    </div>
  );
}

export default App;
