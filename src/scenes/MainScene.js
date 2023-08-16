import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: "MainScene", active: false });
    }

    preload() {
        this.load.image("porn", "porn.png");
        this.load.spritesheet("player", "player.png", {
            frameWidth: 50,
            frameHeight: 37,
        });
    }
    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        //let PornBackground = this.add.image(width / 2, height / 2 , "porn")
        //PornBackground.setScale(0.35, 0.35)
        this.player = this.add.sprite(500, 500, "player");

        this.anims.create({
            key: "idle1",
            frames: this.anims.generateFrameNumbers("player", {
                frames: [0, 1],
            }),
            frameRate: 5,
            repeat: -1,
        });

        this.anims.create({
            key: "idle2",
            frames: this.anims.generateFrameNumbers("player", {
                frames: [2, 3],
            }),
            frameRate: 5,
            repeat: -1,
        });
        this.player.play("idle2");
    }
    update() {
        if (this.cursors.left.isDown) {
            this.player.x -= 5;
        } else if (this.cursors.right.isDown) {
            this.player.x += 5;
        }

        if (this.cursors.up.isDown) {
            this.player.y -= 5;
        } else if (this.cursors.down.isDown) {
            this.player.y += 5;
        }
    }
}
