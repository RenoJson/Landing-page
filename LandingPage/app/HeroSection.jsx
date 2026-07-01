import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      
      {/* 1. Hiệu ứng ánh sáng nền (Glow Effect) - Tạo cảm giác công nghệ */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-600/30 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 2. Nội dung chính (Typography & CTA) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center mt-10">
        
        {/* Headline với hiệu ứng Gradient mượt mà */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Vượt qua mọi giới hạn. <br /> Pro Max 2026.
        </h1>
        
        {/* Sub-headline giới thiệu tính năng lõi */}
        <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Sức mạnh vô song từ Chip xử lý AI thế hệ mới. Camera 200MP đột phá. Khung Titanium nguyên khối.
        </p>

        {/* Nút Call-to-Action (CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Đặt trước ngay
          </button>
          <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-semibold rounded-full hover:border-white hover:bg-white/5 transition-colors duration-300">
            Xem thông số kỹ thuật
          </button>
        </div>
      </div>

      {/* 3. Khu vực Mockup Sản phẩm */}
      <div className="relative z-10 mt-16 w-full max-w-4xl animate-[fade-in-up_1s_ease-out]">
        {/* Khung giả lập cho hình ảnh điện thoại - Thực tế bạn sẽ thay bằng thẻ <Image /> */}
        <div className="relative aspect-[16/9] w-full bg-gradient-to-tr from-gray-900 to-black rounded-t-3xl border-t border-x border-gray-800 shadow-2xl flex items-end justify-center overflow-hidden">
          
          {/* Một khối giả lập chiếc điện thoại đang trồi lên từ dưới lên */}
          <div className="w-[80%] h-[90%] bg-gradient-to-b from-gray-800 to-black rounded-t-[2.5rem] border-t-8 border-x-8 border-gray-700 shadow-inner flex items-center justify-center">
             <span className="text-gray-500 text-sm md:text-base font-mono">
               [Chèn ảnh Render 3D trong suốt định dạng .WebP vào đây]
             </span>
          </div>

        </div>
      </div>

    </section>
  );
}
