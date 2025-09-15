import { useState, useMemo } from "react";
import useExpenseStore from "../store/useExpenseStore";
import '../styles/ExpenseList.scss';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = useExpenseStore(state => state.expenses);
  const [sortOrder, setSortOrder] = useState('default');

  function handleOrder(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(e.target.value);
  }

  const sortedExpenes = useMemo(() => {
    const expensesCopy = [...expenses];
    if (sortOrder === 'ascending') {
      expensesCopy.sort((asc, desc) => asc.amount - desc.amount)
    } else if (sortOrder === 'descending') {
      expensesCopy.sort((asc, desc) => desc.amount - asc.amount)
    }
    return expensesCopy;
  }, [expenses, sortOrder]);



  return (
    <div className="expense-list-wrapper"> 
      <h2>История трат:</h2>
      <div className="select-wrapper">
        <select onChange={handleOrder} value={sortOrder} className="custom-select">
          <option value="default">Сортировка: по умолчанию</option>
          <option value="ascending">Сортировка: сначала дешевые</option>
          <option value="descending">Сортировка: сначала дорогие</option>
        </select>
      </div>
      {expenses.length === 0 
        ? (<p className="empty-message">Пока что трат не было</p>)
        : (
          <>
            <div className="expense-list-header">
              <p>Категория</p>
              <p>Сумма</p>
              <p>Описание</p>
              <p>Действие</p>
            </div>
            <ul className="expense-list">
              {sortedExpenes.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} />
              ))}
            </ul>
          </>
        )
      }
    </div>
  )
}

export default ExpenseList;