// Scores
let scores = { Fire: 0, Plant: 0, Seaside: 0, Moon: 0 };
 
  { type: "dialogue", 
    text: "Halo! selamat datang. Melalui tes ini kamu akan mengetahui seberapa aman kamu selama berkespresi di media sosial.", 
    fadeIn: true, 
		buttonText: next,
    },

  { type: "dialogue", 
    text: "PERHATIAN: JIKA KAMU MAHASISWA FISIPOL KAMU TIDAK AKAN SELAMAT.", 
  },

  // Questions Set 1
  { type: "question", text: "What’s your ideal way to start the morning?", options: [
    { text: "With a warm drink, watching the sunrise scenery", cats: ["Seaside"] },
    { text: "With a hearty and nutritious breakfast", cats: ["Plant"] },
    { text: "Making a to-do list and setting intentions", cats: ["Fire"] },
    { text: "Sleeping in after a late night, starting the day slowly", cats: ["Moon"] }
  ]},
  { type: "question", text: "Which vibe calls to you most?", options: [
    { text: "The sea", cats: ["Seaside"] },
    { text: "Someplace with a lot of greenery", cats: ["Plant"] },
    { text: "Someplace with a lot of energy and a lot going on", cats: ["Fire"] },
    { text: "Somewhere private and quiet", cats: ["Moon"] }
  ]},
  { type: "question", text: "You have free time, what are you doing?", options: [
    { text: "Practicing a craft you picked up", cats: ["Plant"] },
    { text: "Exploring new towns and sights", cats: ["Seaside"] },
    { text: "Reading a nonfiction book", cats: ["Moon"] },
    { text: "Exercising or training", cats: ["Fire"] }
  ]},
  { type: "question", text: "What kind of friend are you in the friend group?", options: [
    { text: "The observant friend who doesn’t quite belong to one group", cats: ["Seaside"] },
    { text: "The friend who plans and organizes get-togethers", cats: ["Fire"] },
    { text: "The friend in the background people sometimes forget", cats: ["Moon"] },
    { text: "The parental figure who gives advice", cats: ["Plant"] }
  ]},

  // Dialogue before second set
  { type: "dialogue", 
    text: "I’m curious on how you think and process! Let me ask you a few questions to get a better sense of that.", 
    image: "images/Sprite.gif", 
    maxWidth: "175px",
    sound: "sounds/blip.mp3" },

  // Questions Set 2
  { type: "question", text: "When learning a new skill, you prefer...", options: [
    { text: "Hands-on trial and error with real ingredients", cats: ["Plant","Seaside"] },
    { text: "Studying under a mentor’s guidance", cats: ["Fire"] },
    { text: "Studying the theory and visualizing how it works", cats: ["Moon"] }
  ]},
  { type: "question", text: "Do you follow your gut, or weigh all your options logically?", options: [
    { text: "I follow my gut and feeling", cats: ["Seaside"] },
    { text: "I choose whatever makes the most logical sense", cats: ["Moon"] },
    { text: "A balance of what makes sense and feels right", cats: ["Fire","Plant"] }
  ]},
  { type: "question", text: "You get a glimpse of where you want to be someday. What do you do next?", options: [
    { text: "Create a plan and commit to making it happen", cats: ["Fire"] },
    { text: "Wonder what it really means and watch for signs", cats: ["Moon"] },
    { text: "Let go of the outcome. You’ll adapt when it comes", cats: ["Seaside"] },
    { text: "Write it down and reflect on it over time", cats: ["Plant"] }
  ]},
  { type: "question", text: "What’s your approach to learning a new skill?", options: [
    { text: "Practice until it’s perfect", cats: ["Fire"] },
    { text: "Observe others and copy what works", cats: ["Moon"] },
    { text: "Follow your intuition and let that guide you", cats: ["Seaside"] },
    { text: "Experiment and reflect on what works", cats: ["Plant"] }
  ]},

  // Dialogue before third set
  { type: "dialogue", 
    text: "Ok, these questions are going to be a little more personal, no pressure! Answer to the best of your ability 😊", 
    image: "images/Sprite.gif", 
    maxWidth: "175px",
    sound: "sounds/blip.mp3" },

  // Questions Set 3
  { type: "question", text: "When you feel overwhelmed, what do you usually do?", options: [
    { text: "Power through — obstacles are meant to be overcome", cats: ["Fire"] },
    { text: "Retreat somewhere peaceful and quiet", cats: ["Plant"] },
    { text: "Journal, light a candle, and let thoughts unfold", cats: ["Moon"] },
    { text: "Go for a walk or take a long bath", cats: ["Seaside"] }
  ]},
  { type: "question", text: "What motivates you most?", options: [
    { text: "A deep desire to understand and reflect the world", cats: ["Seaside","Moon"] },
    { text: "A need to grow, improve, and create lasting change", cats: ["Fire","Plant"] }
  ]},
  { type: "question", text: "Do you tend to keep your emotions private or share them easily?", options: [
    { text: "You only share when you feel like it", cats: ["Seaside"] },
    { text: "You’re not afraid to share what you feel and think", cats: ["Fire"] },
    { text: "You only share with people you feel safe with", cats: ["Plant"] },
    { text: "You prefer to keep your emotions private", cats: ["Moon"] }
  ]},
  { type: "question", text: "When someone hurts you, are you more likely to withdraw or confront them?", options: [
    { text: "Confront", cats: ["Fire","Plant"] },
    { text: "Withdraw", cats: ["Seaside","Moon"] }
  ]},
  { type: "question", text: "Do you feel like people know the real you, or do you keep parts hidden?", options: [
    { text: "Real you", cats: ["Fire"] },
    { text: "Hidden", cats: ["Moon"] },
    { text: "Only share when prompted", cats: ["Plant","Seaside"] }
  ]}
];

// Track current scene
let currentScene = 0;

// Preload the first few images to prevent blinking
const preloadImages = [
  "images/house.gif",
  "images/lynn.png",
  "images/Sprite.gif",
  "images/Sprite-2.gif"
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src; // browser caches it now
});

function showScene() {
  let scene = scenes[currentScene];
  let textBox = document.getElementById("text-box");
  let buttonsDiv = document.getElementById("buttons");
  
  // Remove previous font and dialogue classes
  textBox.classList.remove("title-font", "question-font", "dialogue-scene");

  // Apply font classes
  if (scene.isTitle) {
      textBox.classList.add("title-font");
  } else if (scene.type === "question") {
      textBox.classList.add("question-font");
  }

 if (scene.type === "dialogue" && !scene.isCreatorNote && !scene.isTitle) {
    textBox.classList.add("dialogue-scene");
}

  // Show text
  if (scene.type === "dialogue" && scene.isCreatorNote) {
      textBox.innerHTML = `<div class="creator-note">${scene.text}</div>`; // allow HTML
  } else {
      textBox.textContent = scene.text;
  }

  // Show image if there is one
  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "";
  if (scene.image) {
      let img = document.createElement("img"); // make new <img> element 
      img.src = scene.image; // set the source
      img.style.maxWidth = scene.maxWidth || "300px"; // set max width

      if (scene.fadeIn) {
          img.classList.add("fade-in");
          setTimeout(() => {
              img.classList.add("show");
          }, 10);
      }

      imageDiv.appendChild(img); // append it to the imageDiv
  } 

  // Show buttons
  buttonsDiv.innerHTML = "";

  if (scene.type === "dialogue") {
      if (scene.buttons) {
          // Multiple buttons
          scene.buttons.forEach(label => {
              let btn = document.createElement("button");
              btn.textContent = label;
              btn.classList.add("dialogue-btn"); // style for dialogue
              btn.onclick = () => {
                  if (scene.sound) {
                      const audio = new Audio(scene.sound);
                      audio.currentTime = 0;
                      audio.play();
                  }
                  currentScene++;
                  showScene();
              };
              buttonsDiv.appendChild(btn);
          });
      } else {
          // Single button (default or custom)
          let btn = document.createElement("button");
          btn.textContent = scene.buttonText || "Next";
          btn.classList.add("dialogue-btn"); // style for dialogue
          btn.onclick = () => {
              if (scene.sound) {
                  const audio = new Audio(scene.sound);
                  audio.currentTime = 0;
                  audio.play();
              }
              currentScene++;
              showScene();
          };
          buttonsDiv.appendChild(btn);
      }
  } 
  else if (scene.type === "question") {
      scene.options.forEach(option => {
          let btn = document.createElement("button");
          btn.textContent = option.text;
          btn.classList.add("question-btn"); // style for questions
          btn.onclick = () => {
              option.cats.forEach(cat => scores[cat] += 1);
              currentScene++;
              if (currentScene >= scenes.length) {
                  showResult();
              } else {
                  showScene();
              }
          };
          buttonsDiv.appendChild(btn);
      });
  }
}



function showResult() {
  const textBox = document.getElementById("text-box");
  const container = document.getElementById("container");
  textBox.classList.add("results-active");
  container.classList.add("results-active");

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";

  // show overlay when results appear
  const overlay = document.getElementById("overlay");
  overlay.style.opacity = 1;

  // Determine top cat
  const topCat = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  textBox.textContent = `Your kitty is the ... ${topCat} Kitty!`;

  const IMAGE_DIR = "images/";
  const catImages = {
    Fire:  "fire-cat.png",
    Plant: "plant-cat.png",
    Seaside: "water-cat.png",
    Moon:  "moon-cat.png",
  };

  // Create image
  const img = document.createElement("img");
  img.classList.add("cat-result"); // keeps styling like border-radius/margin
  img.alt = `${topCat} Cat`;
  img.src = IMAGE_DIR + catImages[topCat];

// inside showResult()
if (window.innerWidth >= 1600) {
    img.style.width = "500px"; // big desktop
} else if (window.innerWidth >= 1025) {
    img.style.width = "500px"; // laptops / MacBooks
} else {
    img.style.width = "85%"; // tablet/mobile
}

  img.style.setProperty("height", "auto", "important"); // always scale proportionally

  // Error fallback
  img.onerror = () => {
    console.warn("Image failed to load:", img.src);
    textBox.textContent += " (Image not found)";
  };

  buttonsDiv.appendChild(img);

  // Back to Home button
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Back to Home";
  homeBtn.onclick = () => {
      overlay.style.opacity = 0;
      textBox.classList.remove("results-active");
      scores = { Fire: 0, Plant: 0, Seaside: 0, Moon: 0 };
      currentScene = 0;
      showScene();
  };
  buttonsDiv.appendChild(homeBtn);

  // Explore Other Kitties button
  const exploreBtn = document.createElement("button");
  exploreBtn.textContent = "Explore Other Kitties";
  exploreBtn.onclick = () => {
      window.location.href = "cats.html";
  };
  buttonsDiv.appendChild(exploreBtn);
}



showScene();

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("close-modal");

    document.querySelectorAll(".cat-thumb").forEach(thumb => {
        thumb.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = thumb.dataset.stat;
            modalDesc.textContent = thumb.dataset.description;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});

function setVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setVh);
window.addEventListener('load', setVh);
setVh();
