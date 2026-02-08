namespace SpriteKind {
    export const MarioEnemy = SpriteKind.create()
    export const Chaser = SpriteKind.create()
    export const pointer = SpriteKind.create()
    export const HUD = SpriteKind.create()
    export const CoolThingNotReallyNeeded = SpriteKind.create()
    export const CoolThingNotReallyNeededFront = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Chaser, assets.tile`myTile8`, function (sprite, location) {
    if (MarioTouchedFlag == false) {
        ChaserControl = false
        MarioTouchedFlag = true
        tiles.placeOnTile(sprite, location)
        characterAnimations.clearCharacterState(sprite)
        animation.stopAnimation(animation.AnimationTypes.All, sprite)
        animation.runImageAnimation(
        sprite,
        assets.animation`Maaaaaaario Slide`,
        200,
        true
        )
        music.stopAllSounds()
        music.play(music.createSong(assets.song`Mario Finished`), music.PlaybackMode.InBackground)
        sprite.x += -11
        sprite.vx = 0
        sprite.ay = 0
        sprite.vy = 40
        Flag.vy = 40
        timer.background(function () {
            pauseUntil(() => sprite.isHittingTile(CollisionDirection.Bottom))
            Flag.vy = 0
            sprite.vx = 35
            sprite.ay = 300
            characterAnimations.clearCharacterState(sprite)
            animation.stopAnimation(animation.AnimationTypes.All, sprite)
            animation.runImageAnimation(
            sprite,
            assets.animation`Maaaaaaario walk right`,
            200,
            true
            )
        })
    }
})
function LevelSetup () {
    scene.centerCameraAt(80, 196)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`lobby0`), music.PlaybackMode.LoopingInBackground)
    if (level == 0) {
        scene.setBackgroundColor(13)
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(StarPlayer, tiles.getTileLocation(4, 13))
        StarPlayer.ay = 300
        Flag = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.CoolThingNotReallyNeeded)
        animation.runImageAnimation(
        Flag,
        assets.animation`Flag`,
        200,
        true
        )
        tiles.placeOnTile(Flag, tiles.getTileLocation(104, 9))
        Flag.x += -10
        Flag.y += 2
        Flag.z = -2
        CastleBack = sprites.create(assets.image`CastleBack`, SpriteKind.CoolThingNotReallyNeeded)
        CastleBack.z = -10
        tiles.placeOnTile(CastleBack, tiles.getTileLocation(108, 14))
        CastleBack.y += -8
        CastleFront = sprites.create(assets.image`CastleFront`, SpriteKind.CoolThingNotReallyNeededFront)
        CastleFront.z = 10
        tiles.placeOnTile(CastleFront, tiles.getTileLocation(108, 14))
        CastleFront.y += -8
        setupAnimations()
    } else if (level == 1) {
        scene.setBackgroundColor(13)
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(StarPlayer, tiles.getTileLocation(4, 13))
        StarPlayer.ay = 300
        Flag = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.CoolThingNotReallyNeeded)
        animation.runImageAnimation(
        Flag,
        assets.animation`Flag`,
        200,
        true
        )
        tiles.placeOnTile(Flag, tiles.getTileLocation(206, 2))
        Flag.x += -10
        Flag.y += 2
        Flag.z = -2
        CastleBack = sprites.create(assets.image`CastleBack`, SpriteKind.CoolThingNotReallyNeeded)
        CastleBack.z = -10
        tiles.placeOnTile(CastleBack, tiles.getTileLocation(217, 9))
        CastleBack.y += -8
        CastleFront = sprites.create(assets.image`CastleFront`, SpriteKind.CoolThingNotReallyNeededFront)
        CastleFront.z = 10
        tiles.placeOnTile(CastleFront, tiles.getTileLocation(217, 9))
        CastleFront.y += -8
        setupAnimations()
    } else if (level == 2) {
        scene.setBackgroundColor(15)
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(StarPlayer, tiles.getTileLocation(4, 13))
        StarPlayer.ay = 300
        Flag = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.CoolThingNotReallyNeeded)
        animation.runImageAnimation(
        Flag,
        assets.animation`Flag`,
        200,
        true
        )
        tiles.placeOnTile(Flag, tiles.getTileLocation(225, 3))
        Flag.x += -10
        Flag.y += 2
        Flag.z = -2
        CastleBack = sprites.create(assets.image`CastleBack`, SpriteKind.CoolThingNotReallyNeeded)
        CastleBack.z = -10
        tiles.placeOnTile(CastleBack, tiles.getTileLocation(232, 13))
        CastleBack.y += -8
        CastleFront = sprites.create(assets.image`CastleFront`, SpriteKind.CoolThingNotReallyNeededFront)
        CastleFront.z = 10
        tiles.placeOnTile(CastleFront, tiles.getTileLocation(232, 13))
        CastleFront.y += -8
        setupAnimations()
    } else {
    	
    }
    Screen = "Title"
}
sprites.onOverlap(SpriteKind.Chaser, SpriteKind.CoolThingNotReallyNeededFront, function (sprite, otherSprite) {
    if (Screen == "Play") {
        Screen = "Results"
        timer.after(1000, function () {
            sprites.destroy(sprite)
            timer.after(1000, function () {
                ShootFireworks()
            })
            timer.after(2000, function () {
                ShootFireworks()
            })
            timer.after(3000, function () {
                ShootFireworks()
            })
            timer.after(4500, function () {
                Results()
            })
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Screen == "Title") {
        Screen = "Play"
        Play()
    }
})
function animatePlayer (Player: Sprite) {
    if (Player.vx > 5) {
        State = "Walk"
        characterAnimations.setCharacterState(Player, characterAnimations.rule(Predicate.MovingRight))
        Direction = 1
    } else if (Player.vx < -5) {
        State = "Walk"
        characterAnimations.setCharacterState(Player, characterAnimations.rule(Predicate.MovingLeft))
        Direction = -1
    } else if (Player.vy != 0) {
        if (Direction == 1) {
            State = "Jump"
            characterAnimations.setCharacterState(Player, characterAnimations.rule(Predicate.MovingRight))
        } else if (Direction == -1) {
            State = "Jump"
            characterAnimations.setCharacterState(Player, characterAnimations.rule(Predicate.MovingLeft))
        }
    } else if (Player.vx < 5 && Player.vx > -5 && Player.vy == 0) {
        characterAnimations.setCharacterState(Player, characterAnimations.rule(Predicate.NotMoving))
    }
    if (Player.x < scene.cameraProperty(CameraProperty.X) - 80) {
        PlayerDeath(Player)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MarioEnemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y - 5 && (sprite.y < otherSprite.y + 3 && sprite.vy != 0)) {
        sprites.destroy(otherSprite)
        sprite.vy = -75
        music.play(music.createSoundEffect(WaveShape.Noise, 584, 599, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
function WipeOutTheWholeSpecies () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Chaser)
    sprites.destroyAllSpritesOfKind(SpriteKind.pointer)
    sprites.destroyAllSpritesOfKind(SpriteKind.CoolThingNotReallyNeeded)
    sprites.destroyAllSpritesOfKind(SpriteKind.CoolThingNotReallyNeededFront)
    sprites.destroyAllSpritesOfKind(SpriteKind.MarioEnemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.HUD)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
}
function Play () {
    music.stopAllSounds()
    OGCharacterAmount = sprites.allOfKind(SpriteKind.Player).length
    DeathSpeedBoost = 25
    if (sprites.allOfKind(SpriteKind.Player).length > 1) {
        DeathSpeedBoost = 30 / (sprites.allOfKind(SpriteKind.Player).length - 1)
    } else if (sprites.allOfKind(SpriteKind.Player).length == 1) {
        MarioSpeed = DeathSpeedBoost
    }
    Title.setStayInScreen(false)
    Title.setFlag(SpriteFlag.AutoDestroy, true)
    for (let MarioSpawn of tiles.getTilesByType(assets.tile`myTile0`)) {
        Mario = sprites.create(assets.image`blank32x24`, SpriteKind.MarioEnemy)
        characterAnimations.setCharacterState(Mario, characterAnimations.rule(Predicate.MovingRight))
        Mario.vx = 35
        tiles.placeOnTile(Mario, MarioSpawn)
        normalSpeed = 35
        Mario.ay = 300
        Mario.y += -4
        tiles.setTileAt(MarioSpawn, assets.tile`transparency16`)
    }
    ChaserMario = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Chaser)
    tiles.placeOnTile(ChaserMario, tiles.getTileLocation(0, 13))
    ChaserMario.y += -8
    ChaserMario.vx = 45
    ChaserMario.ay = 300
    setupAnimations()
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Slay0`), music.PlaybackMode.LoopingInBackground)
    ChaserMario.setFlag(SpriteFlag.ShowPhysics, false)
}
function setupAnimations () {
    characterAnimations.loopFrames(
    StarPlayer,
    assets.animation`StarIdle`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    StarPlayer,
    assets.animation`StarRunRight`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    StarPlayer,
    assets.animation`StarRunLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    StarPlayer2,
    assets.animation`Star2Idle`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    StarPlayer2,
    assets.animation`Star2RunRight`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    StarPlayer2,
    assets.animation`Star2RunLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    StarPlayer3,
    assets.animation`Star3Idle`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    StarPlayer3,
    assets.animation`Star3RunRight`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    StarPlayer3,
    assets.animation`Star3RunLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    StarPlayer4,
    assets.animation`Star4Idle`,
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    StarPlayer4,
    assets.animation`Star4RunRight`,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    StarPlayer4,
    assets.animation`Star4RunLeft`,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    for (let TempSetupMario of sprites.allOfKind(SpriteKind.MarioEnemy)) {
        characterAnimations.loopFrames(
        TempSetupMario,
        assets.animation`Maaaaaaario walk right`,
        200,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        TempSetupMario,
        assets.animation`Maaaaaaario walk left`,
        200,
        characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
        TempSetupMario,
        assets.animation`Maaaaaaario Freak OUT`,
        50,
        characterAnimations.rule(Predicate.Moving)
        )
    }
    characterAnimations.loopFrames(
    ChaserMario,
    assets.animation`Maaaaaaario walk right`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    ChaserMario,
    assets.animation`Maaaaaaaario Jump right`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    ChaserMario,
    assets.animation`Maaaaaaario walk right Invincible`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    ChaserMario,
    assets.animation`Maaaaaaaario Jump right0`,
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.MovingUp)
    )
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom) && sprite.tilemapLocation().row > 14) {
        PlayerDeath(sprite)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Screen == "Title" && (!(StarPlayer2) || spriteutils.isDestroyed(StarPlayer2))) {
        StarPlayer2 = sprites.create(assets.image`blank`, SpriteKind.Player)
        characterAnimations.setCharacterState(StarPlayer2, characterAnimations.rule(Predicate.NotMoving))
        tiles.placeOnTile(StarPlayer2, tiles.getTileLocation(StarPlayer.tilemapLocation().column + 1, StarPlayer.tilemapLocation().row))
        StarPlayer2.ay = 300
        Marker2 = sprites.create(assets.image`P4`, SpriteKind.pointer)
        Marker2.setFlag(SpriteFlag.Ghost, true)
        setupAnimations()
    }
    if (Command == true && StarPlayer2) {
        if (StarPlayer2.vy == 0) {
            StarPlayer2.vy = -145
        }
    }
})
function Results () {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Results0`), music.PlaybackMode.LoopingInBackground)
    Result = sprites.create(assets.image`Results`, SpriteKind.HUD)
    Result.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) - 35)
    timer.after(1000, function () {
        textSprite = textsprite.create("Player Bonus:" + "     " + ("" + PlayersThatFinished + " x 100"))
        textSprite.setPosition(scene.cameraProperty(CameraProperty.X) - 5, scene.cameraProperty(CameraProperty.Y) - 0)
        textSprite.setOutline(1, 14)
        textSprite.z = 11
        timer.after(1000, function () {
            sprites.destroy(textSprite)
            textSprite = textsprite.create("Player Bonus:" + "     " + PlayersThatFinished * 100)
            textSprite.setPosition(scene.cameraProperty(CameraProperty.X) - 17, scene.cameraProperty(CameraProperty.Y) - 0)
            textSprite.setOutline(1, 14)
            textSprite.z = 11
            timer.after(1000, function () {
                let Score = 0
                textSprite2 = textsprite.create("Score:" + "     " + Score)
                textSprite2.setPosition(scene.cameraProperty(CameraProperty.X) - 2, scene.cameraProperty(CameraProperty.Y) + 25)
                textSprite2.setOutline(1, 14)
                textSprite2.z = 11
                timer.after(1000, function () {
                    sprites.destroy(textSprite2)
                    textSprite2 = textsprite.create("Score:" + "     " + (PlayersThatFinished * (OGCharacterAmount * 100) + Score))
                    textSprite2.setPosition(scene.cameraProperty(CameraProperty.X) + 4, scene.cameraProperty(CameraProperty.Y) + 25)
                    textSprite2.setOutline(1, 14)
                    textSprite2.z = 11
                    timer.after(500, function () {
                        textSprite3 = textsprite.create("Press 'A' to continue")
                        textSprite3.setPosition(scene.cameraProperty(CameraProperty.X) + 4, scene.cameraProperty(CameraProperty.Y) + 45)
                        textSprite3.setOutline(1, 14)
                        textSprite3.z = 11
                        timer.background(function () {
                            pauseUntil(() => controller.A.isPressed())
                            WipeOutTheWholeSpecies()
                            timer.after(250, function () {
                                level += 1
                                if (!(level >= 3)) {
                                    Reset()
                                } else {
                                    game.reset()
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Screen == "Title" && (!(StarPlayer3) || spriteutils.isDestroyed(StarPlayer3))) {
        StarPlayer3 = sprites.create(assets.image`blank`, SpriteKind.Player)
        characterAnimations.setCharacterState(StarPlayer3, characterAnimations.rule(Predicate.NotMoving))
        tiles.placeOnTile(StarPlayer3, tiles.getTileLocation(StarPlayer.tilemapLocation().column + 1, StarPlayer.tilemapLocation().row))
        StarPlayer3.ay = 300
        Marker3 = sprites.create(assets.image`P4`, SpriteKind.pointer)
        Marker3.setFlag(SpriteFlag.Ghost, true)
        setupAnimations()
    }
    if (Command == true && StarPlayer3) {
        if (Command == true) {
            if (StarPlayer3.vy == 0) {
                StarPlayer3.vy = -145
            }
        }
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Screen == "Title" && (!(StarPlayer4) || spriteutils.isDestroyed(StarPlayer4))) {
        StarPlayer4 = sprites.create(assets.image`blank`, SpriteKind.Player)
        characterAnimations.setCharacterState(StarPlayer4, characterAnimations.rule(Predicate.NotMoving))
        tiles.placeOnTile(StarPlayer4, tiles.getTileLocation(StarPlayer.tilemapLocation().column + 1, StarPlayer.tilemapLocation().row))
        StarPlayer4.ay = 300
        Marker4 = sprites.create(assets.image`P4`, SpriteKind.pointer)
        Marker4.setFlag(SpriteFlag.Ghost, true)
        setupAnimations()
    }
    if (Command == true && StarPlayer4) {
        if (Command == true) {
            if (StarPlayer4.vy == 0) {
                StarPlayer4.vy = -145
            }
        }
    }
})
function PlayerDeath (sprite: Sprite) {
    if (sprite == StarPlayer) {
        sprites.destroy(Marker1)
    } else if (sprite == StarPlayer2) {
        sprites.destroy(Marker2)
    } else if (sprite == StarPlayer3) {
        sprites.destroy(Marker3)
    } else if (sprite == StarPlayer4) {
        sprites.destroy(Marker4)
    }
    sprites.destroy(sprite)
    MarioSpeed += DeathSpeedBoost
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    if (sprites.allOfKind(SpriteKind.Player).length == 0) {
        timer.after(1000, function () {
            music.stopAllSounds()
            WipeOutTheWholeSpecies()
            timer.after(250, function () {
                Reset()
            })
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.CoolThingNotReallyNeededFront, function (sprite, otherSprite) {
    if (sprite == StarPlayer) {
        sprites.destroy(Marker1)
    } else if (sprite == StarPlayer2) {
        sprites.destroy(Marker2)
    } else if (sprite == StarPlayer3) {
        sprites.destroy(Marker3)
    } else if (sprite == StarPlayer4) {
        sprites.destroy(Marker4)
    }
    sprites.destroy(sprite)
    PlayersThatFinished += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chaser, function (sprite, otherSprite) {
    PlayerDeath(sprite)
})
function ShootFireworks () {
    frwrkSprite = sprites.create(assets.image`blank`, SpriteKind.CoolThingNotReallyNeeded)
    frwrkSprite.setPosition(scene.cameraProperty(CameraProperty.X) + randint(-70, 70), scene.cameraProperty(CameraProperty.Y) - randint(25, 55))
    music.play(music.createSong(assets.song`Fire Work`), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    frwrkSprite,
    assets.animation`Firework`,
    100,
    false
    )
    timer.after(500, function () {
        sprites.destroy(frwrkSprite)
    })
}
function Reset () {
    tempVariable = 0
    ChaserControl = true
    MarioTouchedFlag = false
    MarioSpeed = 5
    Title = sprites.create(assets.image`myImage`, SpriteKind.HUD)
    Title.setPosition(80, 168)
    textSprite = textsprite.create("Player 1 press 'B'")
    textSprite.setOutline(1, 15)
    textSprite.setPosition(80, 230)
    textSprite.setFlag(SpriteFlag.AutoDestroy, true)
    Screen = "Title"
    MaxDistance = 80
    StarPlayer = sprites.create(assets.image`blank`, SpriteKind.Player)
    characterAnimations.setCharacterState(StarPlayer, characterAnimations.rule(Predicate.NotMoving))
    Marker1 = sprites.create(assets.image`P1`, SpriteKind.pointer)
    Marker1.setFlag(SpriteFlag.Ghost, true)
    Command = true
    LevelSetup()
}
scene.onOverlapTile(SpriteKind.Chaser, assets.tile`myTile18`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
    scene.setBackgroundColor(13)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Command == true) {
        if (StarPlayer.vy == 0) {
            StarPlayer.vy = -145
        }
    }
})
let MarioState = ""
let FreakOut = false
let MaxDistance = 0
let tempVariable = 0
let frwrkSprite: Sprite = null
let Marker1: Sprite = null
let Marker4: Sprite = null
let Marker3: Sprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let PlayersThatFinished = 0
let textSprite: TextSprite = null
let Result: Sprite = null
let Command = false
let Marker2: Sprite = null
let StarPlayer4: Sprite = null
let StarPlayer3: Sprite = null
let StarPlayer2: Sprite = null
let ChaserMario: Sprite = null
let normalSpeed = 0
let Mario: Sprite = null
let Title: Sprite = null
let MarioSpeed = 0
let DeathSpeedBoost = 0
let OGCharacterAmount = 0
let Direction = 0
let State = ""
let Screen = ""
let CastleFront: Sprite = null
let CastleBack: Sprite = null
let StarPlayer: Sprite = null
let Flag: Sprite = null
let ChaserControl = false
let MarioTouchedFlag = false
let level = 0
level = 0
Reset()
game.onUpdate(function () {
    if (Command == true) {
        if (controller.right.isPressed()) {
            StarPlayer.vx += 2
        } else if (controller.left.isPressed()) {
            StarPlayer.vx += -2
        } else {
            StarPlayer.vx += StarPlayer.vx * -0.1
        }
        if (StarPlayer.vx > 65) {
            StarPlayer.vx = 65
        } else if (StarPlayer.vx < -65) {
            StarPlayer.vx = -65
        }
        if (StarPlayer2) {
            if (controller.player2.isPressed(ControllerButton.Right)) {
                StarPlayer2.vx += 2
            } else if (controller.player2.isPressed(ControllerButton.Left)) {
                StarPlayer2.vx += -2
            } else {
                StarPlayer2.vx += StarPlayer2.vx * -0.1
            }
            if (StarPlayer2.vx > 65) {
                StarPlayer2.vx = 65
            } else if (StarPlayer2.vx < -65) {
                StarPlayer2.vx = -65
            }
        }
        if (StarPlayer3) {
            if (controller.player3.isPressed(ControllerButton.Right)) {
                StarPlayer3.vx += 2
            } else if (controller.player3.isPressed(ControllerButton.Left)) {
                StarPlayer3.vx += -2
            } else {
                StarPlayer3.vx += StarPlayer3.vx * -0.1
            }
            if (StarPlayer3.vx > 65) {
                StarPlayer3.vx = 65
            } else if (StarPlayer3.vx < -65) {
                StarPlayer3.vx = -65
            }
        }
        if (StarPlayer4) {
            if (controller.player4.isPressed(ControllerButton.Right)) {
                StarPlayer4.vx += 2
            } else if (controller.player4.isPressed(ControllerButton.Left)) {
                StarPlayer4.vx += -2
            } else {
                StarPlayer4.vx += StarPlayer4.vx * -0.1
            }
            if (StarPlayer4.vx > 65) {
                StarPlayer4.vx = 65
            } else if (StarPlayer4.vx < -65) {
                StarPlayer4.vx = -65
            }
        }
    } else {
        StarPlayer.vx += StarPlayer.vx * -0.1
        if (StarPlayer2) {
            StarPlayer2.vx += StarPlayer2.vx * -0.1
        } else if (StarPlayer3) {
            StarPlayer3.vx += StarPlayer3.vx * -0.1
        } else if (StarPlayer4) {
            StarPlayer4.vx += StarPlayer4.vx * -0.1
        }
    }
})
game.onUpdate(function () {
    if (!(spriteutils.isDestroyed(ChaserMario))) {
        if (ChaserControl == true) {
            if (tiles.tileAtLocationIsWall(tiles.getTileLocation(ChaserMario.tilemapLocation().column + 1, ChaserMario.tilemapLocation().row))) {
                if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(ChaserMario.tilemapLocation().column, ChaserMario.tilemapLocation().row - 2)))) {
                    ChaserMario.vx = 25
                    if (ChaserMario.vy == 0 && ChaserMario.isHittingTile(CollisionDirection.Bottom)) {
                        ChaserMario.vy = -125
                        ChaserMario.vx = 45 + MarioSpeed
                    }
                } else {
                    if (ChaserMario.vy == 0) {
                        ChaserMario.vy = 125
                    }
                }
            } else if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(ChaserMario.tilemapLocation().column + 1, ChaserMario.tilemapLocation().row + 1)))) {
                ChaserMario.vx = 65
                if (ChaserMario.vy == 0 && ChaserMario.isHittingTile(CollisionDirection.Bottom)) {
                    ChaserMario.vy = -125
                }
            } else {
                ChaserMario.vx = 45 + MarioSpeed
            }
        }
        scene.centerCameraAt(ChaserMario.x + 65, ChaserMario.y)
    } else if (spriteutils.isDestroyed(ChaserMario) && Screen == "Title") {
        scene.centerCameraAt(80, 196)
    }
})
game.onUpdate(function () {
    if (!(spriteutils.isDestroyed(StarPlayer))) {
        animatePlayer(StarPlayer)
    }
    if (!(spriteutils.isDestroyed(StarPlayer2))) {
        animatePlayer(StarPlayer2)
    }
    if (!(spriteutils.isDestroyed(StarPlayer3))) {
        animatePlayer(StarPlayer3)
    }
    if (!(spriteutils.isDestroyed(StarPlayer4))) {
        animatePlayer(StarPlayer4)
    }
    for (let UpdateMarioSpawn of sprites.allOfKind(SpriteKind.MarioEnemy)) {
        if (FreakOut == false) {
            if (UpdateMarioSpawn.vx > 5) {
                characterAnimations.setCharacterState(UpdateMarioSpawn, characterAnimations.rule(Predicate.MovingRight))
            } else if (UpdateMarioSpawn.vx < -5) {
                characterAnimations.setCharacterState(UpdateMarioSpawn, characterAnimations.rule(Predicate.MovingLeft))
            }
            if (UpdateMarioSpawn.isHittingTile(CollisionDirection.Left)) {
                UpdateMarioSpawn.vx = normalSpeed
            } else if (UpdateMarioSpawn.isHittingTile(CollisionDirection.Right)) {
                UpdateMarioSpawn.vx = normalSpeed * -1
            }
        }
    }
    if (Screen == "Title") {
        StarPlayer.setStayInScreen(true)
        if (StarPlayer2) {
            StarPlayer2.setStayInScreen(true)
        }
        if (StarPlayer3) {
            StarPlayer3.setStayInScreen(true)
        }
        if (StarPlayer4) {
            StarPlayer4.setStayInScreen(true)
        }
    } else if (Screen == "Play") {
        StarPlayer.setStayInScreen(false)
        if (StarPlayer2) {
            StarPlayer2.setStayInScreen(false)
        }
        if (StarPlayer3) {
            StarPlayer3.setStayInScreen(false)
        }
        if (StarPlayer4) {
            StarPlayer4.setStayInScreen(false)
        }
    }
    Marker1.setPosition(StarPlayer.x, StarPlayer.y)
    if (Marker2) {
        Marker2.setPosition(StarPlayer2.x, StarPlayer2.y)
    }
    if (Marker3) {
        Marker3.setPosition(StarPlayer3.x, StarPlayer3.y)
    }
    if (Marker4) {
        Marker4.setPosition(StarPlayer4.x, StarPlayer4.y)
    }
})
game.onUpdate(function () {
    for (let TempMario of sprites.allOfKind(SpriteKind.MarioEnemy)) {
        if (Math.abs(StarPlayer.x - TempMario.x) <= MaxDistance) {
            if (StarPlayer.y == TempMario.y + 4.5) {
                FreakOut = true
                if (StarPlayer.x < TempMario.x) {
                    TempMario.vx = -45
                } else if (StarPlayer.x > TempMario.x) {
                    TempMario.vx = 45
                }
                characterAnimations.setCharacterState(TempMario, characterAnimations.rule(Predicate.Moving))
            } else {
                FreakOut = false
            }
        }
    }
    if (ChaserMario && ChaserControl == true) {
        if (ChaserMario.vx < 60 && ChaserMario.vy == 0) {
            MarioState = "Normal"
            characterAnimations.setCharacterState(ChaserMario, characterAnimations.rule(Predicate.MovingRight))
        } else if (ChaserMario.vy != 0 && MarioState == "Normal") {
            characterAnimations.setCharacterState(ChaserMario, characterAnimations.rule(Predicate.MovingUp))
        } else if (ChaserMario.vx > 60 && ChaserMario.vy == 0) {
            MarioState = "Invincible"
            characterAnimations.setCharacterState(ChaserMario, characterAnimations.rule(Predicate.Moving, Predicate.MovingRight))
        } else if (ChaserMario.vy != 0 && MarioState == "Invincible") {
            characterAnimations.setCharacterState(ChaserMario, characterAnimations.rule(Predicate.MovingRight, Predicate.MovingUp))
        } else {
        	
        }
    }
})
