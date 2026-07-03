"use client";

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function FormSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!email || !emailRegex.test(email)) {
      toast.error('Vui lòng nhập địa chỉ email hợp lệ (vd: abc@xy.xyz)!');
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

     
      toast.success('Đăng ký thành công! Cảm ơn bạn.');

      
      setEmail('');
    } catch (error) {
      toast.error('Đã xảy ra lỗi. Vui lòng thử lại sau!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-black text-white w-full relative overflow-hidden">

      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">Đăng ký nhận thông báo</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Đăng ký email ngay hôm nay để nhận thông báo của các sản phẩm và khuyến mãi mới.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập địa chỉ email của bạn..."
            required
            disabled={loading}
            className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 min-w-[180px]"
          >
            {loading ? 'Đang xử lý...' : 'Đăng ký nhận tin'}
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6">
          *Email này chỉ được sử dụng để gửi thông báo các sản phẩm và khuyến mãi mới và sẽ không dùng với mục đích khác.
        </p>
      </div>
    </section>
  );
}