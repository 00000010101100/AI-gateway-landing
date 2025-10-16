import { useState } from 'react';

export default function Solution() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "통합 Key 관리",
      subtitle: "국내 최대의 보안 기반시스템 활용",
      description: "팀 또는 개인 단위로 API Key를 안전하게 관리하고,<br/>명확한 권한 설정으로 보안 리스크를 줄입니다.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "실시간 모니터링",
      subtitle: "예산 초과를 사전 차단하는 재무 관리 도구",
      description: "사용자/팀별 사용량과 비용을 한눈에 확인하고, 패턴 분석으로 불필요한 지출을 막아 예산을 효율적으로 관리합니다.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "AI 모델 통합",
      subtitle: "다양한 AI 서비스를 하나의 플랫폼에서",
      description: "OpenAI, Claude, Gemini 등 주요 AI 모델을 통합하여<br/>비용을 최적화하고 성능을 비교할 수 있습니다.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-responsive mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Gateway의 핵심 솔루션
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            복잡한 AI 서비스 관리를 간단하게 만드는 통합 플랫폼
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-0 w-full lg:w-[440px] lg:flex-shrink-0">
            {features.map((feature, index) => (
              <div 
                key={index}
                onClick={() => setOpenIndex(index)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {feature.subtitle}
                    </p>
                    {openIndex === index && feature.description && (
                      <p 
                        className="text-sm text-gray-700 mt-3"
                        dangerouslySetInnerHTML={{ __html: feature.description }}
                      />
                    )}
                  </div>
                  
                  <div className="ml-4">
                    {openIndex === index ? (
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-sm">−</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">+</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block w-full lg:w-[776px] lg:flex-shrink-0 relative mt-8 lg:mt-0">
            <div className="relative">
              <img 
                src={features[openIndex].image}
                alt={features[openIndex].title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}