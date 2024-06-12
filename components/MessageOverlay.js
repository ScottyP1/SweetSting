// MessageOverlay.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const MessageOverlay = ({ message, type, onClose }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-lg max-w-sm">
                <div className={`text-lg font-semibold ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {type === 'success' ? 'Success' : 'Error'}
                </div>
                <div className="text-gray-800 mt-2">{message}</div>
                <button
                    className="absolute top-0 right-0 px-4 py-2 focus:outline-none"
                    onClick={onClose}
                >
                    <svg className="h-6 w-6 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>,
        document.body
    );
};

export default MessageOverlay;
