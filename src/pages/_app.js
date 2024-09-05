import "@/styles/globals.css";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
    </QueryClientProvider>
  );
}
