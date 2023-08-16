import Phaser, { Game } from "phaser";
import TitleScreen from "./scenes/TitleScreen";
import MainScene from "./scenes/MainScene";

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
game.scene.add("MainScene", MainScene)

game.scene.start("TitleScreen")