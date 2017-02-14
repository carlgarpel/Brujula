var Ball = {
	//Variables globales
	_WIDTH: 360,
	_HEIGHT: 640,
	_WIDTHTAPON: 32,
	_HEIGHTTAPON: 52,
	_DISPOSITIVO: false,
	_VELOCIDADX: 0,
	_VELOCIDADY: 0,
	_CAIDAS: 0,
	_GIRO: 0,
	_ACIERTOS: 0,
	_NUEVAFASE: false

};
Ball.Boot = function(game) {};
//Mediante prototype se añaden métodos a la función Ball.Boot
Ball.Boot.prototype = {
	preload: function() {
		//Pantalla inicial mientras se carga la aplicación, aquí solo preload de la imágenes
		this.load.image('preloaderBg', 'img/loading-bg.png');
		this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		//Configuración de la pantalla
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		// Se pasa la acción al siguiente estado
		this.game.state.start('Preloader');
	}
};