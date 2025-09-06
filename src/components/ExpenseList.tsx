import useExpenseStore from "../store/useExpenseStore";
import '../styles/ExpenseList.scss'

const ExpenseList = () => {
  const expenses = useExpenseStore(state => state.expenses);
  const deleteExpense = useExpenseStore(state => state.deleteExpense);

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
                <li key={expense.id} className="expense-item">
                  <p>{expense.category}</p>
                  <p className="expense-item__amount">{expense.amount.toLocaleString('ru-RU')} ₽</p> 
                  <p>{expense.description || '-'}</p>
                  <div className="expense-item__action">
                    <button onClick={() => deleteExpense(expense.id)}>
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )
      }
    </div>
  )
}

export default ExpenseList;