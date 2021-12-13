const form = document.getElementById("editFile");
const textarea = form.text;
const submit = form.submit;
const reset = form.reset;

BASE_URL = "http://127.0.0.1:3000";

function toggleButton() {
    submit.disabled = !submit.disabled;
    reset.disabled = !reset.disabled;
}

const doGetRequest = (path) => {
  toggleButton();
  fetch(BASE_URL+path, {
    method: "GET",
  }).then((resp) => resp.json()).then((resp) => {
    textarea.value = resp;
    toggleButton();
  }).catch((error) => alert(error.toString()));
};
const doPostRequest = (path, data) => {
  toggleButton();
  fetch(BASE_URL+path, {
    method: "POST",
    headers: {
     'content-type': 'application/json'
    },
    body: JSON.stringify({
     text: data
    })
  }).then((resp) => resp.json()).then((resp) => {
    alert(resp.massage);
    toggleButton();
  }).catch((error) => alert(error.toString()));
};

form.addEventListener('submit', (e) => {
    console.log("submit");
    doPostRequest("/file", textarea.value);
    e.preventDefault();
});

doGetRequest("/file");