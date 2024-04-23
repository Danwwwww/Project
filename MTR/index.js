const line = {
  KTL: {
    text: "觀塘線",
    color: "#7ed957",
    sta: [
      { code: "WHA", name: "Whampoa" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" },
      { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "LOF", name: "Lok Fu" },
      { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "CHH", name: "Choi Hung" },
      { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" },
      { code: "KWT", name: "Kwun Tong" },
      { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
    ],
  },
  ISL: {
    text: "港島線",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town" },
      { code: "HKU", name: "HKU" },
      { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" },
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" },
      { code: "CAB", name: "Causeway Bay" },
      { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" },
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" },
      { code: "SWH", name: "Sai Wan Ho" },
      { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" },
      { code: "CHW", name: "Chai Wan" },
    ],
  },
  TWL: {
    text: "荃灣線",
    color: "#ff3131",
    sta: [
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Price Edward" },
      { code: "SSP", name: "Sham Shui Po" },
      { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" },
      { code: "MEF", name: "Mei Foo" },
      { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" },
      { code: "KWH", name: "Kwai Hing" },
      { code: "TWH", name: "Tai Wo Hau" },
      { code: "TSW", name: "Tsuen Wan" },
    ],
  },
  SIL: {
    text: "南港島線",
    color: "#cbcd09",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "OCP", name: "Ocean Park" },
      { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" },
      { code: "SOH", name: "South Horizons" },
    ],
  },
  TCL: {
    text: "東涌線",
    color: "#f6943d",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "LAK", name: "Lai King" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" },
      { code: "TUC", name: "Tung Chung" },
    ],
  },
  EAL: {
    text: "東鐵線",
    color: "#5ce1e6",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "EXC", name: "Exhibition Centre" },
      { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" },
      { code: "FOT", name: "Fo Tan" },
      { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" },
      { code: "TAP", name: "Tai Po Market" },
      { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" },
      { code: "SHS", name: "Sheung Shui" },
      { code: "LOW", name: "Lo Wu" },
      { code: "LMC", name: "Lok Ma Chau" },
    ],
  },
  TML: {
    text: "屯馬線",
    color: "#8d6019",
    sta: [
      { code: "WKS", name: "Wu Kai Sha" },
      { code: "MOS", name: "Ma On Shan" },
      { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" },
      { code: "SHM", name: "Shek Mun" },
      { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" },
      { code: "CKT", name: "Che Kung Temple" },
      { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" },
      { code: "TKW", name: "To Kwa Wan" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" },
      { code: "ETS", name: "East Tsim Sha Tsui" },
      { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "MEF", name: "Mei Foo" },
      { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" },
      { code: "YUL", name: "Yuen Long" },
      { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" },
      { code: "SIH", name: "Siu Hong" },
      { code: "TUM", name: "Tuen Mun" },
    ],
  },
  AEL: {
    text: "機場快線",
    color: "#3d9ea0",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" },
      { code: "AWE", name: "AsiaWorld Expo" },
    ],
  },
  TKL: {
    text: "將軍澳線",
    color: "#8d45ab",
    sta: [
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
      { code: "TKO", name: "Tseung Kwan O" },
      { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" },
      { code: "POA", name: "Po Lam" },
    ],
  },
};

let containerUp = document.querySelector(".containerUp");
let containerDown = document.querySelector(".containerDown");
let topBar = document.querySelector(".topBar");
let kwunTongBtn = document.querySelector("#KTL");
let hkIslandBtn = document.querySelector("#ISL");
let tsuenWanBtn = document.querySelector("#TWL");
let southIslandBtn = document.querySelector("#SIL");
let tungChungBtn = document.querySelector("#TCL");
let eastRailLineBtn = document.querySelector("#EAL");
let tuenMaBtn = document.querySelector("#TML");
let airportBtn = document.querySelector("#AEL");
let tseungKwanOBtn = document.querySelector("#TKL");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => {
      let color = line[btn.id].color;
      btn.style.backgroundColor = "white";
      btn.style.color = color;
    });
    let color = line[this.id].color;
    this.style.backgroundColor = color;
    this.style.color = "white";
  });
});

kwunTongBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.KTL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("KTL", arr[i].code);
  }
});

hkIslandBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.ISL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("ISL", arr[i].code);
  }
});

tsuenWanBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.TWL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("TWL", arr[i].code);
  }
});

southIslandBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.SIL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("SIL", arr[i].code);
  }
});

tungChungBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.TCL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("TCL", arr[i].code);
  }
});

eastRailLineBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.EAL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("EAL", arr[i].code);
  }
});

tuenMaBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.TML.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("TML", arr[i].code);
  }
});

airportBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.AEL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("AEL", arr[i].code);
  }
});

tseungKwanOBtn.addEventListener("click", function () {
  lastesTime();
  let arr = line.TKL.sta;
  for (let i = 0; i < arr.length; i++) {
    mtrStation("TKL", arr[i].code);
  }
});

let apiFunc = (line, sta) => {
  let url = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${sta}`;
  return url;
};

let nameFunc = (線, code) => {
  for (var i = 0; i < line[線].sta.length; i++) {
    if (line[線].sta[i].code === code) {
      return line[線].sta[i].name;
    }
  }
};

let timeurl =
  "https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=TKL&sta=TKO";

let time = document.querySelector(".time");

const lastesTime = async () => {
  time.innerHTML = "";
  const res = await fetch(timeurl);
  const data = await res.json();

  let updateTimeDiv = document.createElement("div");
  updateTimeDiv.setAttribute("class", "updateTime");
  updateTimeDiv.textContent = `最後更新時間: ${data.curr_time}`;
  time.appendChild(updateTimeDiv);
};

const mtrStation = async (lineN, sta) => {
  containerUp.innerHTML = "";
  containerDown.innerHTML = "";
  try {
    const res = await fetch(apiFunc(lineN, sta));
    const data = await res.json();
    const infoUp = data.data[`${lineN}-${sta}`].UP;
    const infoDown = data.data[`${lineN}-${sta}`].DOWN;
    if (infoUp !== undefined) {
      let stationDiv = document.createElement("div");
      stationDiv.setAttribute("class", "station");
      stationDiv.style.backgroundColor = line[lineN].color;
      containerUp.appendChild(stationDiv);

      let destDiv = document.createElement("div");
      destDiv.setAttribute("class", "destDiv");
      destDiv.textContent = nameFunc(lineN, sta) + "(UP)";
      destDiv.style.color = "white";
      stationDiv.appendChild(destDiv);

      let nextDiv = document.createElement("div");
      nextDiv.setAttribute("class", "nextDiv");
      if (infoUp[0] && infoUp[0].time) {
        nextDiv.textContent = `下班列車: ${infoUp[0].time.slice(11, 16)}`;
      }
      nextDiv.style.color = "white";
      stationDiv.appendChild(nextDiv);

      let platDiv = document.createElement("div");
      platDiv.setAttribute("class", "platDiv");
      if (infoUp[0] && infoUp[0].plat) {
        platDiv.textContent = `開出月台: ${infoUp[0].plat}`;
      } else {
        platDiv.textContent = "沒有提供服務";
      }
      platDiv.style.color = "white";
      stationDiv.appendChild(platDiv);
    }
    if (infoDown !== undefined) {
      let stationDiv = document.createElement("div");
      stationDiv.setAttribute("class", "station");
      stationDiv.style.backgroundColor = line[lineN].color;
      containerDown.appendChild(stationDiv);

      let destDiv = document.createElement("div");
      destDiv.setAttribute("class", "destDiv");
      destDiv.textContent = nameFunc(lineN, sta) + "(DOWN)";
      destDiv.style.color = "white";
      stationDiv.appendChild(destDiv);

      let nextDiv = document.createElement("div");
      nextDiv.setAttribute("class", "nextDiv");
      if (infoDown[0] && infoDown[0].time) {
        nextDiv.textContent = `下班列車: ${infoDown[0].time.slice(11, 16)}`;
      }
      nextDiv.style.color = "white";
      stationDiv.appendChild(nextDiv);

      let platDiv = document.createElement("div");
      platDiv.setAttribute("class", "platDiv ");
      if (infoDown[0] && infoDown[0].plat) {
        platDiv.textContent = `開出月台: ${infoDown[0].plat}`;
      } else {
        platDiv.textContent = "沒有提供服務";
      }
      platDiv.style.color = "white";
      stationDiv.appendChild(platDiv);
    }
  } catch (err) {
    console.log(err);
  }
};
