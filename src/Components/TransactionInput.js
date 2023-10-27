// TransactionInput.js

import React, { useState } from 'react';
import RewardPointsCalculator from './RewardPointsCalculator';




function TransactionInput({ onTransactionAdd }) {
    const [customer, setCustomer] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddTransaction = () => {
        if (customer && amount) {
            onTransactionAdd({ customer, amount: parseFloat(amount) });
            setCustomer('');
            setAmount('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Customer Name"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
            />
            <input
                type="number"
                placeholder="Transaction Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
    );
}

export default TransactionInput;
