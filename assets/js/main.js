document.getElementById("menu-process").onclick = function () {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("ban-tho").style.display = "block";
  document.getElementById("bell-ring").play();
  var anh = document.querySelector("#anh-dat-vao");
  var inputFile = document.querySelector("#file-input");
  anh.src = URL.createObjectURL(inputFile.files[0]);
  var msg = document.querySelector("#msg");
  var name = document.querySelector("#name-input").value;
  var school = document.querySelector("#school-input").value;
  var wish = document.querySelector("#wish-input").value;
  var message = "";
  msg.innerHTML = message.concat(
    "Thí chủ ",
    name,
    " - ",
    school,
    " xin được cầu mong: ",
    wish,
    "!"
  );
};
