
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('pushButton');
  var yellow = document.getElementById('area-yellow');
  btn.addEventListener('click', function () {
      yellow.style.backgroundColor = 'green';
  });
  });
