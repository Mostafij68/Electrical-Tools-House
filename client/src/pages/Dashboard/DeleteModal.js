import React from 'react';

const DeleteModal = ({ children }) => {
    const handleDelete = id => {
        const url = `${process.env.REACT_APP_API}/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {});
    };

    return (
        <div>
            <div className="modal" id="delete">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do you want to Cancel your order?</h3>
                    <div className="modal-action">
                        <a onClick={() => handleDelete(children)} href="#" className="btn">Yes</a>
                        <a href="#" className="btn">No</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;