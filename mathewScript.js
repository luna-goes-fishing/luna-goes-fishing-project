kaboom({
  // Initialize the game
  global: true,
  fullscreen: true,
  scale: 1,
  background: [68, 118, 207],
});

loadSprite("background", "./sprites/pixil-frame-0-2.png");
loadSprite("fish", "./sprites/fish.png");
loadSprite("fishOne", "./sprites/fish.png");
loadSprite("fishTwo", "./sprites/fish.png");
loadSprite("fishThree", "./sprites/fish.png");

add([
  sprite("background"),
  pos(1, 0),
  pos(width() / 2, height() / 2),
  origin("center"),
  scale(.5),
  layer("background"),
]);

const SPEED = 350;
const speedOne = 100;

loop(rand(2.5, 8), () => {
  add([sprite("fishOne"), scale(0.3, 0.29), pos(110, 450), "fish"]),
    onUpdate("fishOne", (fOne) => {
    //   fOne.move(100, 0);
    });
});
loop(rand(2.5, 9), () => {
  add([sprite("fishTwo"), scale(0.3, 0.29), pos(110, 550), "fish"]),
    onUpdate("fishTwo", (fTwo) => {
    //   fTwo.move(70, 0);
    });
});
loop(rand(2.5, 10), () => {
  add([sprite("fishThree"), scale(0.3, 0.29), pos(110, 650), "fish"]),
    onUpdate("fishThree", (fThree) => {
    //   fThree.move(0, 0);
    });
});
onUpdate("fish", (fish) => {
  fish.move(150, 0);
  if (fish.pos.x > 1210) {
    destroy(fish);
  }
});

loadSprite("boat", "sprites/boat.png");

const boat = add([
  sprite("boat"),
  pos(width() / 2, height() / 2),
  origin("center"),
  pos(center()),
  scale(0.3, 0.3),
  action("boat"),
]);

onKeyDown("left", () => {
  if (boat.pos.x > 200) {
    boat.move(-SPEED, 0);
  }
});

onKeyDown("right", () => {
  if (boat.pos.x < 1235) {
    boat.move(SPEED, 0);
  }
});
