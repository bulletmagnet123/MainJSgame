import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
     constructor ()
    {
        super({ key: 'MainScene', active: false });
    }

    preload () {
        this.load.image("porn", "porn.png")

    }
    create() {
        
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        let PornBackground = this.add.image(width / 2, height / 2 , "porn")
        PornBackground.setScale(0.35, 0.35)
        
        
        
    }
    update() {

    }
    
}