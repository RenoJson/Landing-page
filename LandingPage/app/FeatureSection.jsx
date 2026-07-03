import React from 'react';
import Image from 'next/image';

export default function FeatureSection() {
    return (
        <section className="py-24 bg-black text-white w-full">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
                    <span className="text-[#D45C22]">Các điểm nổi bật.</span>
                </h2>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                    {/* Ô Camera (Chiếm 2 cột) */}
                    <div className="md:col-span-2 bg-[#000000] rounded-[2rem] border border-gray-800 flex flex-col justify-start overflow-hidden relative group hover:border-gray-600 transition-colors duration-500 min-h-[400px] sm:min-h-[450px]">

                        {/* 1. Lớp chữ (Đặt z-20 để luôn nổi lên trên cùng) */}
                        <div className="relative z-20 p-8 max-w-xl">
                            <h3 className="text-3xl font-bold mb-3 text-white"><span className="text-gray-500">Tất cả camera sau <span className="text-[#D45C22]">48MP</span></span></h3>
                            <p className="text-gray-400">
                                <span className="text-gray-500">Thu phóng chất lượng quang học lên đến <span className="text-[#D45C22]">8x</span></span>
                            </p>
                        </div>

                        <div className="absolute inset-x-0 -bottom-10 w-full h-[90%] transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-24 group-hover:translate-y-0">

                            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent z-10 pointer-events-none h-1/2"></div>

                            <Image
                                src="/camera1_preview.jpg"
                                alt="Cận cảnh cụm Camera 48MP trên iPhone 17 Pro"
                                fill
                                sizes="(max-width: 768px) 100vw, 66vw"
                                className="object-cover object-top z-0"
                            />
                        </div>

                    </div>

                    
                    <div className="bg-[#000000] rounded-[2rem] border border-gray-800 flex flex-col justify-between overflow-hidden relative group hover:border-gray-600 transition-colors duration-500 min-h-[400px] sm:min-h-[450px]">

                        {/* 1. Lớp chữ (Padding được chuyển vào đây thay vì bọc ngoài thẻ div to) */}
                        <div className="relative z-20 p-8">
                            <h3 className="text-3xl font-bold mb-3 text-white">
                                <span className="text-gray-500">Chip </span><span className="bg-gradient-to-br from-[#FFA877] via-[#E16226] to-[#B34515] bg-clip-text text-transparent">A19 Pro</span>
                            </h3>
                            <p className="text-gray-400">
                                Tản nhiệt hơi nước cho hiệu năng thần tốc. Thời lượng pin đột phá.
                            </p>
                        </div>

                        {/* 2. Vùng chứa hình ảnh Chipset */}
                        <div className="absolute inset-x-0 bottom-0 w-full h-[60%] sm:h-[70%] flex items-center justify-center transition-transform duration-[800ms] ease-out group-hover:scale-110">
                            <Image
                                src="/chipset_preview.jpg"
                                alt="Chip A19 Pro"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-center z-0"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}