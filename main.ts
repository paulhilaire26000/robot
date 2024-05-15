input.onSound(DetectedSound.Loud, function () {
    music.play(music.stringPlayable("C C C C C C C C ", 120), music.PlaybackMode.UntilDone)
})
mecanumRobotV2.initializeRobot()
let vitesse = 50
mecanumRobotV2.state()
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (irRemote.isIrButtonPressed(IrButton.Ok)) {
        mecanumRobotV2.state()
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
})
