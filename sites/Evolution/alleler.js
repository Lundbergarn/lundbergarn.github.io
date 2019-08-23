(function () {
  let fiftyRandomColors = [];

  const getFiftyRanromColors = document.getElementById("slumpa_50");
  const randomTwoColors = document.getElementById("slumpa_2");

  const redText = document.getElementById("red");
  const blueText = document.getElementById("blue");
  const whiteText = document.getElementById("white");

  const redPair = document.getElementById("redPair");
  const bluePair = document.getElementById("bluePair");

  const colorPairs = document.getElementById('color_pairs');
  const generationsTag = document.getElementById('generations');

  //Get the first 50 colors
  getFiftyRanromColors.addEventListener("click", function () {
    let blue = 0;
    let red = 0;
    let white = 0;
    fiftyRandomColors = getStack(50);

    for (let color of fiftyRandomColors) {
      switch (color) {
        case ('red'):
          red++;
          break;
        case ('blue'):
          blue++;
          break;
        default:
          white++;
      }
    }

    redText.textContent = red;
    blueText.textContent = blue;
    whiteText.textContent = white;
  });

  let bluePairCount = 0;
  let redPairCount = 0;
  let generationsCounter = 0;


  // Make color pairs
  randomTwoColors.addEventListener("click", function () {
    redPairCount = 0;
    bluePairCount = 0;
    let colorPairList = "";
    let newColorArray = [];
    let newReplacementColors;
    let table = "";
    generationsCounter++;

    for (let i = 1; i <= 25; i++) {
      let firstColor = fiftyRandomColors.splice(0, 1);
      let secondColor = fiftyRandomColors.splice(0, 1);

      // Remove bad allel
      if (firstColor[0] === secondColor[0] && firstColor[0] !== 'white') {
        // skip colors
      } else {
        newColorArray.push(...firstColor);
        newColorArray.push(...secondColor);
      }
      colorPairList += makePair(firstColor, secondColor);
      checkEqualColors(firstColor[0], secondColor[0]);
    }

    table = `<table><tbody>${colorPairList}</tbody></table>`;
    colorPairs.innerHTML += table;

    newReplacementColors = getStack((50 - newColorArray.length));

    newColorArray.push(newReplacementColors);

    fiftyRandomColors = shuffleArray(newColorArray);

    redPair.textContent = redPairCount;
    bluePair.textContent = bluePairCount;
    generationsTag.textContent = `Generationer: ${generationsCounter}`;
  });

  makePair = (a, b) => {
    return `<tr> <td class="${a}"></td> <td class="${b}"></td> </tr>`
  }

  checkEqualColors = (a, b) => {
    if (a === b) {
      if (a === 'red') redPairCount++;
      else if (a === 'blue') bluePairCount++;
    }
  }

  //Radera skadliga alleler ur array
  removeBadColors = (array, element) => {
    const index = array.indexOf(element);

    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  // Create stack with pearls
  getStack = (total) => {
    let stack = [];

    for (let i = 0; i < total; i++) {
      let val = Math.floor(Math.random() * 400);
      switch (true) {
        case (val <= 133):
          stack.push('red');
          break;
        case (val >= 266):
          stack.push('blue');
          break;
        default:
          stack.push('white');
      }
    }
    return stack;
  }

  // Shuffle pearls
  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

}());