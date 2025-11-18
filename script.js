// Scores
let scores = { Dipenjara: 0, Tersangka : 0, Dituntut: 0, Dipolisikan: 0 };

// Scenes (dialogue + questions)
let scenes = [ 
   // Opening Dialogue
  { type: "dialogue", 
    text: "Halo! selamat datang. Melalui tes ini kamu akan mengetahui seberapa aman kamu selama berkespresi di media sosial.", 
    fadeIn: true, 
	buttonText: "next",
    },

  { type: "dialogue", 
    text: "PERHATIAN: JIKA KAMU MAHASISWA FISIPOL KAMU TIDAK AKAN SELAMAT.", 
    fadeIn: true, 
   	buttonText: "next",
  },

  // Questions Set 1
  { type: "question", text: "Saat pemerintah mengeluarkan kebijakan yang dinilai tidak populer dan berpotensi merugikan masyarakat, sikapmu adalah:", options: [
    { text: "Saya akan melakukan riset mandiri, mengumpulkan data, dan menyusun kritik sistematis melalui platform media sosial dengan tagar yang strategis", scores: ["Dipenjara"] },
    { text: "Saya akan menyampaikan kritik melalui meme atau konten kreatif yang mudah dipahami, tanpa konfrontasi langsung", scores: ["Dipolisikan"] },
    { text: "Saya memilih merepost konten di media sosial dan menyebarkannya ke khalayak luas", scores: ["Dituntut"] },
    { text: "Saya akan turun ke jalan dan mendokumentasikan aksi protes, lalu membagikannya secara luas di media sosial", scores: ["Tersangka"] }
  ]},
 { type: "question", text: "Ketika seorang teman membagikan kutipan dari buku pemikiran kiri di media sosial, reaksimu:", options: [
    { text: "Suka banget dan langsung ikut menyebarkan kutipan tersebut di media sosialmu beserta rangkuman singkat tentang bukunya berdasarkan bacaanmu", scores: ["Dipenjara"] },
    { text: "Ikut baca buku-buku itu", scores: ["Dipolisikan"] },
    { text: "Ngobrol sama temen-temen atau dosen tentang buku kiri", scores: ["Dituntut"] },
    { text: "Ikut ngajak temen-temen buat baca buku itu juga karena isinya Daging Banget", scores: ["Tersangka"] }
  ]},
 { type: "question", text: "Menghadapi unggahan viral yang mengungkapkan dugaan kecurangan sistemik dalam pemilu, kamu:", options: [
    { text: "Membuat analisis data komprehensif dan membagikannya di semua platform dengan men-tag lembaga pengawas", scores: ["Dipenjara"] },
    { text: "Retweet", scores: ["Dipolisikan"] },
    { text: "Like aja..", scores: ["Dituntut"] },
    { text: "Menyebarkan konten tersebut ke berbagai grup dengan caption yang menarik perhatian", scores: ["Tersangka"] }
  ]},
  { type: "question", text: "Menanggapi kenaikan harga sembako yang tidak terkendali, responsmu:", options: [
    { text: "Membuat utas panjang menuntut akuntabilitas pejabat dengan bukti dan data lapangan", scores: ["Dipenjara"] },
    { text: "Retweet, like, repost", scores: ["Dipolisikan"] },
    { text: "Mengungkapkan kekhawatiran melalui curhat personal di media sosial tentang dampaknya", scores: ["Dituntut"] },
    { text: "Mengajak boikot massal terhadap produk tertentu dan mendokumentasikan respons masyarakat", scores: ["Tersangka"] }
  ]},
   { type: "question", text: "Ketika melihat kasus pelanggaran HAM yang melibatkan aparat negara, sikapmu:", options: [
    { text: "Membuat dokumentasi lengkap dengan bukti dan menghubungkan dengan pelanggaran serupa sebelumnya", scores: ["Dipenjara"] },
    { text: "Retweet!!!", scores: ["Dipolisikan"] },
    { text: "Membagikan berita dari media independen dengan caption yang mendukung korban", scores: ["Dituntut"] },
    { text: "Mengajak teman-temanmu untuk beraksi melalui sosial media, grupchat, dll.", scores: ["Tersangka"] }
  ]},
	
  // Dialogue before second set
  { type: "dialogue", 
    text: "Pertanyaan setelah ini pertanyaan yang menentukan keselamatanmu lebih lanjut!.",
 	fadeIn: true, 
	buttonText: "next"  },

  // Questions Set 2
  { type: "question", text: "Pernah gak kamu mengadvokasikan hak-hak orang lain yang diabaikan negara", options: [
    { text: "Pernah!!!", score: ["Dipenjara","Tersangka"] },
    { text: "Palingan pernah ikut ngeshare aja lewat sosmed", score: ["Dituntut"] },
    { text: "Nggaksih", score: ["Dipolisikan"] }
  ]},
  { type: "question", text: "Pernah gak kamu nyebarin atau ngelike atau repost meme tentang presiden kita", options: [
    { text: "PERNAH LAH", score: ["Dituntut"] },
    { text: "ya..ngelike aj sih....kocak min", score: ["Dipolisikan"] },
    { text: "Iya terus gw tambahin teks SEBERAPA FRUSTRASINYA GUA",  score: ["Dipenjara","Tersangka"] },
  ]},
  { type: "question", text: "kalo meme bahlil pernah gak", options: [
    { text: "Pernah lah AWOKAOKOWKOK", score: ["Dipenjara","Tersangka"] },
    { text: "pernah..", score: ["Dipolisikan"] },
    { text: "Nggak (nggak salah lagi!)", score: ["Dipolisikan"] },
    { text: "hehe",score: ["Dituntut"] },
  ]},
 
  // Dialogue before third set
  { type: "dialogue", 
    text: "Udah ah, udh penasaran blm sama hasilnya??", 
    fadeIn: true, 
	buttonText: "iyaaaaaa cpetan!!!",
    },
	


// Track current scene
let currentScene = 0;

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
              option.score.forEach(score => scores[score] += 1);
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

  // Determine top score
  const topScore = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  textBox.textContent = 'Kamu akan..${topScore}';

  const IMAGE_DIR = "images/";
  const catImages = {
    Fire:  "fire-cat.png",
    Plant: "plant-cat.png",
    Seaside: "water-cat.png",
    Moon:  "moon-cat.png",
  };

  // Create image
  const img = document.createElement("img");
  img.classList.add("score-result"); // keeps styling like border-radius/margin
  img.alt = `${topScore} Cat`;
  img.src = IMAGE_DIR + catImages[topScore];

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
      scores = { Dipenjara: 0, Tersangka: 0, Dituntut: 0, Dipolisikan: 0 };
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
