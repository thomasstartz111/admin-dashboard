import React, { useState } from 'react';

const MessagesPage = () => {
  // Mock dataset for demo purposes
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Nurse Jane Doe',
      role: 'Nurse',
      timestamp: '2025-04-12 10:00 AM',
      content: 'Patient is stable. No new updates.',
    },
    {
      id: 2,
      sender: 'Dr. John Smith',
      role: 'Physician',
      timestamp: '2025-04-12 10:15 AM',
      content: 'Please monitor the patient’s vitals closely for the next 24 hours.',
    },
    {
      id: 3,
      sender: 'Patient John Doe',
      role: 'Patient',
      timestamp: '2025-04-12 10:30 AM',
      content: 'Thank you for the update. I am feeling better today.',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessageObject = {
      id: messages.length + 1,
      sender: 'You', // For demo purposes
      role: 'Admin', // Replace with actual role in the future
      timestamp: new Date().toLocaleString(),
      content: newMessage,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

      {/* Messages List */}
      <div className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md max-h-[400px] overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 p-3 rounded-lg ${
              message.role === 'Admin'
                ? 'bg-blue-100 text-blue-800 self-end'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            <p className="text-sm font-semibold">{message.sender}</p>
            <p className="text-xs text-gray-500">{message.timestamp}</p>
            <p className="mt-2">{message.content}</p>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-2">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="2"
        ></textarea>
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagesPage;