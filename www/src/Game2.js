//game: La lógica del juego.
Ball.Game = function(game) {};
//Mediante prototype se añaden métodos a la función Ball.Game
Ball.Game.prototype = {

	create: function() {
	
		// Convierto el fondo de la pantalla en un botón que al ser pulsado se hace 
		//girar ball (El taón)
		this.buttonFondo = this.add.button(0, 0, 'screen-bg', this.girarTapon, this);
		//**************************************************************************

		//Añado a Geme la funcionalidad ARCADE de Phaser
		this.physics.startSystem(Phaser.Physics.ARCADE);


		this.ball = this.add.sprite(aleatorio(Ball._WIDTH -BalL._WIDTH_TAPON), BalL._WIDTH_TAPON, 'ball');
		this.ball.anchor.set(0.5, 1);

		this.physics.enable(this.ball, Phaser.Physics.ARCADE);

 		

		this.ball.body.gravity.x =  6;
		this.ball.angle=90 * aleatorio(4,1);
		

		this.ball.body.bounce.set(2);

	

		this.hole = this.add.sprite(188, Ball._HEIGHT-260, 'hole');
		this.physics.enable(this.hole, Phaser.Physics.ARCADE);
		this.hole.anchor.set(0.5,1);
		//this.hole.body.setSize(0.5, 0);
    this.hole.body.immovable=true;

    this.botella= this.add.sprite(130, Ball._HEIGHT-320, 'botella');
    
	},



	//UPDATE *********************************************************************************************
	update: function() {

		//this.physics.arcade.collide(this.botella, this.ball);

		var factorDificultad = 150 // (10 + (1 * 100));
        //this.ball.body.velocity.y = (Ball._VELOCIDADY * factorDificultad);
        this.ball.body.velocity.x = Ball._VELOCIDADX * (-1 ) * factorDificultad;

	    this.ball.body.velocity.y += 0.5; //this.velocidadY; //this.movementForce;
		
	   // this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
     this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
    // this.physics.arcade.collide(this.ball, this.hole, this.finishLevel, null, this);

	    this.checkPos(this.ball);
	   
		
	},
	checkPos: function(ball) {

    if (ball.x > Ball._WIDTH-2)
    {
        ball.x = 10;
    };
    if (ball.x < 0)
    {
        ball.x =Ball._WIDTH-12;
    };
    if (ball.y > Ball._HEIGHT-12)
    {
       
        Ball._CAIDAS += 1;
        if (Ball._CAIDAS>4)
        {
        	this.recomienza();
        };
        ball.y = 10;
        var giros = aleatorio(5,1);
        ball.angle = 90 * giros;
 

		};

        


    },

    aleatorio: function (superior, inferior) {
    	return Math.round(Math.random()*(superior-inferior)+parseInt(inferior));

    },



	finishLevel: function(ball) {
  

		if (this.ball.angle != 0) {
			
 

    this.ball.gravity= 12;
    this.ball.x+=20;
		 
		 	
		}
		else {
			
       alert("acierto");
       this.ball.x = 10;
       this.ball.y = 10;
        var giros = Math.round(Math.random()*(5-1)+parseInt(1));
        this.ball.angle = 90 * giros;
    
        Ball._CAIDAS+=1;
		 	
		 	
		}
		
	},
	//****************************************************************************************************
	wallCollision: function() {
		// No se precisa de ninguna acción.
	},
	
	// Función invocada por el usuario al pulsar en la pantalla.
	girarTapon: function() {
		//Aumentamos en un ángulo de 90º el giro del Tapón.
		this.ball.angle+=90;
    },

	//****************************************************
	
  	// cuando cae el Tapón 5 veces se reinicia la partida.	
  	recomienza: function(){
    	document.location.reload(true);
  	}

};
//****************FIN DE LAS FUNCIONES AÑADIDAS A GAME*****************************

// ESTO ES LO PRIMERO QUE SE EJECUTA ***********************************
// Evento que verifica que el dispositivo esté preparado
if ('addEventListener' in document) {
    document.addEventListener('deviceready', function() {
   		vigilaSensores(); //Activa el control del acelerómetro.
		}, false);
   	};
  //Cuando el dispositivo esté ready ************************************* 
  function vigilaSensores(){
    // Accede al acelerómetro
   function onError() {
        console.log('onError!');
        navigator.notification.alert("X error ");
    };

    function onSuccess(datosAceleracion){
    
 	  Ball._VELOCIDADX = datosAceleracion.x ;
      Ball._VELOCIDADY = datosAceleracion.y ;
    
    };
     //Cada 10 milisegundo comprueba el acelerómetro
     // si el dispositivo es rady ejecuta onSuccess y registra las valores de x, y			
     navigator.accelerometer.watchAcceleration(onSuccess, onError,{ frequency: 10 });

  };
//Fin vigila sensores ************************************* 
//Phaser se encarga de controlar el flujo de la aplicación, puesto que 
//en Howto.js dijimos this.game.state.start('Game');
