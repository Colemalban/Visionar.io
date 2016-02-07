/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
require('firebase');
var Vibe = require('ui/vibe');
var ref = new Firebase("https://visionaria.firebaseio.com");  
var UI = require('ui');
var Vector2 = require('vector2');
  
Firebase.INTERNAL.forceWebSockets();  
var wind = new UI.Window();
//function used to vibrate
/*function vibrate(distance,side){
    var length;
    if(side==0){
        length='double';
    }
    else{
        length='short';
    }
    switch(distance){
        case 1-20:
            Vibe.vibrate(length);
            break;
        case 21-28:
            Vibe.vibrate(length);
            break;
        case 29-36:
            Vibe.vibrate(length);
            break;
        case 37-45:
            Vibe.vibrate(length);
            break;
        case 46-54:
            Vibe.vibrate(length);
            break;
    }
    }
*/

var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    text: "Loading.....",
    textAlign:'left'
});
var textTwo = new UI.Text({
    position: new Vector2(0,50),
    size: new Vector2(144,30),
    text:"blank",
    textAlign:'right'
});
wind.add(textfield);
wind.add(textTwo);
wind.show();

var childRef = ref.child('UserData').child('Pebble2961');
childRef.on('value', function(value){
    
    var right = childRef.child('r');
    var left = childRef.child('l');
    console.log("Left:"+left);
    console.log("Right:"+right);
    textfield.text("Left:"+left);
    textTwo.text("Right:"+right);
    if((left+right)/2<=25){
        Vibe.vibrate('long');
    }
    if((left+right)/2<=45){
        Vibe.vibrate('double');
    }
    if((left+right)/2<=60){
        Vibe.vibrate('short');
    }
    
    });

