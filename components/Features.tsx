
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group">
    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      <span className="text-2xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      title: "초고속 퍼포먼스",
      description: "최신 기술 스택을 사용하여 0.1초의 로딩 속도를 보장합니다. 사용자 이탈을 막으세요.",
      icon: "⚡"
    },
    {
      title: "직관적인 UI",
      description: "누구나 쉽게 배울 필요 없이 사용할 수 있는 미니멀한 인터페이스를 제공합니다.",
      icon: "🎨"
    },
    {
      title: "완벽한 반응형",
      description: "모바일, 태블릿, 데스크탑 어디서나 완벽하게 동작하는 유연한 설계를 제공합니다.",
      icon: "📱"
    },
    {
      title: "안전한 데이터",
      description: "군사 등급의 암호화 기술로 당신의 소중한 비즈니스 데이터를 완벽하게 보호합니다.",
      icon: "🔒"
    },
    {
      title: "24/7 연중무휴 지원",
      description: "문제가 생기면 언제든 연락주세요. 전문 엔지니어가 즉시 해결해 드립니다.",
      icon: "💬"
    },
    {
      title: "AI 통합 도구",
      description: "최첨단 AI 기술을 활용하여 업무 자동화와 창의적인 작업을 지원합니다.",
      icon: "🤖"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">왜 Nova인가요?</h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          우리는 단순히 도구를 만드는 것이 아니라, 당신의 가능성을 현실로 만드는 파트너입니다.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
      </div>
    </div>
  );
};
