function ルーレット () {
    if (animeno == 1) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 2) {
        basic.showLeds(`
            . # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 3) {
        basic.showLeds(`
            . . # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 4) {
        basic.showLeds(`
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 6) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 7) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            `)
        animeno += 1
    } else if (animeno == 9) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
        animeno += 1
    } else if (animeno == 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # # .
            `)
        animeno += 1
    } else if (animeno == 11) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            `)
        animeno += 1
    } else if (animeno == 12) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
        animeno += 1
    } else if (animeno == 13) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
        animeno += 1
    } else if (animeno == 14) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 15) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        animeno += 1
    } else if (animeno == 16) {
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        animeno = 1
    }
}
input.onButtonPressed(Button.A, function () {
    animeno = 0
    B_flug = true
    ジャンケン = randint(0, 5)
    if (ジャンケン == random) {
        basic.showNumber(ジャンケン)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(3000)
    } else {
        basic.showNumber(ジャンケン)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(3000)
    }
    animeno = 1
    B_flug = false
})
input.onButtonPressed(Button.B, function () {
    animeno = 0
    B_flug = true
    if (random == 5) {
        random = 0
    } else {
        random += 1
    }
    basic.showNumber(random)
    basic.pause(3000)
    B_flug = false
})
let ジャンケン = 0
let random = 0
let animeno = 0
let B_flug = false
B_flug = false
animeno = 1
random = 3
basic.forever(function () {
    while (B_flug == false) {
        ルーレット()
    }
})
