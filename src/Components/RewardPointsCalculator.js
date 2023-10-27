// RewardPointsCalculator.js

import React, { useState } from 'react';

import TransactionInput from './TransactionInput'; // Adjust the path as needed



function RewardPointsCalculator() {
    const [transactions, setTransactions] = useState([]);
    const [rewardPoints, setRewardPoints] = useState({});

    const calculatePoints = (amount) => {
        let points = 0;
        if (amount > 100) {
            points += 2 * (amount - 100);
            points += 1 * Math.min(50, amount - 100);
        } else if (amount > 50) {
            points += 1 * (amount - 50);
        }
        return points;
    };

    const handleTransactionAdd = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    // Calculate reward points when transactions change
    React.useEffect(() => {
        const pointsByCustomer = {};

        transactions.forEach((transaction) => {
            const { customer, amount } = transaction;
            const month = new Date().getMonth() + 1;
            const points = calculatePoints(amount);

            pointsByCustomer[customer] = pointsByCustomer[customer] || {};
            pointsByCustomer[customer][month] = (pointsByCustomer[customer][month] || 0) + points;
        });

        setRewardPoints(pointsByCustomer);
    }, [transactions]);

    return (
        <div>
            <TransactionInput onTransactionAdd={handleTransactionAdd} />
            <h2>Reward Points</h2>
            {Object.keys(rewardPoints).map((customer) => (
                <div key={customer}>
                    <h3>{customer}</h3>
                    {Object.keys(rewardPoints[customer]).map((month) => (
                        <p key={month}>Month {month}: {rewardPoints[customer][month]} points</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default RewardPointsCalculator;
