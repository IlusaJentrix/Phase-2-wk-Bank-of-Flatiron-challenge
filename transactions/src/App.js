import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import Search from "./Search";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of the external API
    const apiUrl = "https://api.npoint.io/d81f57e9c23317183b10"; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data); 
        //return the API response as an array of transactions
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to add a new transaction to the list
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Function to filter transactions based on the search term
  const filteredTransactions = Array.from(transactions).filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Transaction Management</h1>

      <TransactionForm onAddTransaction={addTransaction} />

      <Search onSearch={(term) => setSearchTerm(term)} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <TransactionTable transactions={filteredTransactions} />
      )}
    </div>
  );
}

export default App;




