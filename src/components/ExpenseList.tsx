import useExpenseStore from "../store/useExpenseStore";
import '../styles/ExpenseList.scss'

const ExpenseList = () => {
  
  const expenses = useExpenseStore(state => state.expenses)
  const deleteExpense = useExpenseStore(state => state.deleteExpense)

return (
  <>
    <h1>История трат:</h1>
    {expenses.length === 0 
      ? (<p>Пока что трат не было</p>)
      : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <p>{expense.category}</p>
              <p>{expense.amount}</p>
              <p>{expense.description}</p>
              <button onClick={() => deleteExpense(expense.id)}>Удалить трату</button>
            </li>
          ))}
        </ul>
      )
    }
  </>
)

}

export default ExpenseList;