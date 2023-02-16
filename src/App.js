import './App.css';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://trello-2v90.onrender.com/").then(() =>
      setLoading(false)
    );
  }, []);

  // loading spinner
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
