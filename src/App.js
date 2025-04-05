import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const endpoints = [
      "http://localhost:5000/",
      "http://localhost:5000/all",
    ];
    Promise.all(endpoints.map(endpoint => 
      fetch(endpoint).then(response => {
        if (!response.ok) {
          throw new Error(`Error fetching ${endpoint}`);
        }
        return response;
      })
    ))
    .then(() => {
      setLoading(false);
    })
    .catch(error => {
      console.error("Failed to load data:", error);
      toast.error("Failed to load data. Please try again later.");
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (<div className='h-screen w-screen flex justify-center items-center'>
      <Loading />
      </div>)
  }

  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
      <Home />
    </div>
  );
}

export default App;
