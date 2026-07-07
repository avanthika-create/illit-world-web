const viewer = document.getElementById("viewer");
const content = document.getElementById("viewer-content");

function openMember(name) {
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

function closeViewer() {
  viewer.classList.remove("show");
}

function openTrash() {
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
