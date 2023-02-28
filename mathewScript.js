kaboom({
  // Initialize the game
  global: true,
  fullscreen: true,
  scale: 1,
  background: [68, 118, 207],
});

loadSprite("background", "pixil-frame-0-2.png");
loadSprite("fish", "fish.png");
loadSprite("fishOne", "fish.png");
loadSprite("fishTwo", "fish.png");
loadSprite("fishThree", "fish.png");

add([
  sprite("background"),
  pos(1, 0),
  pos(width() / 2, height() / 2),
  origin("center"),
  scale(0.4999, 0.4),
  layer("background"),
]);

const SPEED = 850;
const speedOne = 100;

const level = {
  width: 54,
  height: 95,
  "=": () => [sprite("fish"), "fish", area(), scale(0.3, 0.29)],
};

loop(rand(15), () => {
  add([sprite("fishOne"), scale(0.3, 0.29), pos(110, 450), "fish"]),
    onUpdate("fishOne", (fOne) => {
      fOne.move(100, 0);
    });
});
loop(rand(10), () => {
  add([sprite("fishTwo"), scale(0.3, 0.29), pos(110, 550), "fish"]),
    onUpdate("fishTwo", (fTwo) => {
      fTwo.move(100, 0);
    });
});
loop(rand(10), () => {
  add([sprite("fishThree"), scale(0.3, 0.29), pos(110, 650), "fish"]),
    onUpdate("fishThree", (fThree) => {
      fThree.move(100, 0);
    });
});
onUpdate("fish", (fish) => {
  fish.move(125, 0);
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
  // .move() is provided by pos() component, move by pixels per second
  if (boat.pos.x > 200) {
    boat.move(-SPEED, 0);
  }
});

onKeyDown("right", () => {
  if (boat.pos.x < 1235) {
    boat.move(SPEED, 0);
  }
});
