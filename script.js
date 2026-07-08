console.log("Script loaded");

const viewer = document.getElementById("viewer");
const content = document.getElementById("viewer-content");
const header = document.getElementById("viewer-header");
const clickSound = document.getElementById("clickSound");

function playClick() { 
  clickSound.currentTime = 0;
  clickSound.play();
}

let isDragging = false;
let offsetX, offsetY;

header.addEventListener("mousedown", (e) => {
  isDragging = true; 
  offsetX = e.clientX - viewer.offsetLeft; 
  offsetY = e.clientY - viewer.offsetTop;
});

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
});

function openMember(name) {
  playClick();
  document.getElementById("window-title").textContent;
  viewer.classList.remove("hidden");
  const members = {
    yunah: "images/illityunah.png",
    minju: "images/illitminju.png",
    moka: "images/illitmoka.png",
    wonhee: "images/illitwonhee.png",
    iroha: "images/illitiroha.png"
  };

  content.innerHTML = `
    <img src="${members[name]}" class="member-photo">
  `;
}

function openTrash() {
  playClick();
  document.getElementById("window-title").textContent = "";
  viewer.classList.remove("hidden");

  content.innerHTML = `
    <h1>Recycle Bin</h1>
    <p>Nothing here.</p>

    <a href="https://open.spotify.com/artist/36cgvBn0aadzOijnjjwqMN?si=6xNHExHAQ2iVk8dxgU_SwA" 
    target="_blank">Illit on Spotify
    </a>

  `;
}

function closeViewer() {
  viewer.classList.add("hidden");
  content.innerHTML = "";
}

