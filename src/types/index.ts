export type Category = 'Еда' | 'Транспорт' | 'Развлечения' | 'Связь' | 'Жилье';

export interface Expense {
  id: string;
  amount: number;
  category: Category;
  description?: string;
}