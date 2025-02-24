import './App.css';
import Home from './pages/home/home';
import YourPayments from './components/Forms/YourPayments';
import './styles/global.css';

function App() {
  return (
    <div className="App max-width">
      <Home />
      <YourPayments />

    </div>
  );
}

export default App;
