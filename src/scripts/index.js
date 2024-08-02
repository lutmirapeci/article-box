// Array of articles
const articles = [
  [
    1,
    "Oceanic Trench Mysteries",
    "Unveiling new findings from the deepest parts of our oceans.",
    203,
    "./src/assets/img/ocean.jpg",
  ],
  [
    2,
    "Urban Gardening Evolution",
    "The transformation of city spaces into green, productive gardens.",
    124,
    "./src/assets/img/garden.jpg",
  ],
  [
    3,
    "Quantum Computing 101",
    "Simplifying the complex world of quantum computing and its potential.",
    65,
    "./src/assets/img/quantum.jpg",
  ],
  [
    4,
    "AI Ethics Debate",
    "Balance between tech advancements and ethical issues in AI.",
    95,
    "./src/assets/img/ai.jpg",
  ],
  [
    5,
    "Eco-Tourism Rise",
    "Exploring sustainable travel practices and their global impact.",
    213,
    "./src/assets/img/eco.jpg",
  ],
  [
    6,
    "Commercial Space Race",
    "The impact and advancements of private companies in space exploration.",
    15,
    "./src/assets/img/space.jpg",
  ],
];

const createArticleBox = (article) => {
  const [index, title, description, likes, image] = article;

  const articleBox = document.createElement("div");
  articleBox.className = "col-md-4 mb-4";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = image;
  img.alt = title;

  img.addEventListener("mouseover", () => {
    img.classList.add("zoomed");
  });
  img.addEventListener("mouseout", () => {
    img.classList.remove("zoomed");
  });

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = description;

  const likesNumber = document.createElement("p");
  likesNumber.className = "card-text";
  likesNumber.textContent = `Likes: ${likes}`;

  const hideButton = document.createElement("button");
  hideButton.className = "btn btn-danger";
  hideButton.textContent = "Hide";
  hideButton.addEventListener("click", () => {
    articleBox.style.display = "none";
  });

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(likesNumber);
  cardBody.appendChild(hideButton);
  card.appendChild(img);
  card.appendChild(cardBody);
  articleBox.appendChild(card);

  return articleBox;
};

const articleWrapper = document.querySelector(".article-wrapper");
articles.forEach((article) => {
  const articleBox = createArticleBox(article);
  articleWrapper.appendChild(articleBox);
});

const filterArticlesByLikes = (minLikes, maxLikes) => {
  const allArticleBoxes = document.querySelectorAll(".article-wrapper .col-md-4");
  allArticleBoxes.forEach((box) => {
    const likeText = box.querySelector(".card-body .card-text:last-of-type").textContent;
    const likes = parseInt(likeText.replace("Likes: ", ""));
    if (likes >= minLikes && likes <= maxLikes) {
      box.style.display = "";
    } else {
      box.style.display = "none";
    }
  });
};

document
  .getElementById("lessThan50")
  ?.addEventListener("click", () => filterArticlesByLikes(0, 50));
document
  .getElementById("between50And150")
  ?.addEventListener("click", () => filterArticlesByLikes(50, 150));
document
  .getElementById("moreThan150")
  ?.addEventListener("click", () => filterArticlesByLikes(150, 1000000));
document.getElementById("showAll")?.addEventListener("click", () => {
  console.log("Showing all articles");
  const allArticleBoxes = document.querySelectorAll(".article-wrapper .col-md-4");
  allArticleBoxes.forEach((box) => {
    box.style.display = "";
  });
});
