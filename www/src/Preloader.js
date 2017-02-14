Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	//Mediante prototype se añaden métodos a la función Ball.Preloader
	preload: function() {
		//Proload de las imágens, ésta ya estaban cargados dede Boot.js
		this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
		//Actua como barra de progreso
		this.load.setPreloadSprite(this.preloadBar);

		//Sprite sobre el que se aplica Arcade
		this.load.image('ball', 'img/tapon.png');
		//Colisión con ball
		this.load.image('hole', 'img/hole.png');

		//Adornos del juego
		this.load.image('botella', 'img/Botella1.png');
		this.load.image('botella2', 'img/Botella2.png');
		this.load.image('botella3', 'img/Botella3.png');

		
		//Adorno primera pantalla
		this.load.image('title', 'img/title.png');

	
		//Color de fondo
		this.load.image('screen-bg', 'img/fondo.png');
		//Primera pantalla
		this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
		//Pantalla con instrucciones y botón de entrado al juego
		this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');

		
		//spritesheet botón que llama a la pantalla de instrucciones screen-howtoplay
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);

		
	},
	create: function() {
		//Llama al siguiente estado, Menú inicial.
		this.game.state.start('MainMenu');
        	
	}
};
