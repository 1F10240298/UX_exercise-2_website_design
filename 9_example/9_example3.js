const url = "https://marinesnow.sakura.ne.jp/2023/WebD1/sample_json.php";

fetch(url)
.then(response => response.json())
.then((data) => {
  console.log(data.student002.score);
})
