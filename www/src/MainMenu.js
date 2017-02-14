Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	//Mediante prototype se añaden métodos a la función Ball.MainMenu
	create: function() {
		//Pantalla del menú inicial
		this.add.sprite(0, 0, 'screen-mainmenu');
		//Adorno con el nombre del juego
		this.gameTitle = this.add.sprite(Ball._WIDTH*0.5, 40, 'title');
		// x en el centro y en la parte superior
		this.gameTitle.anchor.set(0.5,0);

		//spritesheet para llamar a la pantalla de instrucciones.
		this.startButton = this.add.button(Ball._WIDTH*0.5, 200, 'button-start', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		//cursos en forma de dedo para aplicación HTML5 de explorador
		this.startButton.input.useHandCursor = true;

		
	},
	startGame: function() {
		//Siguiente estado, patalla con instrucciones.
		this.game.state.start('Howto');
	}
};