let elArr = [];

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    elArr.push({ y: i, x: j });
  }
}

let elList = document.querySelector(".chess__list");

elArr.forEach((items) => {
  let li = document.createElement("li");
  li.classList.add("chess__item");
  if ((items.x + items.y) % 2 != 0) {
    li.classList.add("itemWhite");
  } else {
    li.classList.add("itemBlack");
  }

  li.innerHTML = `
      <span class="span2 d-none">${items.x}</span>
      <span class="span1 d-none">${items.y}</span>
  `;

  elList.appendChild(li);
});

let items = document.querySelectorAll(".chess__item");
let span1 = document.querySelectorAll(".span1");
let span2 = document.querySelectorAll(".span2");
let xNum = document.querySelector(".x-num");
let yNum = document.querySelector(".y-num");
let x, y;

let chessBtn1 = document.querySelector("#chess__btn1");
let elBtns = document.querySelectorAll(".ches__forms-btns");

elBtns.forEach((item) => {
  item.addEventListener("click", () => {
    elBtns.forEach((value) => {
      value.classList.remove("orange");
    });
    item.classList.add("orange");
  });
});

function btnGhost() {
  chessBtn1.addEventListener("click", () => {
    items.forEach((e) => {
      e.addEventListener("mouseout", () => {
        e.classList.remove("btn1");
      });
      e.addEventListener("mouseover", () => {
        e.classList.add("btn1");
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        btnsGhost(x, y);
      });
    });
  });
}

function itemsFun() {
  items.forEach((e) => {
    e.addEventListener("mouseout", () => {
      e.classList.remove("movitem2");
      e.classList.remove("movItem");
    });
    e.addEventListener("mouseover", () => {
      items.forEach((item) => {
        item.classList.remove("movitem2");
      });

      e.classList.add("movitem2");
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    });
  });
}
itemsFun();

function btnsGhost(x, y) {
  items.forEach((item) => {
    if (
      item.childNodes[1].textContent == x ||
      item.childNodes[3].textContent == y
    ) {
      item.classList.add("green");
    } else {
      item.classList.remove("green");
    }
  });
}

elList.addEventListener('mouseout', () => {
  items.forEach(im => {
    im.classList.remove("green");

    xNum.innerHTML = 0;
    yNum.innerHTML = 0;
  })
})

btnGhost();
