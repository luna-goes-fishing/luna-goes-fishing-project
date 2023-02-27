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
const  BULLET_SPEED = 145 

const player = add([
	sprite("boat"),
	pos(400, 300),
    scale(0.4),
	solid(),
	area()
])

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

function spawnHook(p) {
	const hook = add([
		rect(12, 48),,
		pos(p),
		origin('bot'),
		color(0, 0, 0),
		outline(4),
		move(DOWN, BULLET_SPEED),
		// strings here means a tag
		"hook",
	])
	hook.onUpdate(() => {
		hook.pos.x = player.pos.x + 100;
		hook.height += 1
		if(hook.pos.y > height()){
			destroy(hook)
		}
		console.log(hook.pos.y)
	})
	
}

onKeyPress("space", () => {
	spawnHook(player.pos.sub(0, -200))
})


debug.inspect = true