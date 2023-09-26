import Stars from './components/Stars';
import './App.css';

function App() {
  return (
    <div className="App">
      <Stars />
      <Stars count={'one'}/>
      <Stars count={true}/>
      <Stars count={-1}/>
      <Stars count={1}/>
      <Stars count={2}/>
      <Stars count={3}/>
      <Stars count={4}/>
      <Stars count={5}/>
      <Stars count={6}/> 
    </div>
  );
}

export default App;
