// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
// import {cake} from "./jaredScript.js"
// initialize kaboom context

kaboom()
// Load assets
loadSprite("boat", "./game-assets/boat.png")

// Define player movement speed (pixels per second)
const SPEED = 320

// Add player game object
const player = add([
	sprite("boat"),
	// center() returns the center point vec2(width() / 2, height() / 2)
	pos(width() / 2, height() / 2),
    scale(0.4)
])

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

onKeyDown("down", () => {
	console.log("hello")
})

// onClick() registers an event that runs once when left mouse is clicked
// onClick(() => {
// 	// .moveTo() is provided by pos() component, changes the position
// 	player.moveTo(mousePos())
// })

add([
	// text() component is similar to sprite() but renders text
	text("Press arrow keys", { width: width() / 2 }),
	pos(12, 12),
])
