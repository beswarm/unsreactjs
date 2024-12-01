import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/icons';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <div className="grid gap-6">
        <div className="flex items-center space-x-4">
          <MailIcon className="h-6 w-6 text-blue-600" />
          <span className="text-gray-600">contact@myapp.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <PhoneIcon className="h-6 w-6 text-blue-600" />
          <span className="text-gray-600">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-4">
          <MapPinIcon className="h-6 w-6 text-blue-600" />
          <span className="text-gray-600">123 App Street, Tech City, TC 12345</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;