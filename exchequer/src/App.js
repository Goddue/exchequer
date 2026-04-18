import './App.css';
import OperationCard from './Operation';
import { useState, useEffect } from 'react';

function App() {
  let balance = 0;
  let expence = 0;
  let income = 0;

  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const [operations, setOperations] = useState([]);
  useEffect(() => {
    localStorage.setItem('operations', JSON.stringify(operations));
  }, [operations]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOperation = {
      id: Date.now(),
      type: type,
      category: category.trim(),
      amount: parseFloat(amount),
    };

    setOperations([...operations, newOperation]);
    // Очищаем поля формы (категорию и сумму, тип оставляем как был)
    setCategory('');
    setAmount('');
  };

  return (
    <div className="App">
       <div className="summary">
        <div className="card income">Доход: {balance} ₽</div>
        <div className="card expense">Расход: {income} ₽</div>
        <div className="card balance">Балванс: {expence} ₽
        </div>
      </div>

      <form className="add_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label>Тип:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Расход</option>
            <option value="income">Доход</option>
          </select>
        </div>
        <div className="form_group">
          <label>Категория:</label>
          <input
            type="text"
            placeholder="еда, зарплата..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
