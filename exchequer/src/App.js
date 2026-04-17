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

      <form className="add_form">
        <div className="form-group">
          <label>Тип:</label>
          <select>
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </div>
        <div className="form-group">
          <label>Категория:</label>
          <input
            type="text"
            placeholder="еда, зарплата..."
            required
          />
        </div>
        <div className="form-group">
          <label>Сумма:</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="0.00"
            required
          />
        </div>
        <button type="submit">Добавить</button>   {}
      </form>
    </div>
  );
}

export default App;
