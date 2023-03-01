import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

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

kaboom();

loadSprite("fishingScreen", "fishingScreen.png")
loadSprite("fish", "./sprites/fish.png");
loadSprite("fishOne", "./sprites/fish.png");
loadSprite("fishTwo", "./sprites/fish.png");
loadSprite("fishThree", "./sprites/fish.png");
loadSprite("boat", "./sprites/boat.png");
loadSprite("hook", "./sprites/hook.png");
loadSprite("shark", "./sprites/shark.png")


//HS vars

//usernames correlate with the index of highscores; 

let currentUser = '';
const userNames = ["King Julien","Gonzalo","Laura","Luna","Itzel"]
const userHighScores = [10000,9000,8000,2000,1000]


//getting username 
function newName(winnerName){
  let input = prompt("Please enter your name:", "");
  if (input == null || input == "") {
    newName(winnerName)
  } else {
    currentUser = input;
  }
}
newName()

//CHECKING HS
function nameInsert(index){
  userNames.splice(index,0,currentUser);
  userNames.pop();
}

function hsCheck(cs){
  console.log('barrel')
  for(let i = 0; i < userHighScores.length; i++){
    console.log(i)
    if(cs > userHighScores[i]){
      userHighScores.splice(i,0,cs);
      userHighScores.pop();
      nameInsert(i)
      return true
    }
  }
  return false
}

let currentScore = 0;

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
})

//INSTRUCTIONS

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
  const yeloo = add([text("Spacebar to drop hook"), pos(width() / 2, height() / 2.4),scale(.75,.75), origin("center"), area()]);
  const heloo = add([text("Arrow keys to move"), pos(width() / 2, height() / 2),scale(.75,.75), origin("center"), area()]);
  const closed = add([text("Close Page"), pos(width() / 2, height() / 1.5),scale(.75,.75), origin("center"), area()]);
  closed.onClick(() => go("start"))
})

// GAMEPLAY 

scene("game", () => {
  currentScore = 0;
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
  const boat = add([
    sprite("boat"),
    pos(width() / 2, height() / 2),
    origin("center"),
    pos(center()),
    scale(0.3, 0.3),
    action("boat"),
  ]);
  
     
  const SPEED = 350;
  const speedOne = 100;
  
   //LEFT

   loop(rand(2.5, 5), () => {
    add([sprite("fishOne"), scale(0.2, 0.2), area() ,pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
      onUpdate("fishOne", (fOne) => {
      //   fOne.move(100, 0);
      });
    add([sprite("fishOne"), scale(0.2, 0.2), area() ,pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
    onUpdate("fishOne", (fOne) => {
    //   fOne.move(100, 0);
    });
  });
  loop(rand(2.5, 5), () => {
    add([sprite("fishTwo"), scale(0.2, 0.2), area(), pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
      onUpdate("fishTwo", (fTwo) => {
      //   fTwo.move(70, 0);
      });
    add([sprite("fishTwo"), scale(0.2, 0.2), area(), pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
    onUpdate("fishTwo", (fTwo) => {
    //   fTwo.move(70, 0);
    });
  });
  loop(rand(1.5, 3), () => {
    add([sprite("fishThree"), scale(0.2, 0.2), area() ,pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
      onUpdate("fishThree", (fThree) => {
      //   fThree.move(0, 0);
      });
    add([sprite("fishThree"), scale(0.2, 0.2), area() ,pos(0, rand(boat.pos.y + 100, height() - 10)), "fish"]),
    onUpdate("fishThree", (fThree) => {
    //   fThree.move(0, 0);
    });
  });

  let random = rand(150,500)
  onUpdate("fish", (fish) => {
    fish.move(300, 0);
    if (fish.pos.x > width()) {
      destroy(fish);
      console.log(1)
    }
  });
    // Shark sprite spawn
    loop(rand(5, 10), () => {
      add([
        sprite("shark"),
        scale(0.3, 0.3),
        area(),
        pos(0, rand(boat.pos.y + 100, height() - 10)),
        "shark",
      ]),
        onUpdate("shark", (fThree) => {
          //   fThree.move(0, 0);
        });
    });
    let ranShark = rand(150, 500);
    onUpdate("shark", (fish) => {
      fish.move(800, 0);
      fish.flipX(true);
      if (fish.pos.x > width()) {
        destroy(fish);
        console.log(1);
      }
    });
  
  onKeyDown("left", () => {
    boat.angle = 6;
    boat.flipX(true);
    if (boat.pos.x > 0 + 100) {
      boat.move(-SPEED, 0);
    }
  });

  onKeyDown("right", () => {
    boat.angle = -6
	  boat.flipX(false)
    if (boat.pos.x < width() - 100) {
      boat.move(SPEED, 0);
  }
  });
  onKeyRelease(["left","right"], ()=>{
    boat.angle = 0
  });

  let hookStatus = false
  const BULLET_SPEED = 300 
  function spawnHook(p) {
    if(!hookStatus){
      hookStatus = true
      wait(0.2 , () => {
        const hook = add([
          sprite("hook"),,
          pos(p),
          area(),
          scale(0.1),
          origin('bot'),
          color(0, 0, 0),
          outline(4),
          move(DOWN, BULLET_SPEED),
          // strings here means a tag
          "hookdeploy",
        ])
        hook.onCollide("fish", (fish) => {
          destroy(fish)
          destroy(hook)
          
          hookStatus = false
          currentScore += 100
        })
        hook.onCollide("shark", (shark) => {
          destroy(shark)
          destroy(hook)
          
          hookStatus = false
          currentScore += 500
        })
        hook.onUpdate(() => {
          if(hook.pos.y > height()){
            destroy(hook)
            hookStatus = false;
          }
        })
      }) 
    }
  }
  
  onKeyPress("space", () => {
    spawnHook(boat.pos.sub(0, -100))
  })

  //TIMER & SCORE

  const score = add([
		text(0),
		pos(width() - 100, 80),
    origin("center"),
		fixed(),
	])
  
  const timer = add([
		text(0),
		pos(width()/2, 80),
    origin("center"),
		fixed(),
		{ time: 45, },
	])
  timer.onUpdate(() => {
    score.text = currentScore

		timer.time -= dt()
    if(timer.time > 10){
      timer.text = timer.time.toFixed(0)
    }else {
      timer.text = timer.time.toFixed(2)
    }
    if(timer.time < 0){
      hsCheck(currentScore)
      go("gameEnd");
      console.log(currentScore)
    }
	})
  



   
})


// END GAME

scene("gameEnd", () => {
  console.log(userNames)
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
const restart = add([text("Click here or R to restart"), pos(width() / 2, height() / 1.5),scale(.75,.75), origin("center"), area()]);
restart.onClick(() => go("start"))
onKeyPress("r", () => {
  go("start")
})
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
