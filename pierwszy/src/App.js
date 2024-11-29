import './App.css';
import Obrazek from './Obrazek';

function App() {
  let a = 1;
  return (
    <div>
      <Obrazek szer={200} wys={200}/>
      <Obrazek szer={400} wys={200} alt={`Obrazek${a++}`}/>
      <Obrazek szer={200} alt={`Obrazek${Math.floor(Math.random()*1000)}`}/>
    </div>
  );
}

export default App;
