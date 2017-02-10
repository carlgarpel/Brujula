//game-pruebas
Ball.Game = function(game) {};


	
	//Game.vigilaSensores(); 

//function inicio() {
Ball.Game.prototype = {


	create: function() {

	
		this.taponCaido=false;
	

		this.buttonFondo = this.add.button(0, 0, 'screen-bg', this.girarTapon, this);
		//**************************************************************************

		//Añado a Geme la funcionalidad ARCADE de Phaser
		this.physics.startSystem(Phaser.Physics.ARCADE);


		this.ball = this.add.sprite(130, 130, 'ball');
		this.ball.anchor.set(0.5);

		this.physics.enable(this.ball, Phaser.Physics.ARCADE);

 		//this.game.physics.arcade.enable(this.ball);

		this.ball.body.gravity.x =  6;
		this.ball.angle=90;
		Ball._GIRO = 1;

		this.ball.body.bounce.set(0.8);

	
		//Grupo de bordes **********************************************************
		this.borderGroup = this.add.group();

		//Si es verdad todos los sprites creados con #create o #createMulitple 
		//tendrán un cuerpo creado la física sobre ellos. 
		//Cambiar el tipo de cuerpo con #physicsBodyType.
		this.borderGroup.enableBody = true;
		this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;

		this.borderGroup.create(0, 2, 'border-horizontal'); //2
		this.borderGroup.create(0, Ball._HEIGHT-12, 'border-horizontal'); //0
		this.borderGroup.create(0, 0, 'border-vertical'); //0
		this.borderGroup.create(Ball._WIDTH-2, 0, 'border-vertical'); //-2
		//Para que los sprite's se paren al tropezar con los bordes.
		this.borderGroup.setAll('body.immovable', true);


		this.hole = this.add.sprite(130, Ball._HEIGHT-12, 'hole');
		this.physics.enable(this.hole, Phaser.Physics.ARCADE);
		this.hole.anchor.set(0.5);
		this.hole.body.setSize(2, 2);

		//****************************************************************************
		//alert("Create");
	},



	//UPDATE *********************************************************************************************
	update: function() {

		

		var factorDificultad = 150 // (10 + (1 * 100));
        //this.ball.body.velocity.y = (Ball._VELOCIDADY * factorDificultad);
        this.ball.body.velocity.x = Ball._VELOCIDADX * (-1 ) * factorDificultad;

	    this.ball.body.velocity.y += 0.5; //this.velocidadY; //this.movementForce;
		
	    this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);

	    this.checkPos(this.ball);
	    	// COLISIONES
		//this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
		
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
       ball.angle = 90 * (Math.round(Math.random()*(5-1)+parseInt(1)));


    }

	},

	finishLevel: function(ball) {
		if (Ball._GIRO >= 4) {
			ball.x = 10;
		 	ball.y = 10;
		 	ball.angle = 90 *(Math.round(Math.random()*(5-1)+parseInt(1)));
		 	this.hole.x +=  50;
		 	Ball._CAIDAS+=1;
		}
		else {
			ball.x = ball.x + 30;
		 	
		 	
		}
		
	},
	//****************************************************************************************************
	wallCollision: function() {

		//if(this.audioStatus) {this.bounceSound.play();}
		// Vibration API
		//if("vibrate" in window.navigator) {window.navigator.vibrate(100);}
		//alert("ffff");
		
		//this.ball.body.destroy();
		//**************BRUJULA


  /* 	 if (Ball._DISPOSITIVO) {
     

        navigator.compass.getCurrentHeading(
            function (posicion) {
                var gradosAbsolutos;

                if (posicion.magneticHeading > 180) {
                    gradosAbsolutos = 360 - posicion.magneticHeading;
                } else {
                    gradosAbsolutos = posicion.magneticHeading;
                }

                if ((gradosAbsolutos) < 1) {
                    navigator.notification.alert("¡Enhorabuena! ¡Has encontrado la posición norte con una precisión del " + (100 - gradosAbsolutos).toString() + "%!");
                } else {
                    navigator.notification.alert("¡Fallaste! ¡Estás a " + Math.round(gradosAbsolutos).toString() + " grados del norte!");
                }

               
            },
            function (posicionError) {
                switch (posicionError.code) {
                case CompassError.COMPASS_INTERNAL_ERR:
                    navigator.notification.alert("Error en la brújula");
                    break;
                case CompassError.COMPASS_NOT_SUPPORTED:
                    navigator.notification.alert("No hay brújula");
                    break;
                default:
                    navigator.notification.alert("Error desconocido");
                    break;
                }
            }
        );
    	}*/


		//*********************

		
	},
	

	girarTapon: function() {
		this.ball.angle+=90;
		Ball._GIRO += 1;



		//alert("Control: " + Ball._DISPOSITIVO);
	},

	//****************************************************
	

  detectaAgitacion: function(datosAceleracion){
    var agitacionX = datosAceleracion.x > 10;
    var agitacionY = datosAceleracion.y > 10;

    if (agitacionX || agitacionY){
      setTimeout(this.recomienza, 1000);
    }
  },

  recomienza: function(){
    document.location.reload(true);
  },

  registraDireccion: function(){
    Ball._VELOCIDADX = datosAceleracion.x ;
    Ball._VELOCIDADY = datosAceleracion.y ;
     navigator.notification.alert("X " + Ball._VELOCIDADX );
  // Ball._VELOCIDADX = 30 ;
  //  Ball._VELOCIDADY = datosAceleracion.y ;

    // navigator.notification.alert("velocidadY " + Ball._VELOCIDADY);
  }


};




		//alert("Inicio");

		if ('addEventListener' in document) {
		    document.addEventListener('deviceready', function() {
   	     		Ball._DISPOSITIVO=true;
        		//alert("El dispisitivo está listo... INICIO");
        		vigilaSensores();
        		
        		
        		
				}, false);
   		};
   			
  function vigilaSensores(){
    
   function onError() {
        console.log('onError!');
        navigator.notification.alert("X error " + Ball._VELOCIDADX );
        //alert ("onError");
    };

    function onSuccess(datosAceleracion){
     // this.detectaAgitacion(datosAceleracion);
 	//navigator.notification.alert("X  " + datosAceleracion.x );
 	Ball._VELOCIDADX = datosAceleracion.x ;
    Ball._VELOCIDADY = datosAceleracion.y ;
      //this.registraDireccion(datosAceleracion);

       
    };
     
     navigator.accelerometer.watchAcceleration(onSuccess, onError,{ frequency: 10 });
     //navigator.notification.alert("hay acelerometro EN VIGILA SENSORES");
  };

