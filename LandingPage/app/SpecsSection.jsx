import React from 'react';

export default function SpecsSection() {
  const specs = [
    { label: 'Kích thước & Trọng lượng', value: '160.7 x 77.6 x 7.85 mm, 240g' },
    { label: 'Màn hình', value: '6.7 inch Super Retina XDR OLED, 144Hz' },
    { label: 'Vi xử lý', value: 'A20 Bionic (Tiến trình 2nm)' },
    { label: 'Camera sau', value: 'Chính 200MP, Góc siêu rộng 48MP, Tele 5x 48MP' },
    { label: 'Camera trước', value: '12MP TrueDepth, Autofocus' },
    { label: 'Dung lượng & Lưu trữ', value: '256GB, 512GB, 1TB' },
    { label: 'Pin & Sạc', value: '6000mAh, Sạc nhanh 65W, MagSafe 20W' },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] text-white w-full border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Thông số kỹ thuật.</h2>
        
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