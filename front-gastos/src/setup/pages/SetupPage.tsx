import { useUserStore } from '@/store/useUserStore';
import { useNavigate } from 'react-router-dom';

export const SetupPage = () => {
  const setUserData = useUserStore((state) => state.setUserData);
  const navigate = useNavigate();

  const handleSetupComplete = (name: string, income: string, period: string, limit: number) => {
    setUserData(name, income, period, limit);
    navigate('/expenses/home');
  };

  return (
    <div>
      {/* Formulario para ingresar los datos del usuario */}
      <button onClick={() => handleSetupComplete('John Doe', '5000', 'monthly', 1000)}>
        Complete Setup
      </button>
    </div>
  );
};