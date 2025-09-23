'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, User } from 'lucide-react';
import toast from 'react-hot-toast';
import Input from '@/components/authModal/Input';
import PasswordInput from '@/components/authModal/PasswordInput';
import { User as UserType } from '@/types/authType';

interface RegisterFormProps {
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose, onLogin }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const emailExists = users.some(
      (user: UserType) => user.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
      toast.error('Email is already registered. Please use a different email.');
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    toast.success('Account created successfully! Redirecting...');

    onLogin(newUser);
    onClose();

    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          icon={<User />}
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Oracle"
          required
        />
        <Input
          icon={<User />}
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Oracle"
          required
        />
      </div>

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
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
