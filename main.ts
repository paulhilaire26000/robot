mecanumRobotV2.initializeRobot()
led.enable(false)
let strip = mecanumRobotV2.createLedStrip()
let vitesse = 50
mecanumRobotV2.state()
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    if (irRemote.isIrButtonPressed(IrButton.Ok)) {
        mecanumRobotV2.state()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    if (irRemote.isIrButtonPressed(IrButton.Up)) {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, vitesse)
    }
    if (irRemote.isIrButtonPressed(IrButton.Down)) {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, vitesse)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
    }
    if (irRemote.isIrButtonPressed(IrButton.Left)) {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, vitesse)
    }
    if (irRemote.isIrButtonPressed(IrButton.Right)) {
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, vitesse)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, vitesse)
    }
    if (irRemote.isIrButtonPressed(IrButton.Star)) {
        vitesse += -5
    }
    if (irRemote.isIrButtonPressed(IrButton.Hash)) {
        vitesse += 5
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_1)) {
        vitesse = 20
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_2)) {
        vitesse = 30
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_3)) {
        vitesse = 40
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_4)) {
        vitesse = 50
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_5)) {
        vitesse = 60
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_6)) {
        vitesse = 70
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_7)) {
        vitesse = 80
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_8)) {
        vitesse = 90
    }
    if (irRemote.isIrButtonPressed(IrButton.Number_9)) {
        vitesse = 100
    }
})
