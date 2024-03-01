
const config = {
  backgroundColor: "",
  pixelColor: "#304600",
  rowCount: 5,
  columnCount: 7,
  letterCount: 12,
  container: document.querySelector(".container"),
};

const letterArray = {
  S: [
    "12",
    "13",
    "14",
    "15",
    "21",
    "31",
    "42",
    "43",
    "44",
    "55",
    "65",
    "71",
    "72",
    "73",
    "74",
  ],
  T: ["11", "12", "14", "15", "23", "33", "43", "53", "63", "73", "83"],
  U: [
    "11",
    "15",
    "21",
    "25",
    "31",
    "35",
    "41",
    "45",
    "51",
    "55",
    "61",
    "65",
    "72",
    "73",
    "74",
  ],
  // D
  D: [
    "11",
    "12",
    "13",
    "14",
    "21",
    "25",
    "31",
    "35",
    "41",
    "45",
    "51",
    "55",
    "61",
    "65",
    "71",
    "72",
    "73",
    "74",
  ],
  // letter I captital array 11 to 75
  I: [
    "11",
    "12",
    "14",
    "15",
    "23",
    "33",
    "43",
    "53",
    "63",
    "71",
    "72",
    "74",
    "75",
  ],
  O: [
    "12",
    "13",
    "14",
    "21",
    "24",
    "25",
    "31",
    "33",
    "35",
    "41",
    "43",
    "45",
    "51",
    "52",
    "55",
    "61",
    "65",
    "72",
    "73",
    "74",
  ],
  B: [
    "11",
    "12",
    "13",
    "14",

    "21",
    "25",

    "31",
    "35",

    "41",
    "42",
    "43",
    "44",
    "45",

    "51",
    "55",
    "61",
    "65",

    "71",
    "72",
    "73",
    "74",
  ],
  Y: ["11", "15", "22", "24", "32", "34", "43", "53", "63", "73"],
  N: [
    "11",
    "15",
    "21",
    "22",
    "25",
    "31",
    "33",
    "35",
    "41",
    "44",
    "45",
    "51",
    "55",
    "61",
    "65",
    "71",
    "75",
  ],
  semiColon: ["24", "54", "63"],
};
const createLetter = (parent: HTMLDivElement, filled: String[], inverse: Boolean = false) => {
  const letterWrapper = document.createElement("div");
  letterWrapper.classList.add("letterWrapper");
  for (let i = 0; i < config.columnCount; i++) {
    const column = document.createElement("div");
    column.classList.add("flex");

    for (let j = 0; j < config.rowCount; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add(`${i + 1}${j + 1}`);
      pixel.classList.add("pixel");
      if (inverse) {
        pixel.style.backgroundColor = config.pixelColor;
      } else {
        pixel.style.backgroundColor = config.backgroundColor;
      }

      column.appendChild(pixel);
      filled.forEach((element) => {
        if (pixel.classList.contains(String(element)))
          if (inverse) {
            pixel.style.backgroundColor = config.backgroundColor;
          } else {
            pixel.style.backgroundColor = config.pixelColor;
          }
        pixel.classList.add("activePixel");
      });
    }
    letterWrapper.appendChild(column);
  }
  parent.appendChild(letterWrapper);
};


const partOne: HTMLDivElement = document.querySelector(".partOne")!;
const partTwo: HTMLDivElement = document.querySelector(".partTwo")!;
const partThree: HTMLDivElement = document.querySelector(".partThree")!;
const partFour: HTMLDivElement = document.querySelector(".partFour")!;

const letterS = createLetter(partOne, letterArray.S);
const letterT = createLetter(partOne, letterArray.T);
const letterU = createLetter(partOne, letterArray.U);
const letterD = createLetter(partTwo, letterArray.D);
const letterI = createLetter(partTwo, letterArray.I);
const letterO = createLetter(partTwo, letterArray.O);

const letterB = createLetter(partThree, letterArray.B);
const letterO2 = createLetter(partThree, letterArray.O);
const letterD2 = createLetter(partThree, letterArray.D);
const letterY = createLetter(partFour, letterArray.Y);
const letterN = createLetter(partFour, letterArray.N);
const semiColon = createLetter(partFour, letterArray.semiColon, true);

document.querySelectorAll(".activePixel").forEach((element: any) => {
  const random = Math.random() * 1;
  element.style.setProperty("--animation-time", `${random}s`);
  // onhover make invisible
  element.addEventListener("mouseover", () => {
    element.style.display = "none";
  });
  // on mouseout make visible
  element.addEventListener("mouseout", () => {
    element.style.display = "block";
  });
});
