console.log("Script loaded");

const viewer = document.getElementById("viewer");
const content = document.getElementById("viewer-content");
const header = document.getElementById("viewer-header");
const clickSound = document.getElementById("clickSound");

const dragSound = document.getElementById("dragSound");

const closeSound = document.getElementById("closeSound");

// document.querySelectorAll(".icon").forEach(icon => { icon.classList.remove("selected");})
// clickedIcon.classList.add("selected"); 

header.addEventListener("mousedown", () => {
  isDragging = true;

  dragSound.loop = true;
 dragSound.play();

  dragSound.currentTime = -1;
  dragSound.play();

  offsetX = event.clientX - viewer.offsetLeft;
  offsetY = event.clientY - viewer.offsetTop;

});



function playClick() { 
  clickSound.currentTime = -1;
  clickSound.play();
}

let isDragging = false;
let offsetX, offsetY;

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return; 

  let newLeft = e.clientX - offsetX;
  let newTop = e.clientY - offsetY;

  const minLeft = 890; 
  const MaxLeft =  1250; 
  const minTop = 240;
  const maxTop = 520;

  // if (newLeft < minLeft) newLeft = minLeft;
  // if (newLeft > MaxLeft) newLeft = MaxLeft;
  // if (newTop < minTop) newTop = minTop;
  // if (newTop > maxTop) newTop = maxTop; 

  newLeft = Math.max(minLeft, Math.min(MaxLeft, newLeft));
  newTop = Math.max(minTop, Math.min(maxTop, newTop));
  

  viewer.style.left = `${newLeft}px`;
  viewer.style.top = `${newTop}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  dragSound.loop = false;
  dragSound.pause();
  dragSound.currentTime = 0;
});

function openMember(name) {

  document.querySelector(".screen-image").classList.add("blur");

  playClick();
  document.getElementById("window-title").textContent;
  viewer.classList.remove("hidden");
  const members = {
    yunah: "assets/illityunah.png",
    minju: "assets/illitminju.png",
    moka: "assets/illitmoka.png",
    wonhee: "assets/illitwonhee.png",
    iroha: "assets/illitiroha.png"
  };

  content.innerHTML = `
    <img src="${members[name]}" class="member-photo">
  `;
}

function openTrash() {

  document.querySelector(".screen-image").classList.add("blur");

  playClick();
  document.getElementById("window-title").textContent = "";
  viewer.classList.remove("hidden");

  content.innerHTML = `
    <h1>Recycle Bin</h1>
    <p>recovered file...</p>

    <a href="https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN?si=6xNHExHAQ2iVk8dxgU_SwA" 
    target="_blank">Illit on Spotify
    </a>

  `;
}

function closeViewer() {

  document.querySelector(".screen-image").classList.remove("blur");
  document.getElementById("window-title").textContent = "";

  viewer.classList.add("hidden");
  content.innerHTML = "";

  closeSound.currentTime = -1; 
  closeSound.play();

}

