"use client";

import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/react-styles/css/utilities/Text/text.css";
import "@/app/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
