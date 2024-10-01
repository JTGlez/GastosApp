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
    <div className="min-h-screen flex items-center justify-center bg-blue-500 ">
      {/* Formulario para ingresar los datos del usuario */}
      <button className="bg-white text-blue-500 p-4 rounded shadow animate-slide-up-fade" onClick={() => handleSetupComplete('John Doe', '5000', 'monthly', 1000)}>
        Complete Setup s
      </button>
    </div>
  );
};