
import { GoogleGenAI } from '@google/genai';

// DOM Elements
const aiInput = document.getElementById('ai-input') as HTMLInputElement;
const aiButton = document.getElementById('ai-button') as HTMLButtonElement;
const aiResult = document.getElementById('ai-result') as HTMLDivElement;
const resultContent = document.getElementById('result-content') as HTMLDivElement;

async function generateSlogan() {
  const input = aiInput.value.trim();
  if (!input) return;

  // UI State: Loading
  aiButton.disabled = true;
  aiButton.innerHTML = `
    <svg class="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg> 생성 중...`;
  aiResult.classList.add('hidden');

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `비즈니스 아이디어: "${input}". 이 비즈니스를 위한 창의적인 슬로건 5개와 브랜드 피치를 한국어로 작성해줘.`,
      config: {
        systemInstruction: "당신은 전문 브랜드 컨설턴트입니다.",
        temperature: 0.8,
      }
    });

    // Display Result
    resultContent.innerText = response.text || "결과를 가져오지 못했습니다.";
    aiResult.classList.remove('hidden');
    aiResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (error) {
    console.error("AI Error:", error);
    resultContent.innerText = "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    aiResult.classList.remove('hidden');
  } finally {
    aiButton.disabled = false;
    aiButton.innerText = "생성하기";
  }
}

// Event Listeners
aiButton.addEventListener('click', generateSlogan);
aiInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') generateSlogan();
});
