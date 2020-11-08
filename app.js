const name = document.querySelector("#name");
const time = document.querySelector("#date");
const money = document.querySelector("#amount");
const button = document.querySelector(".btn");
const table = document.querySelector("#table");

button.addEventListener("click", () =>
    $('#table').append('<tr><td>' + name.value + '</td><td>' + time.value + '</td><td>$ ' + money.value + '</td></tr>')
);