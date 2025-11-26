import { GoogleGenAI, Chat } from "@google/genai";
import { PERSONAL_INFO, TIMELINE_DATA, PROJECT_DATA, GAMING_DATA } from '../constants';

let chatSession: Chat | null = null;

// Construct a system instruction that gives the AI the persona of the user
const constructSystemInstruction = () => {
  const resumeContext = `
    Name: ${PERSONAL_INFO.name}
    Title: ${PERSONAL_INFO.title}
    About: ${PERSONAL_INFO.about}
    
    Work History:
    ${TIMELINE_DATA.map(t => `- ${t.year}: ${t.title} at ${t.companyOrInstitution}. ${t.description}`).join('\n')}
    
    Projects:
    ${PROJECT_DATA.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}
    
    Gaming Interests:
    ${GAMING_DATA.map(g => `- ${g.title} (${g.status}, ${g.hoursPlayed} hours). Rating: ${g.rating}/5. Comment: ${g.comment}`).join('\n')}
  `;

  return `
    You are an AI digital twin of ${PERSONAL_INFO.name}. 
    Your goal is to answer questions from visitors about ${PERSONAL_INFO.name}'s professional background, skills, projects, and gaming hobbies.
    
    Use the following context to answer questions accurately:
    ${resumeContext}
    
    Tone: Professional yet witty, slightly "cyberpunk" or "tech-savvy" in style. Be concise.
    If asked about something not in the context, politely say you don't have that info but suggest asking about projects or games.
    Do not make up facts.
  `;
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: constructSystemInstruction(),
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm processing that... (No text returned)";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the neural link unstable. Please try again later.";
  }
};