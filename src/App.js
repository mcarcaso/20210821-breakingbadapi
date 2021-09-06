import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";

const queryClient = new QueryClient();

const App = () => {
  const [query, setQuery] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid query={query} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
