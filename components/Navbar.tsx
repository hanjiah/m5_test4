
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass-morphism border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">NOVA</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">홈</a>
            <a href="#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">특징</a>
            <a href="#ai-tool" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">AI 도구</a>
          </div>
          <div>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95">
              시작하기
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
