basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Skull)
        basic.pause(100)
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
    }
})
