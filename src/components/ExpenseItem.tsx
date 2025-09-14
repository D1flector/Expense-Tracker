import useExpenseStore from "../store/useExpenseStore";
import type { Expense } from "../types";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const deleteExpense = useExpenseStore(state => state.deleteExpense);

  return (
    <li className="expense-item">
      <p>{expense.category}</p>
      <p className="expense-item__amount">{expense.amount.toLocaleString('ru-RU')} ₽</p>
      <p>{expense.description || '-'}</p>
      <div className="expense-item__action">
        <button onClick={() => deleteExpense(expense.id)}>
          Удалить
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;