
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
          2024년 최고의 솔루션
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          세상을 바꾸는 <span className="text-indigo-600">심플한</span> 디자인
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          복잡함은 줄이고 본질에 집중합니다. Nova와 함께 당신의 비즈니스를 다음 단계로 도약시키세요. 빠르고, 강력하며, 아름답습니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95">
            무료로 시작하기
          </button>
          <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            데모 보기
          </button>
        </div>
        
        <div className="mt-16 relative">
          <img 
            src="https://picsum.photos/seed/nova/1200/600" 
            alt="Dashboard Preview" 
            className="rounded-2xl shadow-2xl border border-slate-200 mx-auto"
          />
          <div className="absolute -bottom-6 -right-6 hidden lg:block bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow">
            <p className="text-sm font-bold text-slate-400 mb-1">성장률</p>
            <p className="text-2xl font-black text-emerald-500">+124%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
