import Phaser, { Scene } from "phaser";
import MainScene from "./MainScene";


export default class TitleScreen extends Phaser.Scene {
    preload() {
        
        
    }

    create() {
        
        const text = this.add.text(400, 250, "Main Menu")

        const StartGame = this.add.text(400, 300,"Start Game")

        StartGame.setOrigin(0.5, 0.5)
        
        text.setOrigin(0.5, 0.5)
        

        StartGame.setInteractive()
        

        StartGame.on('pointerdown', () => {
            this.input.stopPropagation()
            this.scene.switch('MainScene');
        })

    }
    update() {

    }
}