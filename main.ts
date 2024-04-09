mecanumRobotV2.initializeRobot()
let vitesse = 100
basic.forever(function () {
    if (irRemote.isIrButtonPressed(IrButton.Ok)) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        basic.showString("j'avence")
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, vitesse)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, vitesse)
        basic.pause(5000)
        mecanumRobotV2.state()
    }
})
