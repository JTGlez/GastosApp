import useSyncWithDatabase from "./hooks/useSyncWithDB"
import { AppRouter } from "./router/AppRouter"

export const GastosApp = () => {
    useSyncWithDatabase();
    return <AppRouter />;
}
