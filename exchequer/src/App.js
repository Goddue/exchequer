import './App.css';
import OperationCard from './Operation';

function App() {
  let balance = 0;
  let expence = 0;
  let income = 0;
  return (
    <div className="App">
       <div className="summary">
        <div className="card income">Доход: {balance} ₽</div>
        <div className="card expense">Расход: {income} ₽</div>
        <div className="card balance">Балванс: {expence} ₽
        </div>
      </div>

      <form className="add_form">
        <div className="form_group">
          <label>Тип:</label>
          <select>
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </div>
        <div className="form_group">
          <label>Категория:</label>
          <input
            type="text"
            placeholder="еда, зарплата..."
            required
          />
        </div>
        <div className="form_group">
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
      <div className='operations_list'>
        <OperationCard type="income" category="Зарплата" amount="50000"/>
      </div>
    </div>
  );
}

export default App;
