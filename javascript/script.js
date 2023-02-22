let blokovi = document.getElementsByClassName("sekcija");
document.getElementsByClassName("nav")[0].classList.add("active");
window.onscroll = function () {
  myFunction();
  minimize();
  for (let i = 0; i < blokovi.length; i++) {
    if (
      blokovi[i].getBoundingClientRect().top > 0 ||
      blokovi[i].getBoundingClientRect().bottom < 0
    ) {
      document.getElementsByClassName("nav1")[i].classList.remove("active");
    } else {
      switch (i) {
        case 0:
          document.getElementsByClassName("nav1")[0].classList.add("active");
          break;

        case 1:
          document.getElementsByClassName("nav1")[1].classList.add("active");
          break;

        case 2:
          document.getElementsByClassName("nav1")[2].classList.add("active");
          break;

        case 3:
          document.getElementsByClassName("nav1")[3].classList.add("active");
          break;

        default:
          console.log("Nastao je neki error sa bojama!");
      }
    }
  }
  var x = blokovi[2].style.height * -1;
  console.log(x);
};

document
  .getElementsByClassName("hamburger")[0]
  .addEventListener("click", function hamburgerFunkcija() {
    document
      .getElementsByClassName("padajuci-meni")[0]
      .classList.toggle("povecanje-height");
    document.getElementsByClassName("meni")[0].classList.toggle("vidljivost");
  });

document
  .getElementsByClassName("hamburger")[1]
  .addEventListener("click", function hamburgerFunkcija() {
    document
      .getElementsByClassName("padajuci-meni")[0]
      .classList.toggle("fixed-menu");
    document
      .getElementsByClassName("padajuci-meni")[0]
      .classList.toggle("povecanje-height");
    document.getElementsByClassName("meni")[0].classList.toggle("vidljivost");
  });

document
  .getElementsByClassName("dropdown2")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("padajuci-meni")[0]
      .classList.toggle("povecanje-height2");
    document
      .getElementsByClassName("dropdown-content")[2]
      .classList.toggle("vidljivost");
  });

var padajuciMeni = document.getElementsByClassName("padajuci-meni")[0];
var meni = document.getElementsByClassName("meni")[0];
var navbar = document.getElementsByClassName("fixed")[0];

function minimize() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    padajuciMeni.classList.remove("povecanje-height");
    meni.classList.remove("vidljivost");
  }
}

function myFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

document
  .getElementsByClassName("klase")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("content2")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content3")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content4")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content1")[0].classList.add("vidljivo");
    document
      .getElementsByClassName("classes-heading")[1]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[2]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[3]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[0]
      .classList.add("active");
  });
document
  .getElementsByClassName("klase")[1]
  .addEventListener("click", function () {
    document.getElementsByClassName("content1")[0].classList.add("nevidljivo");
    document.getElementsByClassName("content1")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content3")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content4")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content2")[0].classList.add("vidljivo");
    document
      .getElementsByClassName("classes-heading")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[2]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[3]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[1]
      .classList.add("active");
  });
document
  .getElementsByClassName("klase")[2]
  .addEventListener("click", function () {
    document.getElementsByClassName("content1")[0].classList.add("nevidljivo");
    document.getElementsByClassName("content1")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content2")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content4")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content3")[0].classList.add("vidljivo");
    document
      .getElementsByClassName("classes-heading")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[1]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[3]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[2]
      .classList.add("active");
  });
document
  .getElementsByClassName("klase")[3]
  .addEventListener("click", function () {
    document.getElementsByClassName("content1")[0].classList.add("nevidljivo");
    document.getElementsByClassName("content1")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content2")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content3")[0].classList.remove("vidljivo");
    document.getElementsByClassName("content4")[0].classList.add("vidljivo");
    document
      .getElementsByClassName("classes-heading")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[1]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[2]
      .classList.remove("active");
    document
      .getElementsByClassName("classes-heading")[3]
      .classList.add("active");
  });

document
  .getElementsByClassName("days")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("tuesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("wednesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("thursday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("friday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("monday-table")[0]
      .classList.remove("nevidljivo");
    document.getElementsByClassName("days")[0].classList.add("active");
    document.getElementsByClassName("days")[1].classList.remove("active");
    document.getElementsByClassName("days")[2].classList.remove("active");
    document.getElementsByClassName("days")[3].classList.remove("active");
    document.getElementsByClassName("days")[4].classList.remove("active");
  });
document
  .getElementsByClassName("days")[1]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("monday-table")[0]
      .classList.add("nevidljivo");
    document
      .getElementsByClassName("wednesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("thursday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("friday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("tuesday-table")[0]
      .classList.add("vidljivo-table");
    document.getElementsByClassName("days")[0].classList.remove("active");
    document.getElementsByClassName("days")[1].classList.add("active");
    document.getElementsByClassName("days")[2].classList.remove("active");
    document.getElementsByClassName("days")[3].classList.remove("active");
    document.getElementsByClassName("days")[4].classList.remove("active");
  });
document
  .getElementsByClassName("days")[2]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("monday-table")[0]
      .classList.add("nevidljivo");
    document
      .getElementsByClassName("tuesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("thursday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("friday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("wednesday-table")[0]
      .classList.add("vidljivo-table");
    document.getElementsByClassName("days")[0].classList.remove("active");
    document.getElementsByClassName("days")[1].classList.remove("active");
    document.getElementsByClassName("days")[2].classList.add("active");
    document.getElementsByClassName("days")[3].classList.remove("active");
    document.getElementsByClassName("days")[4].classList.remove("active");
  });
document
  .getElementsByClassName("days")[3]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("monday-table")[0]
      .classList.add("nevidljivo");
    document
      .getElementsByClassName("tuesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("wednesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("friday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("thursday-table")[0]
      .classList.add("vidljivo-table");
    document.getElementsByClassName("days")[0].classList.remove("active");
    document.getElementsByClassName("days")[1].classList.remove("active");
    document.getElementsByClassName("days")[2].classList.remove("active");
    document.getElementsByClassName("days")[3].classList.add("active");
    document.getElementsByClassName("days")[4].classList.remove("active");
  });
document
  .getElementsByClassName("days")[4]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("monday-table")[0]
      .classList.add("nevidljivo");
    document
      .getElementsByClassName("tuesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("wednesday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("thursday-table")[0]
      .classList.remove("vidljivo-table");
    document
      .getElementsByClassName("friday-table")[0]
      .classList.add("vidljivo-table");
    document.getElementsByClassName("days")[0].classList.remove("active");
    document.getElementsByClassName("days")[1].classList.remove("active");
    document.getElementsByClassName("days")[2].classList.remove("active");
    document.getElementsByClassName("days")[3].classList.remove("active");
    document.getElementsByClassName("days")[4].classList.add("active");
  });
