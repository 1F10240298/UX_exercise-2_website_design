const url = "https://marinesnow.sakura.ne.jp/2023/WebD1/sample_json.php";

fetch(url)
.then(response => response.json())
.then((scores) => {
  for (key in scores) {
    document.getElementById("scores").innerHTML += `${key} : ${scores[key].grade}<br>`;
  }
})
