
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">NOVA</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>
          
          <p className="text-sm">
            © 2024 Nova Inc. All rights reserved.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          Made with ❤️ by Nova Team. Powered by Gemini AI.
        </div>
      </div>
    </footer>
  );
};
