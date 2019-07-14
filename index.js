const letterC = document.querySelector(".letter-c");
const letterH = document.querySelector(".letter-h");
const letterR = document.querySelector(".letter-r");
const letterI = document.querySelector(".letter-i");
const letterS = document.querySelector(".letter-s");

TweenLite.from(letterC, 0.75, { ease: Expo.easeOut, "font-size": 0 });
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
TweenLite.from(letterS, 0.75, {
  ease: Expo.easeOut,
  "font-size": 0,
  delay: 0.8
});

// const tl = new TimeLineLite();

// tl.from(letterC, 1, { ease: Bounce.easeOut, "font-size": 0 })
//   .from(letterH, 1, { ease: Bounce.easeOut, "font-size": 0 })
//   .from(letterR, 1, { ease: Bounce.easeOut, "font-size": 0 })
//   .from(letterI, 1, { ease: Bounce.easeOut, "font-size": 0 })
//   .from(letterS, 1, { ease: Bounce.easeOut, "font-size": 0 });

// tl.play();
