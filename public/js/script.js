document.body.style.backgroundColor = '#ffffff';
var socket = io.connect( 'http://localhost:3000' );

socket.on('connect', function( ){
    console.log( "It's real time!");
});

socket.on('lub', function( ){
    console.log('dub');
});
