import './App.css';
import OperationCard from './Operation';
import { useState, useEffect } from 'react';

function App() {
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('operations');
    if (saved) {
      setOperations(JSON.parse(saved));
    }
  }, []);

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
    setCategory('');
    setAmount('');
  };

  let income = 0, expense = 0;
  operations.forEach(op => {
    if (op.type === 'income') income += op.amount;
    else expense += op.amount;
  });
  const balance = income - expense;

  return (
    <div className="App">
       <div className="summary">
        <div className="card income">Доход: {income} ₽</div>
        <div className="card expense">Расход: {expense} ₽</div>
        <div className="card balance">Балванс: {balance} ₽
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
        {operations.length === 0 ? (
          <p>Нет операций. Добавьте первую!</p>
        ) : (
          operations.map(op => (
            <OperationCard
              key={op.id}
              type={op.type}
              category={op.category}
              amount={op.amount}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
