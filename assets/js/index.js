// program cards
const allPrograms = document.querySelector(".training-programs");

function renderPrograms() {
  programs.forEach((program) => {
    allPrograms.innerHTML += `<div class="program-card">
        <div class="program-img">
          <img src="${program.imgSrc}" />
        </div>
        <div class="program-info">
          <div class="name">
            <h4>${program.name}</h4>
          </div>
          <div class="info">
            <p>
              Sagittis vitae malesuada non in sit. Habitant purus
              porttitor duis eget. Euismod pretium Sagittis vitae
              malesuada non in.
            </p>
          </div>
        </div>
      </div>`;
  });
}

renderPrograms();


// scrollToTop
const scrollTop = document.querySelector(".to-top-btn");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
