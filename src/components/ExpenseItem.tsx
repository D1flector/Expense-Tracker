import { useState } from "react";
import useExpenseStore from "../store/useExpenseStore";
import '../styles/ExpenseItem.scss';
import type { Expense } from "../types";

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const { deleteExpense, updateExpense } = useExpenseStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({ 
    amount: expense.amount, 
    description: expense.description 
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData(prevData => ({
      ...prevData,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSave = () => {
    updateExpense(expense.id, {
      amount: editFormData.amount,
      description: editFormData.description,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditFormData({ amount: expense.amount, description: expense.description });
  };

  return (
    isEditing ? (
      <li className="expense-item is-editing">
        <p>{expense.category}</p>
        <input
          className="expense-item__input"
          type="number"
          name="amount"
          value={editFormData.amount}
          onChange={handleFormChange}
        />
        <input
          className="expense-item__input"
          type="text"
          name="description"
          value={editFormData.description || ''}
          onChange={handleFormChange}
        />
        <div className="expense-item__action">
          <button className="button button--primary" onClick={handleSave}>Сохранить</button>
          <button className="button button--secondary" onClick={handleCancel}>Отмена</button>
        </div>
      </li>
    ) : (
      <li className="expense-item">
        <p>{expense.category}</p>
        <p className="expense-item__amount">{expense.amount.toLocaleString('ru-RU')} ₽</p>
        <p>{expense.description || '-'}</p>
        <div className="expense-item__action">
          <button className="button button--secondary" onClick={() => setIsEditing(true)}>
            Редактировать
          </button>
          <button className="button button--danger" onClick={() => deleteExpense(expense.id)}>
            Удалить
          </button>
        </div>
      </li>
    )
  );
}

export default ExpenseItem;