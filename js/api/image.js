import { Configuration, OpenAIApi } from "openai";

// OpenAI API 환경 변수 설정
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

console.log(openai);
