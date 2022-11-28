import React from 'react';

const ConfirmationModal = ({ title, body, closeModal, successModal, modalData }) => {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="confirmation-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{body}</p>
                    <div className="modal-action">
                        <label onClick={() => successModal(modalData)} htmlFor="confirmation-modal" className="btn">Yes</label>
                        <button onClick={closeModal} className="btn">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;