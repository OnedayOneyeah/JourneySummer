import { checkGuess } from "./checkGuess.js";

// Get the necessary HTML elements
const hintContainer = document.getElementById("hint-container");
const hintImage = document.getElementById("hint-image");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const guessedContainer = document.getElementById("guessed-container");
const resultContainer = document.getElementById("result-container");

// 힌트 6개 배열 생성. (지금은 assets에 있는 고정값이지만 나중에는 서버에서 가져오는 방법 생각)
var hintArray = [];
for (var i = 1; i <= 6; i++) {
  var hintSrc = `./assets/hint${i}.png`;

  hintArray.push(hintSrc);
}

// 정답 단어 선언. (이것도 지금은 고정값이지만 나중에는 서버에서 불러와야 함)
var answerSong = "Attention";
var answerArtist = "Newjeans";

// guess 횟수. 6번 됐을 시 추리 화면 끝나게끔
var numGuesses = 0;

// numGuesses를 index로 사용하여 hintArray로 받은 src를 <img> tag에 전달
hintImage.src = hintArray[numGuesses];

// guessBtn click했을 때 checkGuess() 실행
guessBtn.addEventListener("click", checkGuess);

// 엔터키 눌렀을 때도 실행되게끔 구현
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
