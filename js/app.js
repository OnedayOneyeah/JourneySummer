import { Game } from "./game.js";
// import { Configuration, OpenAIApi } from "openai";

// const apiKey = process.env.OPENAI_API_KEY;

// // OpenAI API 환경 변수 설정
// const configuration = new Configuration({
//   apiKey: apiKey,
// });

// const openai = new OpenAIApi(configuration);

// console.log(openai);

// 새로운 Game 인스턴스 생성
const game = new Game();

// 'guess' 버튼 클릭하거나 'Enter' 키 입력 시 numGuess 1 증가 및 checkGuess 실행
game.guessBtn.addEventListener("click", handleGuess);
game.guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

function handleGuess() {
  game.incrementGuesses();
  game.checkGuess();
}
