"use client";

import React from 'react';

export default function FormSection() {
  return (
    <section className="py-32 bg-black text-white w-full relative overflow-hidden">
      {/* Hiệu ứng Glow nền */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">Trở thành người đầu tiên sở hữu.</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Đăng ký email ngay hôm nay để nhận thông báo khi mở bán sớm và nhận Voucher trị giá 2.000.000đ.
        </p>

        {/* Form đăng ký */}
        <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Nhập địa chỉ email của bạn..." 
            required
            className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Đăng ký nhận tin
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6">
          *Chúng tôi cam kết không gửi spam.
        </p>
      </div>
    </section>
  );
}