namespace SpriteKind {
    export const Bandera = SpriteKind.create()
    export const Nivel2 = SpriteKind.create()
    export const Nivel3 = SpriteKind.create()
    export const Nivel_final = SpriteKind.create()
}
function Posicion (mySprite: Sprite) {
    imagen = randint(1, 2)
    if (imagen == 1) {
        tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadVertical)
    } else {
        tiles.placeOnRandomTile(mySprite, sprites.vehicle.roadHorizontal)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel3, function (sprite, otherSprite) {
    game.showLongText("Enhorabuena!!! has alcanzado el nivel 3.    Ahora tendrás que esquivar a dos enemigos y seguir         recogiendo     regalos.     Suerte!!!.", DialogLayout.Center)
    tiles.setTilemap(tiles.createTilemap(hex`200010000c0c0101010101010101010101010c0c1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d0c0b020202020402020204020202090c1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e01030c0c0c0c030c0c0c030c0c0c05020202040202040202020402020209201e01030c0c0c0c030c010c030c010c030c0c0c030c0c030c0c0c030c0c0c03201e010502090c0c030c0c0c030c010c030c0c0c030c0c030c000c030c000c03201e01030c030c0c05020202060c010c030c0c0c030c0c030c0c0c030c0c0c03201e01030c030c0c03010101030c010c050202020d02020d0204020702090c03201e01030c08090c08090101030c010c030c0c0c031112030c030c0c0c030c03201e01030c0c030c0c030101030c0c0c030c010c031615030c030c0f0c030c03201e0105020207020207040207020202060c010c031314030c030c0f0c030c03201e01030c0c0c0c0c0c030c0c0c0c0c030c0c0c0502020702060c0c0c030c03201e01030c0f0f0f0f0c030c0c0c0c0c05020402061010101005020202060c03201e01030c0f0f0f0f0c030c0c0c0c0c0301030f031f0f0f1003171c18030c03201e01030c0c0c0c0c0c030c0c0c0c0c0301030f031f1f1f1f03191b1a030c03201e0c080202020202020702020202020a0c080207020202020702020207020a201e0c0c0101010101010101010101010c0c1f201f202020201f2020201f201f201e`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
        2 . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 . 2 2 2 2 . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . 2 . 
        2 . 2 2 2 2 . 2 . 2 . 2 . 2 . 2 2 2 . 2 2 . 2 2 2 . 2 2 2 . 2 . 
        2 . . . 2 2 . 2 2 2 . 2 . 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 2 . 
        2 . 2 . 2 2 . . . . . 2 . 2 . 2 2 2 . 2 2 . 2 2 2 . 2 2 2 . 2 . 
        2 . 2 . 2 2 . 2 2 2 . 2 . 2 . . . . . . . . . . . . . . 2 . 2 . 
        2 . 2 . . 2 . . 2 2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 2 2 . 2 . 2 . 
        2 . 2 2 . 2 2 . 2 2 . 2 2 2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 2 . 
        2 . . . . . . . . . . . . . . 2 . 2 . 2 2 . 2 . 2 . 2 . 2 . 2 . 
        2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . . . . . . 2 2 2 . 2 . 2 . 
        2 . 2 . . . . 2 . 2 . . . 2 . . . . . 2 2 2 2 . . . . . 2 . 2 . 
        2 . 2 . . . . 2 . 2 . . . 2 . 2 . 2 . 2 . . 2 . 2 2 2 . 2 . 2 . 
        2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 . 2 . 2 2 2 2 . 2 2 2 . 2 . 2 . 
        2 . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        `, [myTiles.tile0,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.builtin.forestTiles0,myTiles.tile1,sprites.castle.tilePath5,myTiles.tile2,sprites.builtin.forestTiles12,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.hazardWater,myTiles.tile3,sprites.castle.shrub,sprites.dungeon.floorLightMoss], TileScale.Sixteen))
    bandera.destroy()
    coche.setPosition(168, 152)
    enemigo2 = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemigo2.setPosition(344, 168)
    enemigo2.follow(coche, 25)
    info.changeScoreBy(1)
    nivel = 3
    puntos = 15
    Premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.jumpUp.play()
    premio.destroy(effects.starField, 200)
    coche.say("comido!!", 1000)
    info.changeScoreBy(1)
    Premios()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel2, function (sprite, otherSprite) {
    game.showLongText("Enhorabuena!!! has alcanzado el nivel 2.    Ahora tendrás que esquivar a un enemigo y seguir         recogiendo     regalos.     Suerte!!!.", DialogLayout.Center)
    tiles.setTilemap(tiles.createTilemap(hex`100010000c0c0101010101010101010101010c0c0c0b020202020402020204020202090c0103010101010301010103010101030101030101010103010c0103010c0103010105020901010301010103010c0103010103010301010502020206010c0103010103010301010301010103010c0103010103010809010809010103010c0103010103010103010103010103010101030101050202070202070402070202020601010301010101010103010101010103010103010c0c0c0c0103010c0c0c0103010103010c0c0c0c0103010c0c0c010301010301010101010103010101010103010c080202020202020702020202020a0c0c0c0101010101010101010101010c0c`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . 2 2 2 2 . 2 2 2 . 2 2 2 . 2 
        2 . 2 2 2 2 . 2 . 2 . 2 . 2 . 2 
        2 . . . 2 2 . 2 2 2 . 2 . 2 . 2 
        2 . 2 . 2 2 . . . . . 2 . 2 . 2 
        2 . 2 . 2 2 . 2 2 2 . 2 . 2 . 2 
        2 . 2 . . 2 . . 2 2 . 2 . 2 . 2 
        2 . 2 2 . 2 2 . 2 2 . 2 2 2 . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
        2 . 2 . . . . 2 . 2 . . . 2 . 2 
        2 . 2 . . . . 2 . 2 . . . 2 . 2 
        2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.tile0,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
    bandera.destroy()
    coche.setPosition(168, 152)
    enemigo1 = sprites.create(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, SpriteKind.Enemy)
    enemigo1.setPosition(24, 24)
    enemigo1.follow(coche, 25)
    info.changeScoreBy(1)
    nivel = 2
    puntos = 10
    Premios()
})
function Premios () {
    if (info.score() == 5) {
        bandera = sprites.create(img`
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . 2 2 e e . . . . 
            . . . . . . 2 2 2 2 e e . . . . 
            . . . . 2 2 2 2 2 2 e e . . . . 
            . . 2 2 2 2 2 2 2 2 e e . . . . 
            2 2 2 2 2 2 2 2 2 2 e e . . . . 
            . 2 2 2 2 2 2 2 2 2 e e . . . . 
            . . . . 2 2 2 2 2 2 e e . . . . 
            . . . . . . . 2 2 2 e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            `, SpriteKind.Nivel2)
        nivel += 1
        Posicion(bandera)
    } else if (info.score() == 10) {
        bandera = sprites.create(img`
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . f f f f . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . 2 2 e e . . . . 
            . . . . . . 2 2 2 2 e e . . . . 
            . . . . 2 2 2 2 2 2 e e . . . . 
            . . 2 2 2 2 2 2 2 2 e e . . . . 
            2 2 2 2 2 2 2 2 2 2 e e . . . . 
            . 2 2 2 2 2 2 2 2 2 e e . . . . 
            . . . . 2 2 2 2 2 2 e e . . . . 
            . . . . . . . 2 2 2 e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            . . . . . . . . . . e e . . . . 
            `, SpriteKind.Nivel3)
        nivel += 1
        Posicion(bandera)
    } else if (info.score() == 15) {
        bandera = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 9 9 9 9 8 9 8 9 8 8 8 9 8 2 
            2 8 9 8 8 8 8 9 8 9 9 8 8 9 8 2 
            2 8 9 9 9 8 8 9 8 9 8 9 8 9 8 2 
            2 8 9 8 8 8 8 9 8 9 8 8 9 9 8 2 
            2 8 9 8 8 8 8 9 8 9 8 8 8 9 8 2 
            2 8 9 8 8 8 8 9 8 9 8 8 8 9 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, SpriteKind.Nivel_final)
        nivel += 1
        Posicion(bandera)
    } else {
        if (nivel == 1) {
            premio = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . 6 6 6 5 5 6 6 6 . . . . 
                . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
                . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                . . . . 6 6 8 8 8 8 6 6 . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
        } else if (nivel == 2) {
            premio = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
        } else if (nivel == 3) {
            premio = sprites.create(img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `, SpriteKind.Food)
        }
        Posicion(premio)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nivel_final, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.starField)
})
let enemigo1: Sprite = null
let premio: Sprite = null
let enemigo2: Sprite = null
let bandera: Sprite = null
let coche: Sprite = null
let imagen = 0
let nivel = 0
let puntos = 0
game.splash("Atrapa los premios", "Autor: Claudio Orts")
game.showLongText("Pulsa los      cursores para moverte y      recoge todos los objetos que aparezcan.", DialogLayout.Center)
info.setScore(0)
puntos = 5
nivel = 1
imagen = 0
coche = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
coche.setPosition(40, 40)
controller.moveSprite(coche, 100, 100)
scene.cameraFollowSprite(coche)
tiles.setTilemap(tiles.createTilemap(hex`100010000c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0701010101010101010101080c0c0c0c020d0d0d0d0d0d0d0d0d0d020c0c0c0c020d0d0d0d0d0d0d0d0d0d020c0c0c0c020d0d0d0d0d0d0d0d0d0d020c0c0c0c020d0d0d0d0d0d0d0d0d0d020c0c0c0c020d0d0d0d0d0d0d0d0d0d020c0c0c0c0301010101010101010101060c0c0c0c020e0e0e0e0e0e0e0e0e0e020c0c0c0c020e0e0e0e0e0e0e0e0e0e020c0c0c0c020e0e0e0e0e0e0e0e0e0e020c0c0c0c020e0e0e0e0e0e0e0e0e0e020c0c0c0c0401010101010101010101050c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c`, img`
    . . . . . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 . . . . . . . . . . . . 2 . 
    . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
    . 2 . 2 . . . . . . . . 2 . 2 . 
    . 2 . 2 . . . . . . . . 2 . 2 . 
    . 2 . 2 . . . . . . . . 2 . 2 . 
    . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
    . 2 . . . . . . . . . . . . 2 . 
    . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
    . 2 . 2 . . . . . . . . 2 . 2 . 
    . 2 . 2 . . . . . . . . 2 . 2 . 
    . 2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 
    . 2 . . . . . . . . . . . . 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.tile0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.builtin.field0,sprites.builtin.field1,sprites.dungeon.hazardSpike,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
Premios()
