import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } },
  exit: { opacity: 0, scale: 0.95, y: 40, transition: { duration: 0.18 } },
};

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose, isDark }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setStatusMsg('');
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      try {
        const res = await fetch('/.netlify/functions/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setStatus('success');
          setStatusMsg('Thank you! Your enquiry has been sent. We will contact you soon.');
          setForm({ name: '', email: '', company: '', message: '' });
        } else {
          const data = await res.json();
          setStatus('error');
          setStatusMsg(data.error || 'Failed to send. Please try again.');
        }
      } catch (err) {
        setStatus('error');
        setStatusMsg('Failed to send. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={
            `${isDark
              ? 'bg-slate-900 text-white border border-slate-700'
              : 'bg-gradient-to-br from-[#F0F6FF] via-white to-[#FFF6F8] text-slate-900 border border-gray-200'} p-8 rounded-2xl shadow-2xl w-full max-w-md text-left relative ring-1 ring-black/10`
          }
        >
          <motion.button
            whileHover={{ rotate: 90, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            onClick={onClose}
            className={`absolute top-3 right-3 text-xl transition-transform ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-700'}`}
            aria-label="Close"
          >
            ×
          </motion.button>
          <h2 className="text-2xl font-bold mb-2 text-center">Book Your Live Voice Demo</h2>
          <div className="flex justify-center mb-4">
            <span className={`block w-16 h-1 rounded-full ${isDark ? 'bg-slate-700' : 'bg-gradient-to-r from-[#FF1B6B] to-[#45CAFF]'}`}></span>
          </div>
          <p className={`mb-6 text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Fill out the form and we'll get in touch soon.</p>
          {status === 'success' && (
            <div className="mb-4 text-green-600 text-center font-semibold">{statusMsg}</div>
          )}
          {status === 'error' && (
            <div className="mb-4 text-red-500 text-center font-semibold">{statusMsg}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} ${errors.name ? 'border-red-400' : 'border'} shadow-sm`}
                required
                placeholder="Your name"
                disabled={submitting}
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
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} ${errors.email ? 'border-red-400' : 'border'} shadow-sm`}
                required
                placeholder="you@email.com"
                disabled={submitting}
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
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} border shadow-sm`}
                placeholder="Company (optional)"
                disabled={submitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#45CAFF] ${isDark ? 'bg-slate-800 border-slate-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-slate-900'} border shadow-sm`}
                placeholder="How can we help you? (optional)"
                disabled={submitting}
              />
            </div>
            <div className="flex gap-2 mt-6">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#FF1B6B] to-[#FF4B2B] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 border py-2 rounded-lg font-semibold transition shadow-md ${isDark ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                disabled={submitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookModal;

/* Tailwind shimmer animation */
// Add this to your global CSS if not present:
// @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
// .animate-shimmer { animation: shimmer 1.5s linear infinite; }