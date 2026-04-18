import React from 'react';
import './Operation.css';

function OperationCard({ type, category, amount, id,  onDelete}) {
    const typeLabel = type === 'income' ? 'Доход' : 'Расход';
    const formattedAmount = type === 'expense' ? `-${amount} ₽` : `+${amount} ₽`;

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={'operation_card'}>
            <div className="card_details">
                <div className="card-category">{ category }</div>
                <div className="card-type">{ typeLabel }</div>
            </div>
            <div className="card-amount"> {formattedAmount}</div>
            <button className="delete-btn" onClick={handleDelete}>Делит</button>

        </div>
    );
};

export default OperationCard;