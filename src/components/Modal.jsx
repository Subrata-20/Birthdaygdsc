import React, { useState } from 'react';
import Birth from './Birth';

const UserInfoModal = ({ handleClose, handleSubmit }) => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [message, setMessage] = useState('');

  const object = {
    name, day, month, message
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(object);
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white backdrop-blur-sm bg-opacity-10 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Enter Your Details</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded outline-none" 
              required
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Birthdate (Day)</label>
            <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded outline-none" 
              required
              value={day} 
              onChange={(e) => setDay(e.target.value)} 
              placeholder="Enter the day (1-31)" 
              min={1}
              max={31}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Month</label>
            <select 
              className="w-full p-2 border text-gray-800 border-gray-300 rounded outline-none" 
              value={month} 
              required
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Select Month</option>
              {["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"].map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-100">Message</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded outline-none" 
              value={message} 
              required
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Enter your message" 
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded" 
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    setUserInfo(data);
    console.log(data); // You can use this data wherever you need it
  };

  return (
    <>
      {isModalOpen && (
        <UserInfoModal 
          handleClose={handleCloseModal} 
          handleSubmit={handleSubmit} 
        />
      )}
      {userInfo && <Birth object={userInfo} />}
    </>
  );
};

export default Modal;
