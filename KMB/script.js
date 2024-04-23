const routeUrl = "https://data.etabus.gov.hk/v1/transport/kmb/route/";
const stopUrl = "https://data.etabus.gov.hk/v1/transport/kmb/stop/";
const routeStopUrl = "https://data.etabus.gov.hk/v1/transport/kmb/route-stop/";
const arriveUrl = "https://data.etabus.gov.hk/v1/transport/kmb/route-eta/";

let btn = document.querySelector("button");
let input = document.querySelector("input");
let directCtner = document.querySelector(".directCtner");
let stopCtner = document.querySelector(".stopCtner");
let loading = document.querySelector(".loading");

let show = {};

document.addEventListener("DOMContentLoaded", function () {
  btn.addEventListener("click", function () {
    userInput();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      userInput();
    }
  });

  let userInput = () => {
    let userInput = document.querySelector("input").value;
    userInput = userInput.toUpperCase().replace(/[^A-Za-z0-9]/g, "");
    directCtner.innerHTML = "";
    stopCtner.innerHTML = "";
    kmbRoute(userInput);
  };

  let kmbRoute = async (input) => {
    try {
      const response = await fetch(routeUrl);
      const result = await response.json();
      let info = result.data;
      if (input === "") {
        directCtner.textContent = "請輸入路線";
      } else if (!info) {
        directCtner.textContent = "九巴暫未提供數據";
      } else if (info) {
        for (let i = 0; i < info.length; i++) {
          if (info[i].route === input) {
            let directDiv = document.createElement("div");
            directDiv.setAttribute("class", "directBtn");
            directDiv.setAttribute("route", info[i].route);
            directDiv.setAttribute("bound", info[i].bound);
            directDiv.setAttribute("serviceType", info[i].service_type);
            directDiv.textContent = `➡️${info[i].dest_tc}`;
            directCtner.appendChild(directDiv);
          }
        }
        let directBtns = document.querySelectorAll(".directBtn");
        let directBtn = document.querySelector(".directBtn");
        if (!directBtn) {
          directCtner.textContent = "沒有此巴士線，請重新輸入";
        }
        for (let i = 0; i < directBtns.length; i++) {
          directBtns[i].addEventListener("click", function (e) {
            for (let i = 0; i < directBtns.length; i++) {
              directBtns[i].style.backgroundColor = "#ffffff";
            }
            e.target.style.backgroundColor = "#e8f3ff";
            showLoading();
            routeN = directBtns[i].getAttribute("route");
            boundN = directBtns[i].getAttribute("bound");
            serviceType = directBtns[i].getAttribute("serviceType");
            kmbStop(routeN, boundN, serviceType);
          });
        }
      }
    } catch (err) {
      console.log("kmbRoute fetch error");
    }
  };

  let kmbStop = async (routeN, boundN, serviceType) => {
    try {
      const response = await fetch(routeStopUrl);
      const result = await response.json();
      let info = result.data;
      let stopArr = [];
      for (let i = 0; i < info.length; i++) {
        if (
          info[i].route === routeN &&
          info[i].bound === boundN &&
          info[i].service_type === serviceType
        ) {
          stopArr.push(info[i].stop);
        }
      }
      kmbRouteStop(stopArr, routeN, boundN, serviceType);
    } catch (err) {
      console.log("kmbStop fetch error");
    }
  };

  let kmbRouteStop = async (stopArr, routeN, boundN, serviceType) => {
    try {
      const response = await fetch(stopUrl);
      const result = await response.json();
      let info = result.data;
      stopCtner.innerHTML = "";
      for (let i = 0; i < stopArr.length; i++) {
        for (let j = 0; j < info.length; j++) {
          if (stopArr[i] === info[j].stop) {
            let stopDiv = document.createElement("div");
            stopDiv.setAttribute("class", "stopDiv");
            stopDiv.textContent = `${i + 1}.${info[j].name_tc}🔽`;
            stopCtner.appendChild(stopDiv);
            stopDiv.addEventListener("click", function () {
              let index = Array.from(stopDiv.parentNode.children).indexOf(
                stopDiv
              );
              if (show[index]) {
                hideTimeDiv(stopDiv);
              } else {
                showTimeDiv(stopDiv);
              }
            });

            let arrivalTimeDiv = document.createElement("div");
            arrivalTimeDiv.setAttribute("class", "arrivalTime");
            stopCtner.appendChild(arrivalTimeDiv);
            await arrivalTime(i, routeN, boundN, serviceType, arrivalTimeDiv);
          }
        }
      }
    } catch (err) {
      console.log("kmbRouteStop fetch error");
    }
  };

  let arrivalTime = async (i, routeN, boundN, serviceType, arrivalTimeDiv) => {
    try {
      const response = await fetch(`${arriveUrl}${routeN}/${serviceType}`);
      const result = await response.json();
      const info = result.data;
      for (let k = 0; k < info.length; k++) {
        if (info[k].dir === boundN && info[k].seq == i + 1) {
          if (info[k].eta == null) {
            let timeCtner = document.createElement("div");
            timeCtner.setAttribute("class", "timeCtner");
            arrivalTimeDiv.appendChild(timeCtner);

            let timeDiv = document.createElement("div");
            timeDiv.textContent = "暫無班次時間";
            timeDiv.setAttribute("class", "timeDiv");
            timeCtner.appendChild(timeDiv);
          } else {
            let eta = new Date(info[k].eta).getTime();
            let timestamp = new Date(info[k].data_timestamp).getTime();
            let timeDiff = Math.abs(eta - timestamp) / 1000 / 60;

            let timeCtner = document.createElement("div");
            timeCtner.setAttribute("class", "timeCtner");
            arrivalTimeDiv.appendChild(timeCtner);

            let timeDiv = document.createElement("div");
            timeDiv.textContent = `-${Math.floor(timeDiff)}分鐘`;
            timeDiv.setAttribute("class", "timeDiv");
            timeCtner.appendChild(timeDiv);

            let remarkDiv = document.createElement("div");
            remarkDiv.setAttribute("class", "remarkDiv");
            remarkDiv.textContent = info[k].rmk_tc;
            timeCtner.appendChild(remarkDiv);
          }
        }
      }
      hideLoading();
    } catch (err) {
      console.log("arrivalTime fetch error");
    }
  };
});

function showLoading() {
  loading.style.display = "block";
}

function hideLoading() {
  loading.style.display = "none";
}

function showTimeDiv(stopDiv) {
  let index = Array.from(stopDiv.parentNode.children).indexOf(stopDiv);
  show[index] = true;
  let arrivalTimeDiv = stopDiv.nextElementSibling;
  arrivalTimeDiv.style.display = "flex";
}

function hideTimeDiv(stopDiv) {
  let index = Array.from(stopDiv.parentNode.children).indexOf(stopDiv);
  show[index] = false;
  let arrivalTimeDiv = stopDiv.nextElementSibling;
  arrivalTimeDiv.style.display = "none";
}

function clicked(button) {
  button.style.backgroundColor = "c3defa";
}
