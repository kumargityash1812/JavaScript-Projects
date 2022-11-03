let soundOptions = document.querySelectorAll("#play"),
 firstText = document.querySelector(".para10"),
secondText = document.querySelector(".para11");
soundOptions.forEach((soundOption) => {
  soundOption.addEventListener('click', () => {
    document.querySelector("#play.active").classList.remove("active");
    soundOption.classList.add("active");
    if (soundOption.classList.contains("sound")) {
      firstText.innerHTML = "EARPLUGS TO PROTECT YOUR HEARING";
      secondText.innerHTML = "I was thrilled with how the overall level felt comfortable. Quickly removing them, I knew that the club would have been too loud for me and off-limits without adequate protection.";
    }
    if (soundOption.classList.contains("field")) {
      firstText.innerHTML = "DECIBULLZ PERCUSSIVE FILTERS";
      secondText.innerHTML = "Customizable ear plugs that’ll deafen sudden sound bursts (like gunshots)—no batteries required. If the fit isn't quite right just start over again.";
    }
    if (soundOption.classList.contains("outside")) {
      firstText.innerHTML = "GREAT CUSTOM GEAR";
      secondText.innerHTML = "If you’ve ever fit a mouthguard, you can fit Decibullz. Soften them in boiling water, press into your ears, and in minutes they harden to deliver a snug fit and clear sound.";
    }
    if (soundOption.classList.contains("popular")) {
      firstText.innerHTML = "AMERICAN MADE DECIBULLZ EARPLUGS FIT PERFECTLY IN EVERY EAR";
      secondText.innerHTML = "Decibullz set out to create a custom fit, comfortable, set of in-ear plugs, and they succeeded greatly.";
    }

  })
});


