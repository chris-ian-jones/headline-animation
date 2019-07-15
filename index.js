const letterC = document.querySelector(".letter-c");
const letterH = document.querySelector(".letter-h");
const letterR = document.querySelector(".letter-r");
const letterI = document.querySelector(".letter-i");
const letterSChris = document.querySelector(".letter-s");

const letterJ = document.querySelector(".letter-j");
const letterO = document.querySelector(".letter-o");
const letterN = document.querySelector(".letter-n");
const letterE = document.querySelector(".letter-e");
const letterSJones = document.querySelector(".letter-s.jones");

const circleR = document.querySelector(".letter-r.chris.circle");
const squareS = document.querySelector(".square");

TweenLite.from(letterC, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0
});
TweenLite.from(letterH, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0.2
});
TweenLite.from(letterR, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0.4
});
TweenLite.from(letterI, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0.6
});
TweenLite.from(letterSChris, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0.8
});
TweenLite.from(letterJ, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 1
});
TweenLite.from(letterO, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 1.2
});
TweenLite.from(letterN, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 1.4
});
TweenLite.from(letterE, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 1.6
});
TweenLite.from(letterSJones, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 1.8
});

TweenLite.from(circleR, 1.5, {
  ease: Expo.easeOut,
  scale: 0.05,
  opacity: 0,
  rotation: 720,
  delay: 2
});

TweenLite.from(squareS, 1.5, {
  ease: Bounce.easeOut,
  scale: 0.05,
  opacity: 0,
  x: "440px",
  y: "440px",
  rotation: 180,
  delay: 2.2
});
