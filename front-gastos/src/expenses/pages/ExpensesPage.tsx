import { useUserStore } from '@/store/useUserStore';

export const ExpensesPage = () => {
  // Accede al estado del store
  const { name, income, period, limit } = useUserStore();

  return (
    <div>
      <h1>Expenses Page</h1>
      <p>Name: {name}</p>
      <p>Income: {income}</p>
      <p>Period: {period}</p>
      <p>Limit: {limit}</p>
    </div>
  );
};