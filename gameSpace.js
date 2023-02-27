// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
// import {cake} from "./jaredScript.js"
// initialize kaboom context
let userScore = 0
let timeLeft = 60

kaboom({
	width:1000,
	height:1500
})
// Load assets
loadSprite("boat", "./game-assets/boat.png")

// Define player movement speed (pixels per second)
const SPEED = 500

// Add player game object
const player = add([
	sprite("boat"),
	pos(400, 300),
    scale(0.4),
	solid(),
	area()
])

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	if(player.pos.x > 1){
		player.move(-SPEED, 0);
	}
})

onKeyDown("right", () => {
	if(player.pos.x < 790){
		player.move(SPEED, 0);
	}
})

onKeyDown("down", () => {
	console.log(player.pos.x);
})

player.onUpdate(() => {
	// .isHovering() is provided by area() component, which returns a boolean of if the object is currently being hovered on
	if (player.isHovering()) {
		player.color = rgb(0, 0, 255)
	} else {
		player.color = rgb()
	}
})

add([
	// text() component is similar to sprite() but renders text
	text(`Score: ${userScore}`, { width: width() / 2 }),
	pos(12, 12),
])
const timer = add([
	// text() component is similar to sprite() but renders text
	text(`Time: ${timeLeft}`, { width: width() / 2 }),
	pos(630, 12),
	{userTimer: 45 }
])
timer.onUpdate(() => {
	if(timer.userTimer >= 0){
		timer.userTimer -= dt()
		timer.text = `Time: ${timer.userTimer.toFixed()}`
	}
})
player.onUpdate(() => {
	// .isHovering() is provided by area() component, which returns a boolean of if the object is currently being hovered on
	if (player.isHovering()) {
		player.color = rgb(0, 0, 255)
	} else {
		player.color = rgb()
	}
})
debug.inspect = true