function lt (degrees: number) {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    timeToWait = degrees * MICROSECINASEC / DEGREESPERSECLT
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.clearScreen()
}
// pins.servoWritePin(AnalogPin.P2, 90)
function stop () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    pause(1000)
    for (let index = 0; index < 4; index++) {
        fd(100)
        pause(1000)
        lt(90)
        pause(1000)
    }
})
function rt (degrees: number) {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    timeToWait2 = degrees * MICROSECINASEC / DEGREESPERSECRT
    pins.servoWritePin(AnalogPin.P1, 135)
    pins.servoWritePin(AnalogPin.P2, 135)
    control.waitMicros(timeToWait2)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.clearScreen()
}
function bd (distance: number) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    timeToWait4 = distance * MICROSECINASEC / DISTANCEPERSEC
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    control.waitMicros(timeToWait4)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.clearScreen()
}
function fd (distance: number) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    timeToWait3 = distance * MICROSECINASEC / DISTANCEPERSEC
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(timeToWait3)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    pause(1000)
    rt(90)
})
let timeToWait3 = 0
let timeToWait4 = 0
let timeToWait2 = 0
let timeToWait = 0
let DEGREESPERSECRT = 0
let DEGREESPERSECLT = 0
let DISTANCEPERSEC = 0
let MICROSECINASEC = 0
MICROSECINASEC = 1000000
DISTANCEPERSEC = 100
DEGREESPERSECRT = 250
DEGREESPERSECLT = 270
stop()
basic.showIcon(IconNames.Happy)

