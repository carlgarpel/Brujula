var Ball = {
	_WIDTH: 360,
	_HEIGHT: 640,
	_DISPOSITIVO: false

};
Ball.Boot = function(game) {};
Ball.Boot.prototype = {
	preload: function() {
		this.load.image('preloaderBg', 'img/loading-bg.png');
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		
		this.game.state.start('Preloader');
	}
};