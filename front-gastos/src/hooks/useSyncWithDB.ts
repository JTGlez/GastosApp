import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';

interface UserData {
  name: string;
  income: number;
  period: string;
  limit: number;
}

// Simulación de una función que verifica los datos en la base de datos
const fetchUserDataFromDatabase = async (): Promise<UserData | null> => {
  // Aquí iría la lógica para obtener los datos de la base de datos
  // Por ahora, asumimos que devuelve null si no hay datos
  return null;
};

const useSyncWithDatabase = () => {
  const setUserData = useUserStore((state) => state.setUserData);

  useEffect(() => {
    const syncData = async () => {
      const localData = useUserStore.getState();
      const remoteData = await fetchUserDataFromDatabase();

      if (!remoteData) {
        // Si no hay datos en la base de datos, asumimos que los datos locales son correctos
        console.log('No remote data found, using local data.');
      } else if (
        localData.name !== remoteData.name ||
        Number(localData.income) !== Number(remoteData.income) ||
        localData.period !== remoteData.period ||
        localData.limit !== remoteData.limit
      ) {
        // Si los datos locales y remotos no coinciden, actualizamos el store
        console.log('Data mismatch, updating local store with remote data.');
        setUserData(remoteData.name, remoteData.income.toString(), remoteData.period, remoteData.limit);
      }
    };

    syncData();
  }, [setUserData]);
};

export default useSyncWithDatabase;
