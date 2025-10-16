import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Gateway
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI 통합 플랫폼에 오신 것을 환영합니다!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              통합 Key 관리
            </h2>
            <p className="text-blue-700">
              팀 또는 개인 단위로 API Key를 안전하게 관리하고, 명확한 권한 설정으로 보안 리스크를 줄입니다.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-900 mb-2">
              실시간 모니터링
            </h2>
            <p className="text-green-700">
              사용자/팀별 사용량과 비용을 한눈에 확인하고, 패턴 분석으로 불필요한 지출을 막아 예산을 효율적으로 관리합니다.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-purple-900 mb-2">
              AI 모델 통합
            </h2>
            <p className="text-purple-700">
              OpenAI, Claude, Gemini 등 주요 AI 모델을 통합하여 비용을 최적화하고 성능을 비교할 수 있습니다.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}