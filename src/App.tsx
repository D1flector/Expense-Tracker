import ExpenseList from "./components/ExpenseList"
import ExpenseForm from "./components/ExpenseForm"

function App() {

  return (
    <div className="app-container">
      <h1 className="app-title">Трекер расходов</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}

export default App
