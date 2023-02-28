// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context

let timeLeft = 60

kaboom({
	width:1000,
	height:1500
})



// Load assets
loadSprite("boat", "./game-assets/boat.png")
loadSprite("hook", "./game-assets/hook.png")
loadSprite("fish", "./game-assets/fishtest.png")
// Define player movement speed (pixels per second)
const SPEED = 500
const  BULLET_SPEED = 300 

const player = add([
	sprite("boat"),
	pos(400, 300),
    scale(0.4),
	solid(),
	area()
])
const fish = add([
	sprite("fish"),
	pos(400, 800),
    scale(0.4),
	solid(),
	area(),
	"fish"
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


let userScore = 0
add([
	// text() component is similar to sprite() but renders text
	text(`Score: ${userScore}`),
	pos(12, 12),
	{ update() {this.text = `Score: ${userScore}`}}
])
const timer = add([
	// text() component is similar to sprite() but renders text
	text(`Time: ${timeLeft}`, { width: width() / 2 }),
	pos(500, 12),
	{userTimer: 45 }
])
timer.onUpdate(() => {
	if(timer.userTimer > 0){
		timer.userTimer -= dt()
		timer.text = `Time: ${Math.abs(timer.userTimer.toFixed(2))}`
	}
})


let hookStatus = false

function spawnHook(p) {
	if(!hookStatus){
		hookStatus = true
		const hook = add([
			sprite("hook"),,
			pos(p),
			area(),
			scale(0.2),
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
			userScore += 100
		})
		hook.onUpdate(() => {
			// hook.pos.x = player.pos.x + 100;
			// hook.height += 1
			if(hook.pos.y > height()){
				destroy(hook)
		
				hookStatus = false
			}
			console.log(hook.pos.y)
		})
	}	
}



onKeyPress("space", () => {
	spawnHook(player.pos.sub(-100, -300))
})


debug.inspect = true