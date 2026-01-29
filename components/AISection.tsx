
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

export const AISection: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateSlogan = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    setResult('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `내 비즈니스 아이디어는 다음과 같습니다: "${input}". 
        이 비즈니스를 위한 창의적이고 귀에 쏙 들어오는 슬로건 5개와 
        100자 내외의 짧은 브랜드 피치를 작성해줘. 
        가독성 좋게 마크다운 형식으로 작성해줘.`,
        config: {
          systemInstruction: "당신은 세계적인 브랜드 컨설턴트입니다. 사용자에게 전문적이고 창의적인 마케팅 문구를 제안하세요.",
          temperature: 0.8,
        }
      });
      
      setResult(response.text || "결과를 가져오지 못했습니다.");
    } catch (error) {
      console.error("AI Generation error:", error);
      setResult("죄송합니다. AI 응답 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-indigo-600 p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">AI 브랜드 메이커</h2>
          <p className="text-indigo-100 opacity-90 max-w-xl mx-auto">
            당신의 아이디어를 입력하세요. Gemini AI가 당신만을 위한 독창적인 브랜드 슬로건과 피치를 즉시 생성합니다.
          </p>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="예: 친환경 소재로 만든 수제 운동화 브랜드"
              className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
            <button 
              onClick={generateSlogan}
              disabled={isLoading || !input}
              className={`px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 ${
                isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  생성 중...
                </span>
              ) : "생성하기"}
            </button>
          </div>

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 prose prose-slate max-w-none">
                <div className="flex items-center gap-2 mb-4 text-indigo-600 font-bold uppercase tracking-wider text-sm">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                  AI 제안 결과
                </div>
                <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                  {result}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
