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
//Add basic UI that displays incoming data
var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    text: "Loading.....",
    textAlign:'left'
});
var nameText = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    text: "CastleHacks",
    textAlign:'center',
    textOverflow: 'wrap'
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
//Read in data from firebase
var childRef = ref.child('UserData').child('Pebble2961');
childRef.on('value', function(value){
    //set the point equal to the value and take the left and right numbers
   var point = value.val();
   var left=point.l;
   var right = point.r;
   var sum = left+right;
    var average = sum/2;
    var distance;
    
    console.log("Left:"+left);
    console.log("Right:"+right);
    textfield.text("Left:"+left);
    textTwo.text("Right:"+right); 
	//Set of conditionals that decide on the type of vibration to use
    if(sum/2<=25){
        Vibe.vibrate('long'); 
        for(var i=0;i<1000000;i+=4){
            //
        }
    }
    if(sum/2<=45){
        Vibe.vibrate('double');
        for(var i=0;i<10000000;i+=2){
            //
        }
        
    }
    if(sum/2<=65){
        Vibe.vibrate('short');
        for(var i=0;i<100000000;i+=2){
            //
        }
    }
    
    
    //Remove last data point
    childRef.remove();
}
);






