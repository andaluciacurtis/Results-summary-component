const scoreContainer = document.querySelector(".score-summary");

getJsonData();

async function getJsonData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  displayResults(data);  
}

function displayResults(data) {
  data.forEach((section)=>{
    let name = section.category;
    let score = section.score;
    let icon = section.icon;

    let sectionDiv = document.createElement("div");
    sectionDiv.classList.add("score-section");

    sectionDiv.innerHTML = `
      <div class="score-title ${name.toLowerCase()}-title">
        <img src="${icon}" alt="${name}" srcset="">
              <p>${name}</p>
      </div>
      <p>
        <span class="section-score">${score}</span>
        <span class="possible-points">/100</span>
      </p>
    `
    scoreContainer.appendChild(sectionDiv);
  });
}
