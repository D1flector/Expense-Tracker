import useExpenseStore from "../store/useExpenseStore";
import '../styles/ExpenseList.scss';
import ExpenseItem from "./ExpenseItem"; // Импорт остается

const ExpenseList = () => {
  const expenses = useExpenseStore(state => state.expenses);

  return (
    <div className="expense-list-wrapper"> 
      <h2>История трат:</h2>
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
              {expenses.map((expense) => (
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