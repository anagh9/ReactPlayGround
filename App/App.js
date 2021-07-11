import React from "react";
import { Header } from "./Component/Header";
import { Balance } from "./Component/Balance";
import { IncomeExpenses } from "./Component/IncomeExpenses";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
