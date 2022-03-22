let result = "";

fetch("http://localhost:8000/blogs")
  .then((res) => res.json())
  .then(({ rows } = data) => {
    rows.forEach(({ title, avatar, intro } = rows) => {
      result += `
       <div class="card">
            <img class="card-avatar" src="/${avatar}"/>
            <h1 class="card-title">${title}</h1>
            <p class="intro">${intro}</p>
            <a class="card-link" href="#">Read</a>
        </div>
       `;
    });
    document.querySelector(".container").innerHTML = result;
  })
  .catch((e) => {
    console.log(e);
  });


if ("serviceWorker" in navigator) {

  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/blogger.serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

