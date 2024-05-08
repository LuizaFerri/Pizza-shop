import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import "@/global.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

function App() {
  return (
    <ThemeProvider storageKey="pizzashopp-theme" defaultTheme="dark">
      <HelmetProvider>
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
