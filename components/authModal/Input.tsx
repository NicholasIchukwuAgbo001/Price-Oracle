import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  label: string;
}

const Input: React.FC<InputProps> = ({ icon, label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-secondary mb-2">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightgrey w-5 h-5">{icon}</span>
      <input
        {...props}
        className="w-full pl-10 pr-4 py-3 border border-lightgrey rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors shadow-sm text-secondary"
      />
    </div>
  </div>
);

export default Input;
