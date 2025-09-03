import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"

function App() {

  return (
    <div className="app-container">
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default App
