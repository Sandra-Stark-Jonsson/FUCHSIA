
//dekladera homeStudents diven
let studentBox = document.querySelector("#homeStudents");
//slupmässig nummer
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//slumpmässig kommentar
function randomComment() {
  let number = randomNumber(0, PROGRAMMES.length);
  let randomProgram = PROGRAMMES[number];
  let programName = randomProgram.name;
  let programId = randomProgram.id;
  //filtrera så att alla kommentarer är för samma program
  let commentProgram = COMMENTS_PROGRAMME.filter((comment) => {
    return comment.programmeID == programId;
  })
  //skapa en headline och appenda
  let headline = document.createElement("h1");
  headline.innerHTML = programName;
  studentBox.append(headline);
  //slumpa fram upp till 5 divar och append
  if (commentProgram.length < 5) {

    for (let i = 0; i < commentProgram.length; i++) {
      let newNumber = randomNumber(0, commentProgram.length);
      let newComment = commentProgram[newNumber];
      let newDiv = document.createElement("div");
      newDiv.classList.add("carousel-cell");
      newDiv.innerHTML = `
    <h1>${newComment.alias}</h1>
    <p>${newComment.text}</p>
    `
      studentBox.append(newDiv);
    }

  } else {
    for (let i = 0; i < 5; i++) {
      let newNumber = randomNumber(0, commentProgram.length);
      let newComment = commentProgram[newNumber];
      let newDiv = document.createElement("div");
      newDiv.classList.add("carousel-cell");
      newDiv.innerHTML = `
      <h1>${newComment.alias}</h1>
      <p>${newComment.text}</p>
      `
      studentBox.append(newDiv);
    }

  }

}

randomComment();
