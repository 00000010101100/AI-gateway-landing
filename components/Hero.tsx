export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[444px] md:h-[444px] lg:h-[554px]">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Gateway
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            모든 AI 서비스를 하나의 플랫폼에서 관리하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              시작하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}