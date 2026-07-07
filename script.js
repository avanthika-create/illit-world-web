const viewer = document.getElementById("viewer");
const content = document.getElementById("viewer-content");

function openMember(name) {
  viewer.classList.remove("hidden");

  const members = {
    yunah: "images/yunah.png",
    minju: "images/minju.png",
    moka: "images/moka.png",
    wonhee: "images/wonhee.png",
    iroha: "images/iroha.png"
  };s

  content.innerHTML = `
    <img src="${members[name]}" class="member-photo">
  `;
}

function openTrash() {
  viewer.classList.remove("hidden");

  content.innerHTML = `
    <h1>Recycle Bin</h1>
    <p>Nothing here.</p>
  `;
}

function closeViewer() {
  viewer.classList.add("hidden");
  content.innerHTML = "";
}
