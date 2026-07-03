import React from 'react';

export default function SpecsSection() {
  const specs = [
    { label: 'Kích thước & Trọng lượng', value: 'Dài 150mm - Ngang 71.9mm - Dày 8.75mm, Nặng 204g.' },
    { label: 'Màn hình', value: '6.3 inch Super Retina XDR (1206 x 2622 Pixels), 120Hz.' },
    { label: 'Vi xử lý', value: 'A19 Pro (Apple Silicon 3nm).' },
    { label: 'Camera sau', value: 'Chính và phụ 48MP, Night Mode, Gắn thẻ địa lý (Geotagging).' },
    { label: 'Camera trước', value: '18MP TrueDepth, Slow Motion.' },
    { label: 'Dung lượng & Lưu trữ', value: '256GB, 512GB, 1TB.' },
    { label: 'Pin & Sạc', value: '31 giờ, hỗ trợ sạc nhanh tối đa 40W, MagSafe, sạc không dây, tiết kiệm pin.' },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white w-full border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"><span className="text-[#D45C22]">Thông số kỹ thuật</span></h2>

        <ul className="divide-y divide-gray-800 border-t border-b border-gray-800">
          {specs.map((spec, index) => (
            <li key={index} className="py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-8 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-lg">
              <span className="text-gray-400 w-full md:w-1/3 font-medium">{spec.label}</span>
              <span className="text-white w-full md:w-2/3">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}