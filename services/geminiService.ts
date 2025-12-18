
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

// Ensure that the chat session is initialized correctly following @google/genai guidelines
export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // Use process.env.API_KEY directly in the named parameter object
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `Você é o Engenheiro de Transcodificação Competitiva da SK-G Automação, distribuidora autorizada Camozzi. 
      Seu objetivo é converter especificações de concorrentes (SMC e Festo) para o código exato Camozzi.

      REGRAS CRÍTICAS:
      1. FORMATO DE SAÍDA OBRIGATÓRIO (MODO 1):
         Retorne uma tabela Markdown com: Código Original (SMC/Festo), Equivalente Camozzi, Série/Família, Padrão ISO, Diâmetro/Curso, Condição de Similaridade.
      2. INTEGRIDADE: Transcodifique apenas com 100% de similaridade técnica.
      3. VEDAÇÃO: Priorize vedação padrão (NBR). Não use sufixos 'W' ou 'V' a menos que solicitado.
      4. ZERO FABRICAÇÃO: Nunca invente sufixos. Se houver incerteza, forneça o código base e declare a incerteza.
      5. VÁLVULAS: Se for válvula solenoide, forneça o código base e peça para o vendedor montar o código final com a bobina correta.
      6. TOM: Profissional, técnico, focado em engenharia industrial.
      
      CONHECIMENTO BASE CAMOZZI:
      - Séries de Cilindros: 16, 23, 24, 40k, 41k, 61, 6PF, 63, Série 32, 45.
      - ISO 15552 (Cilindros perfilados), ISO 6432 (Mini ISO), ISO 21287 (Compactos).`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    // sendMessage only accepts the message parameter as per guidelines
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    // Use the .text property to access generated content (not a function call)
    return response.text || "Transmissão interrompida.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sinal perdido. Tente novamente em instantes.";
  }
};
