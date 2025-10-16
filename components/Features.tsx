export default function Features() {
  const features = [
    {
      title: "1. 멤버 권한 관리",
      description: "사용자별로 Manage/Create/View 권한을 설정해 체계적으로 운영할 수 있습니다.",
      icon: "👥"
    },
    {
      title: "2. API Key 관리",
      description: "사용자 지정, 한도 제한, 만료일 설정으로 API Key를 안전하게 보호할 수 있습니다.",
      icon: "🔑"
    },
    {
      title: "3. 모델/사용자 사용 현황 관리",
      description: "사용자와 모델별 사용 현황을 한눈에 파악하고, 사용 패턴을 쉽게 분석할 수 있습니다.",
      icon: "📊"
    },
    {
      title: "4. 청구서 통합 관리",
      description: "여러 AI 서비스의 청구서를 통합 관리하여 비용을 효율적으로 추적할 수 있습니다.",
      icon: "📄"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            핵심 기능
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI 서비스 관리를 위한 필수 기능들을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}