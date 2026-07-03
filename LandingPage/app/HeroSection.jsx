export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none p-4 md:p-12 mt-10">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full max-w-6xl object-contain rounded-3xl"
        >
          <source src="/xlarge_2x.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-end items-center min-h-[85vh] pb-12 md:pb-16">

        <div className="flex flex-col items-center w-full gap-6 text-center">

          <div className="max-w-2xl flex flex-col items-center">
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-medium drop-shadow-md">
              Từ 34.999.000đ hoặc 1.425.000đ/tháng trong 24 tháng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Mua ngay
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}