function lt (degrees: number) {
    timeToWait = degrees * MICROSECINASEC / DEGREESPERSEC
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fd(100)
        lt(90)
    }
})
function rt (degrees: number) {
    timeToWait2 = degrees * MICROSECINASEC / DEGREESPERSEC
    pins.servoWritePin(AnalogPin.P1, 135)
    pins.servoWritePin(AnalogPin.P2, 135)
    control.waitMicros(timeToWait2)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
function bd (distance: number) {
    timeToWait4 = distance * MICROSECINASEC / DISTANCEPERSEC
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
    control.waitMicros(timeToWait4)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
function fd (distance: number) {
    timeToWait3 = distance * MICROSECINASEC / DISTANCEPERSEC
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(timeToWait3)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.B, function () {
    bd(100)
})
function reset () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
let timeToWait3 = 0
let timeToWait4 = 0
let timeToWait2 = 0
let timeToWait = 0
let DEGREESPERSEC = 0
let DISTANCEPERSEC = 0
let MICROSECINASEC = 0
MICROSECINASEC = 1000000
DISTANCEPERSEC = 100
DEGREESPERSEC = 200
reset()
