document.addEventListener("DOMContentLoaded", function () {
  function shortMe() {
    var longUrl = document.getElementById("longUrl").value;
    fetch(`https://is.gd/create.php?format=json&url=${longUrl}`)
      .then((response) => response.json())
      .then((data) => {
        var shortUrl = data.shorturl;
        document.getElementById("shortUrl").value = shortUrl;
      })
      .catch((error) => console.error(error));
  }
  var shortenButton = document.getElementById("shorten");
  shortenButton.addEventListener("click", shortMe);
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      shortMe();
    }
  });
});
