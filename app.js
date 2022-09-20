var inputText = document.querySelector("#input-txt");
var translateText = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");

function urlConstructor(text) {
  return "https://api.funtranslations.com/translate/pirate.json?text=" + text;
}

function errorHandler(erorr) {
  alert("Server error! Please try again after some time");
  console.log("Error", error);
}

function doTranslate(text) {
  var url = urlConstructor(text);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch(errorHandler);
}

translateText.addEventListener("click", () => {
  doTranslate(inputText.value);
});
