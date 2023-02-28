import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
kaboom();
// kaboom({
//     // Initialize the game
//     global: true,
//     fullscreen: true,
//     scale: 1,
//     background: [68, 118, 207],
//     // canvas: document.querySelector("#background")
//   });
//   loadSprite("background", "pixil-frame-0-2.png");
//   add([
//     sprite("background"),
//     pos(1, 0),
//     pos(width() / 2, height() / 2),
//     origin("center"),
//     scale(0.4999, 0.4),
  
//     layer("background")
//   ]);
// const backround = document.querySelector("body")
// console.log(backround)
// kaboom({
//   // canvas: backround

// });

loadSprite("fishingScreen", "fishingScreen.png")


scene("start", () => {
  const bg = add([
    sprite("fishingScreen", {
      width: width(),
      height: height(),
    }),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    fixed()
  ])
  // width() / 2, height() / 2

  const startText = add([text("Start Game"), pos(center()),scale(.75,.75), origin("center"), area()]);
  startText.onClick(() => go("game"))
  const howTo = add([text("How to Play"), pos(width() / 2, height() / 1.5),scale(.75,.75), origin("center"), area()]);
  howTo.onClick(() => go("instructionPage"))
  // bg.scaleTo(Math.max(width(), height()))
})



scene("instructionPage", () => {
  const bg = add([
    sprite("fishingScreen", {
      width: width(),
      height: height()
    }),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    fixed()
  ])
  const heloo = add([text("Figure it out"), pos(width() / 2, height() / 2),scale(.75,.75), origin("center"), area()]);
  const closed = add([text("Close page"), pos(width() / 2, height() / 1.5),scale(.75,.75), origin("center"), area()]);
  closed.onClick(() => go("gameEnd"))
})



scene("game", () => {
  const bg = add([
    sprite("fishingScreen", {
      width: width(),
      height: height()
    }),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    fixed()
  ])
  //where mathew's code is

  
})



scene("gameEnd", () => {
  const bg = add([
    sprite("fishingScreen", {
      width: width(),
      height: height()
    }),
    pos(width() / 2, height() / 2),
    origin("center"),
    scale(1),
    fixed()
  ])

  // userScore()
  // highScore()
  const restart = add([text("Click here to restart"), pos(width() / 2, height() / 1.5),scale(.75,.75), origin("center"), area()]);
  restart.onClick(() => go("start"))
})


go("start");


// kaboom(
//     // global: true,
//     // canvas: document.querySelector("#background")
// );



// const startBtn = document.getElementById("header")
// const howToBtn = document.getElementById("instructions")

// startBtn.addEventListener('click', e => {kaboom() 

    
// })


// function gameStart() {

//     startBtn.addEventListener("click", e => {
//         startBtn.innerHTML = ""
//         howToBtn.innerHTML = ""
//         // or remove elements entirely
//         // startBtn.remove()
//         // howToBtn.remove()

//         //start timer for game
//         // timer()

//     })

// }



//when timer hits 0, call restartBtn()
// function restartBtn() {
//     document.getElementById("overlay").style.display = "block";
//     const restart = document.getElementById("btn")

//     restart.addEventListener("click", e => {
//         document.getElementById("overlay").style.display = "none";
//         console.log("click")


//         //reset score to 0

//         // restart timer
//         // timer()

//     })
// }


// function howTO(){
//     howToBtn.addEventListener("click", => {
        
//     })
// }

// gameStart()


    // wait(3, () => {
    //   console.log("hello")
    // })



// restartBtn()
