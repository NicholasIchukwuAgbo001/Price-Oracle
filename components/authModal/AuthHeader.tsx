import React from 'react';
import { X } from 'lucide-react';

interface AuthHeaderProps {
  isLogin: boolean;
  onClose: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ isLogin, onClose }) => (
  <div className="bg-gradient-to-r from-background to-primary/70 p-6 text-white">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">{isLogin ? 'Welcome Back' : 'Join Us'}</h2>
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="p-1 hover:bg-white/20 rounded-lg transition-colors"
      >
        <X className="w-6 h-6 cursor-pointer" />
      </button>
    </div>
    <p className="text-white/80 mt-2">
      {isLogin ? 'Login to your account' : 'Create your secure account'}
    </p>
  </div>
);

export default AuthHeader;
