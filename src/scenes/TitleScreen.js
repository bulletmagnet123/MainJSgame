import Phaser from "phaser";


export default class TitleScreen extends Phaser.Scene {
    preload() {
        this.load.image("porn", "porn.png")
    }

    create() {
        const pornimage = this.add.image(200, 200, "porn")
        const text = this.add.text(400, 250, "Testing hello world")
        
        text.setOrigin(0.5, 0.5)
        pornimage.setScale(0.25, 0.25)

    }
    update() {

    }
}