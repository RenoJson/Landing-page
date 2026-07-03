import React from 'react';

export default function FeatureSection() {
  return (
    <section className="py-24 bg-black text-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Công nghệ lõi. <span className="text-gray-500">Trải nghiệm đỉnh cao.</span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Ô Camera (Chiếm 2 cột) */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-[2rem] border border-gray-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-gray-600 transition-colors duration-500">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Camera 200MP</h3>
              <p className="text-gray-400 max-w-sm">Cảm biến siêu lớn. Bắt trọn từng chi tiết trong màn đêm với công nghệ AI Night Mode.</p>
            </div>
            {/* Vùng mô phỏng hình ảnh */}
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gray-800 rounded-tl-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-gray-500 text-sm">[Ảnh cụm camera]</span>
            </div>
          </div>

          {/* Ô Hiệu năng (1 cột) */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2rem] border border-gray-800 p-8 flex flex-col justify-between hover:border-gray-600 transition-colors duration-500">
            <div>
              <h3 className="text-2xl font-bold mb-2">Chip A20 Bionic</h3>
              <p className="text-gray-400">Nhanh hơn 40%. Xử lý mượt mà mọi tựa game AAA.</p>
            </div>
            <div className="w-full h-24 bg-gray-800 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-sm">[Icon Chipset]</span>
            </div>
          </div>

          {/* Ô Pin (1 cột) */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[2rem] border border-gray-800 p-8 flex flex-col justify-between hover:border-gray-600 transition-colors duration-500">
             <div>
              <h3 className="text-2xl font-bold mb-2">Pin 6000mAh</h3>
              <p className="text-gray-400">Hoạt động bền bỉ suốt 2 ngày dài.</p>
            </div>
            <div className="w-full h-24 bg-gray-800 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-sm">[Biểu đồ Pin]</span>
            </div>
          </div>

          {/* Ô Màn hình (Chiếm 2 cột) */}
          <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-[2rem] border border-gray-800 p-8 flex flex-col justify-center items-center text-center hover:border-gray-600 transition-colors duration-500 relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-3 z-10">ProMotion 144Hz</h3>
            <p className="text-gray-400 max-w-md z-10">Màn hình OLED độ sáng 3000 nits. Vuốt chạm chưa bao giờ mượt mà đến thế.</p>
            {/* Hiệu ứng Glow nền */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}