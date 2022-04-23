const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024 * 1.5
canvas.height = 576 * 1.5

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './Game Assets/background.png',
    scale: 1.5
})

const shop = new Sprite({
    position: {
        x: 950,
        y: 177  
    },
    imageSrc: './Game Assets/shop.png',
    scale: 4.25,
    framesMax: 6
})
const player = new Fighter({

    // stats
    health: 1100,
    atk: 40,
    def: 90,
    baseHP: 1100,

    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './Game Assets/Warrior/Idle.png',
    framesMax: 10,
    scale: 4.75,
    offset: {
        // x: 200,
        // y: 157
        x: 340,
        y: 110
    },
    sprites: {
        idle: {
            imageSrc: './Game Assets/Warrior/Idle.png',
            framesMax: 10
        },
        run: {
            imageSrc: './Game Assets/Warrior/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './Game Assets/Warrior/Jump.png',
            framesMax: 3
        },
        fall: {
            imageSrc: './Game Assets/Warrior/Fall.png',
            framesMax: 3
        },
        attack1: {
            imageSrc: './Game Assets/Warrior/Attack3.png',
            framesMax: 8
        },
        attack2: {
            imageSrc: './Game Assets/Warrior/Attack2.png',
            framesMax: 7
        },
        takeHit: {
            imageSrc: './Game Assets/Warrior/Take Hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './Game Assets/Warrior/Death.png',
            framesMax: 7
        }
    },
    // set for attack range
    attackBox: {
        offset: {
            x: 150,
            y: 70
        },
        width: 210,
        height: 300
    }
})

player.draw()

const enemy = new Fighter({

    // stats
    health: 1000,
    atk: 50,
    def: 70,
    baseHP: 1000,

    position: {
        x: canvas.width-140,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: -50,
        y: 0
    },
    imageSrc: './Game Assets/Wizard/Idle.png',
    framesMax: 8,
    scale: 3.75,
    offset: {
        x: 400,
        y: 250
    },
    sprites: {
        idle: {
            imageSrc: './Game Assets/Wizard/Idle.png',
            framesMax: 8
        },
        run: {
            imageSrc: './Game Assets/Wizard/Run.png',
            framesMax: 8
        },
        jump: {
            imageSrc: './Game Assets/Wizard/Jump.png',
            framesMax: 2
        },
        fall: {
            imageSrc: './Game Assets/Wizard/Fall.png',
            framesMax: 2
        },
        attack1: {
            imageSrc: './Game Assets/Wizard/Attack1.png',
            framesMax: 8
        },
        attack2: {
            imageSrc: './Game Assets/Wizard/Attack2.png',
            framesMax: 8
        },
        takeHit: {
            imageSrc: './Game Assets/Wizard/Take hit.png',
            framesMax: 3
        },
        death: {
            imageSrc: './Game Assets/Wizard/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -330,
            y: 50
        },
        width: 300,
        height: 150
    }
})

enemy.draw()

console.log(player)

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }

}

decreaseTimer()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    shop.update()
    c.fillStyle = "rgba(255, 255, 255, 0.15)"
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()

    // this is for player movement
    player.velocity.x = 0
    if (keys.a.pressed && player.lastKey === 'a') {
        if (player.position.x >= -150){
            player.velocity.x = -5
            player.switchSprite('run')
        } else {
            player.switchSprite('run')
        }
    } else if (keys.d.pressed && player.lastKey === 'd') {
        if (player.position.x <= canvas.width - 250){
            player.velocity.x = 5
            player.switchSprite('run')
        } else {
            player.switchSprite('run')
        }
    } else {
        player.switchSprite('idle')
    }

    // jumping
    if (player.position.y > 0){
        if (player.velocity.y < 0){
            player.switchSprite('jump')
        } else if (player.velocity.y > 0){
            player.switchSprite('fall')
        }
    } else player.velocity.y = 1

    // this is for enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        if (enemy.position.x >= -150 ){
            enemy.velocity.x = -5
            enemy.switchSprite('run')
        } else {
            enemy.switchSprite('run')
        }
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        if (enemy.position.x <= canvas.width - 250){
            enemy.velocity.x = 5
            enemy.switchSprite('run')
        } else {
            enemy.switchSprite('run')
        }
    } else {
        enemy.switchSprite('idle')
    }

    // jumping
    if (enemy.position.y > 0){
        if (enemy.velocity.y < 0) {
            enemy.switchSprite('jump')
        } else if (enemy.velocity.y > 0) {
            enemy.switchSprite('fall')
        }
    } else enemy.velocity.y = 1

    // detect for collision and when enemy gets hit
    if (
        rectangularCollision({
            rectangle1: player,
            rectangle2: enemy
        })
        && player.isAttacking && player.framesCurrent === 4
    ) {
        enemy.takeHit(player.atk)
        player.isAttacking = false
        // document.querySelector('#enemyHealth').style.width = enemy.health + '%'
        gsap.to('#enemyHealth', {
            width: Math.round(enemy.health / enemy.baseHP * 100)  + '%'
        })
    }

    // if no longer attack or miss
    if (player.isAttacking && player.framesCurrent === 4){
        player.isAttacking = false
    }

    // detect for collision and when player gets hit
    if (
        rectangularCollision({
            rectangle1: enemy,
            rectangle2: player
        })
        && enemy.isAttacking && enemy.framesCurrent === 2
    ) {
        player.takeHit(enemy.atk)
        console.log(player.health)
        enemy.isAttacking = false
        // document.querySelector('#playerHealth').style.width = player.health + '%'
        gsap.to('#playerHealth', {
            width: Math.round(player.health / player.baseHP * 100) + '%'
        })
    }

    // if no longer attack or miss
    if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false
    }

    // end game based on health
    if (enemy.health <= 0 || player.health <= 0){
        determineWinner({player, enemy, timerId})
    }
}

animate()

window.addEventListener('keydown', (event) => {
    if (!player.dead){
        switch (event.key) {
            // player keys
            case 'd':
                keys.d.pressed = true
                player.lastKey = 'd'
                break
            case 'a':
                keys.a.pressed = true
                player.lastKey = 'a'
                break
            case 'w':
                player.velocity.y = -20
                break
            case 'q':
                player.attack1()
                break
            case 'e':
                player.attack2()
                break
        }
    }
    
    if (!enemy.dead){
        switch (event.key) {
            // enemy keys
            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                enemy.lastKey = 'ArrowRight'
                break
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                enemy.lastKey = 'ArrowLeft'
                break
            case 'ArrowUp':
                enemy.velocity.y = -20
                break
            case 'ArrowDown':
                enemy.attack1()
                break
            case '/':
                enemy.attack2()
                break
        }
    }
     console.log(event.key)
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        //player keys
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break

    }
    switch (event.key) {
        //enemy keys
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break

    }
    console.log(event.key)
})