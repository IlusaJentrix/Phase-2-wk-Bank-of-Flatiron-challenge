import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    category: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onAddTransaction with the newTransaction data
    onAddTransaction(newTransaction);

    // Reset the form fields after submission
    setNewTransaction({
      category: "",
      description: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;

