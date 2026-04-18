import React from 'react';

function OperationCard({ type, category, amount }) {
    const typeLabel = type === 'income' ? 'Доход' : 'Расход';
    const formattedAmount = type === 'expense' ? `-${amount} ₽` : `+${amount} ₽`;

    return (
        <div className={'operation_card'}>
            <div className="card_details">
                <div className="card-category">{ category }</div>
                <div className="card-type">{ typeLabel }</div>
            </div>
            <div className="card-amount"> { formattedAmount }</div>
        </div>
    );
};

export default OperationCard;