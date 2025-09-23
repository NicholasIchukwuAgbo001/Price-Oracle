'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import Input from '@/components/authModal/Input';
import PasswordInput from '@/components/authModal/PasswordInput';
import { User } from '@/types/authType';

interface LoginFormProps {
  onLogin: (user: User) => void;
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onClose }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const existingUser = storedUsers.find(
      (user: User & { password?: string }) =>
        user.email === formData.email && user.password === formData.password
    );

    if (existingUser) {
      toast.success('Login successful...');
      const { password, ...userWithoutPassword } = existingUser;

      onLogin(userWithoutPassword);

      onClose();

      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } else {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <Input
        icon={<Mail />}
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="priceoracle@example.com"
        required
      />

      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-background to-primary/60 hover:from-primary/90 hover:to-background text-white py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
