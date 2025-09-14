import { create } from "zustand";
import type { Expense, Category } from "../types";

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (data: Omit<Expense, 'id'>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, updatedData: Partial<Expense>) => void;
}

const useExpenseStore = create<ExpenseStore>( (set, get) => ({
  expenses: [],

  addExpense: (data) => {
    set( (state) => {
      const newExpenseId = Date.now().toString();
      const newExpense = { ...data, id: newExpenseId };
      return {expenses: [...state.expenses, newExpense]}
    } )
  },

  deleteExpense: (id) => {
    set( (state) => ( {expenses: state.expenses.filter((expense) => expense.id !== id)} ))
  },

  updateExpense: (id, updatedData) => {
    set( (state) => ({
      expenses: state.expenses.map( (expense) => {
        if (expense.id === id) {
          return { ...expense, ...updatedData };
        }
        return expense;
      })
    }))
  },

}))

export default useExpenseStore;