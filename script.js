function pickWord() {
    const words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "coding",
        "banana",
        "unmatched",
        "wingspan",
        "boardgame",
        "adventure",
        "learning",
        "explore",
        "challenge",
        "creative",
        "fantasy",
        "strategy",
        "dragon",
        "castle",
        "king",
        "knight",
        "quest",
        "magic",
        "victory",
        "friends",
        "family",
        "fun",
        "gameplay",
        "discovery",
        "imagination",
        "cards",
        "dice"
    ];

    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray(word) {
    const arr = [];

    for (let i = 0; i < word.length; i++) {
        arr.push("_");
    }

    return arr;
}

function setupNumberAttempts(word) {
    if (word.length > 7) {
        return 15;
    }

    if (word.length > 5) {
        return 12; 
    }

    return 10;
}

function showPlayerProgress() {
    alert(answerArray.join(" "));
}

function getGuess() {
    if (numberAttempts === 1) {
        return prompt(`Guess a letter, or click Cancel to stop playing. You have ${numberAttempts} try!`);
    } 

    return prompt(`Guess a letter, or click Cancel to stop playing. You have ${numberAttempts} tries!`);
}

function updateGameState(guess, word, answerArray) {
    numberGuess = 0;

    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
            answerArray[j] = guess.toLowerCase();
            numberGuess++;
        }
    }

    return numberGuess;
}

function showResult() {
    showPlayerProgress();

    if (numberAttempts > 0) {
        alert("Good job! The answer was: " + word);
    } else {
        alert("Too bad! The answer was: " + word);
    }
}

const word = pickWord();

const answerArray = setupAnswerArray(word);

let remainingLetters = word.length;

let numberAttempts = setupNumberAttempts(word);

while (remainingLetters > 0 && numberAttempts > 0) {
    showPlayerProgress();

    const guess = getGuess();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
        numberAttempts--;
    } else {
        correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        numberAttempts--;
    }
}

showResult();


