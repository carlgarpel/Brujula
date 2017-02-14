Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
	//Mediante prototype se añaden métodos a la función Ball.Howto
	create: function() {
		//botón iniciar juego (en realidad es toda la pantalla la que hace de botón)
		this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
	},
	startGame: function() {
		//Función invocada por el usuario mediante el botón anterior que inicia el juego.
		this.game.state.start('Game');
	}
};