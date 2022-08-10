let images = document.querySelectorAll(".img-items");
let cpuImages = document.querySelectorAll(".img-cpu-choosed");
const chooseUser = document.getElementById("choose-user");
const chooseCpu = document.getElementById("choose-cpu");
const help = document.getElementById('help')

help.addEventListener('click' , () =>{
  alert('if you hold "R" or "Enter" in your keyboard , game is refreshed')
})


for (let i = 0; i <= images.length - 1; i++) {
  images[i].addEventListener("click", () => {
    hiddenSelect(i);
    randomCpu = Math.floor(Math.random() * 3);
    cpuImages[randomCpu].classList.remove("hidden");
    gameLogic(i, randomCpu);
  });
}

hiddenSelect = (i) => {
  for (let j = 0; j <= images.length - 1; j++) {
    if (j !== i) {
      images[j].classList.add("hidden");
    }
  }
};
let refresh = document.querySelector(".refresh");

const refreshFunc = () => {
  for (let i = 0; i <= images.length - 1; i++) {
    images[i].classList.remove("hidden");
    cpuImages[i].classList.add("hidden");
  }
  chooseUser.innerHTML = "Choose your weapon :";
  chooseCpu.innerHTML = "cpu choosed :";
};
refresh.addEventListener("click", refreshFunc);
document.addEventListener("keydown", (e) => {
  if (e.key == "r" || e.key == "Enter") {
    refreshFunc();
  }
  console.log(e.key);
});

gameLogic = (user, cpu) => {
  let userPoint = document.querySelector("#user-point");
  let cpuPoint = document.getElementById("cpu-point");
  if (user != cpu) {
    if (user == 0) {
      chooseUser.innerHTML = "you choosed Rock";
      if (cpu == 1) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed paper";
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed Scissors";
      }
    }
    if (user == 1) {
      chooseUser.innerHTML = "you choosed paper";
      if (cpu == 0) {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed Rock";
      } else {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed Scissors";
      }
    }
    if (user == 2) {
      chooseUser.innerHTML = "you choosed Scissors";
      if (cpu == 0) {
        cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed Rock";
      } else {
        userPoint.innerHTML = Number(userPoint.innerHTML) + 1;
        chooseCpu.innerHTML = "cpu choosed paper";
      }
    }
  } else if (user == 0 && cpu == 0) {
    chooseUser.innerHTML = "you choosed Rock";
    chooseCpu.innerHTML = "cpu choosed Rock";
  } else if (user == 1 && cpu == 1) {
    chooseUser.innerHTML = "you choosed paper";
    chooseCpu.innerHTML = "cpu choosed paper";
  } else if (user == 2 && cpu == 2) {
    chooseUser.innerHTML = "you choosed Scissors";
    chooseCpu.innerHTML = "cpu choosed Scissors";
  }
  if (userPoint.innerHTML == 5) {
    alert("userPoint is win");
    userPoint.innerHTML = 0;
    cpuPoint.innerHTML = 0;
    refreshFunc()
  } else if (cpuPoint.innerHTML == 5) {
    alert("cpuPoint is win");
    cpuPoint.innerHTML = 0;
    userPoint.innerHTML = 0;
    refreshFunc()
  }
};
