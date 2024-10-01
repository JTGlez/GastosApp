import { Outlet } from 'react-router-dom';

export const ExpensesLayout = () => {
  return (
    <div>
      <h1>Expenses Module</h1>
      <Outlet />
    </div>
  );
};
