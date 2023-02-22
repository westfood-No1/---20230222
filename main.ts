music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (100 < input.soundLevel()) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (80 < input.soundLevel()) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (60 < input.soundLevel()) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (40 < input.soundLevel()) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # . . . .
            `)
    } else if (20 < input.soundLevel()) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
