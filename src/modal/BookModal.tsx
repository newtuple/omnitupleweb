import React, { useState } from 'react';

type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; company: string; message: string }) => void;
  isDark: boolean;
};

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose, onSubmit, isDark }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit(form);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={
          `${isDark
            ? 'bg-slate-900 text-white border border-slate-700'
            : 'bg-gradient-to-br from-[#F0F6FF] via-white to-[#FFF6F8] text-slate-900 border border-gray-200'} p-8 rounded-lg shadow-lg w-full max-w-md text-left relative`
        }
      >
        <button onClick={onClose} className={`absolute top-3 right-3 text-xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'}`}>×</button>
        <h2 className="text-2xl font-bold mb-2 text-center">Book Your Live Voice Demo</h2>
        <p className={`mb-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Fill out the form and we'll get in touch soon.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} ${errors.name ? 'border-red-400' : 'border'}`}
              required
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} ${errors.email ? 'border-red-400' : 'border'}`}
              required
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} border`}
              placeholder="Company (optional)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className={`w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} border`}
              placeholder="How can we help you? (optional)"
            />
          </div>
          <div className="flex gap-2 mt-6">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] text-white py-2 rounded font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 border py-2 rounded font-semibold transition ${isDark ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;