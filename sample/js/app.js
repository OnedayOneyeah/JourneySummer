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

// guess의 정답을 판단하고 처리하는 함수 선언
function checkGuess() {
  // 추측 횟수 1 증가
  numGuesses++;

  // input 창에 있는 값을 guess로 가져옴
  const guess = guessInput.value.toLowerCase();

  // input field 초기화
  guessInput.value = "";

  if (guess === answerSong.toLowerCase()) {
    // 정답일 경우 result-container 안에 answerImg 및 successDiv 생성
    const answerImage = document.createElement("img");
    answerImage.id = "answer-image";
    answerImage.src = "./assets/answer.jpg";

    const successDiv = document.createElement("div");
    successDiv.innerText = `Congratulations! Answer: ${answerArtist}-${answerSong}.`;

    hintContainer.style.display = "none";
    guessInput.style.display = "none";
    guessBtn.style.display = "none";
    guessedContainer.style.display = "none";

    resultContainer.appendChild(answerImage);
    resultContainer.appendChild(successDiv);
  } else if (numGuesses === 6) {
    // guess 횟수가 6일 경우 정답 알려주는 화면 (정답 맞혔을 때와 ui 차이 있어야 할 것)
    const answerImage = document.createElement("img");
    answerImage.src = "./assets/answer.jpg";
    answerImage.id = "answer-image";

    const successDiv = document.createElement("div");
    successDiv.innerText = `Answer: ${answerArtist}-${answerSong}.`;

    hintContainer.style.display = "none";
    guessInput.style.display = "none";
    guessBtn.style.display = "none";
    guessedContainer.style.display = "none";

    resultContainer.appendChild(answerImage);
    resultContainer.appendChild(successDiv);
  } else {
    // 오답 입력했을 경우 다음 그림으로 바뀌기
    const guessedDiv = document.createElement("div");
    guessedDiv.classList.add("guessed-song");

    guessedDiv.innerText = guess;
    guessedContainer.appendChild(guessedDiv);

    hintImage.src = hintArray[numGuesses];
  }
}

// guessBtn click했을 때 checkGuess() 실행
guessBtn.addEventListener("click", checkGuess);

// 엔터키 눌렀을 때도 실행되게끔 구현
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
