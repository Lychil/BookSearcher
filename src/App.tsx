import RoutesProvider from "@/router/RoutesProvider"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // чтобы при переходе на вкладку не было перезапроса
      retry: 1 // 1 перезапрос при неудаче
    }
  }
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RoutesProvider />
    </QueryClientProvider>
  );
}

export default App
