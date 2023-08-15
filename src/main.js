import Phaser from "phaser";
import TitleScreen from "./scenes/TitleScreen";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add("TitleScreen", TitleScreen)

game.scene.start("TitleScreen")