import useExpenseStore from "../store/useExpenseStore";

const ExpenseList = () => {
  
  const expenses = useExpenseStore(state => state.expenses)

return (
  <>
    <h1>История трат</h1>
    {expenses.length === 0 
      ? (<p>Пока что трат не было</p>)
      : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <p>{expense.category}</p>
              <p>{expense.amount}</p>
            </li>
          ))}
        </ul>
      )
    }
  </>
)

}

export default ExpenseList;