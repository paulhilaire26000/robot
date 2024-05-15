def on_sound_quiet():
    music.play(music.string_playable("C C C C C C C C ", 120),
        music.PlaybackMode.UNTIL_DONE)
input.on_sound(DetectedSound.QUIET, on_sound_quiet)

mecanumRobotV2.initialize_robot()
vitesse = 50
mecanumRobotV2.state()
music.play(music.string_playable("C5 B A G F E D C ", 120),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    global vitesse
    if irRemote.is_ir_button_pressed(IrButton.OK):
        mecanumRobotV2.state()
    if irRemote.is_ir_button_pressed(IrButton.UP):
        mecanumRobotV2.motor(LR.UPPER_LEFT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.LOWER_LEFT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.FORWARD, vitesse)
    if irRemote.is_ir_button_pressed(IrButton.DOWN):
        mecanumRobotV2.motor(LR.UPPER_LEFT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.LOWER_LEFT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.BACK, vitesse)
    if irRemote.is_ir_button_pressed(IrButton.LEFT):
        mecanumRobotV2.motor(LR.UPPER_LEFT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.LOWER_LEFT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.BACK, vitesse)
    if irRemote.is_ir_button_pressed(IrButton.RIGHT):
        mecanumRobotV2.motor(LR.UPPER_LEFT, MD.FORWARD, vitesse)
        mecanumRobotV2.motor(LR.LOWER_LEFT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.UPPER_RIGHT, MD.BACK, vitesse)
        mecanumRobotV2.motor(LR.LOWER_RIGHT, MD.FORWARD, vitesse)
    if irRemote.is_ir_button_pressed(IrButton.STAR):
        vitesse += -5
    if irRemote.is_ir_button_pressed(IrButton.HASH):
        vitesse += 5
basic.forever(on_forever)
