const grades = document.getElementById("grades");

const main = async (gradeData) => {
  const res = await fetch("./data.json");
  const gradesJson = await res.json();

  const html = gradesJson
    .map(
      (i) => `
    <div class="grade ${i.color}">
      <div class="grade-img">
        <img src="${i.icon}" alt="" />
        ${i.category}
      </div>
      <div class="grade-number"><span>${i.score}</span> / 100</div>
    </div>
    `
    )
    .join("");
  grades.innerHTML = html;
};

main();
