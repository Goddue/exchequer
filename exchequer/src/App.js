import './App.css';

function App() {
  return (
    <div className="App">
       <div className="summary">
        <div className="card income">Доход: {} ₽</div>
        <div className="card expense">Расход: {} ₽</div>
        <div className="card balance">Баланс: {} ₽
        </div>
      </div>
    </div>
  );
}

export default App;
