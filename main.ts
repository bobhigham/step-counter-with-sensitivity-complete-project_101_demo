let step = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        step += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        if (step > 30) {
            basic.showNumber(step)
            basic.showString("Great!")
        } else {
            basic.showNumber(step)
            basic.showString("Keep it up!")
        }
    }
})
