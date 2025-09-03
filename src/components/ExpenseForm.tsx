import { useState, type FormEvent } from "react";
import useExpenseStore from "../store/useExpenseStore";
import type { Category } from "../types";
import '../styles/ExpenseForm.scss';

const ExpenseForm = () => {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<Category>('Еда');
  const [description, setDescription] = useState('');
  const addExpense = useExpenseStore(state => state.addExpense);

  const categories: Category[] = ['Еда', 'Транспорт', 'Развлечения', 'Связь', 'Жилье'];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (amount <= 0) {
      alert('Сумма должна быть больше 0');
      return;
    }

    addExpense({ category, amount, description });

    setAmount(0);
    setCategory('Еда');
    setDescription('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="amount">Сумма</label>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            onFocus={(e) => e.target.select()}
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Категория</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="description">Описание</label>
          <input 
            type="text"
            placeholder="Необязательно"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <button type="submit">Сохранить</button>
      </form>
    </>
  )
}

export default ExpenseForm;