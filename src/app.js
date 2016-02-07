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
    }*/


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
//wind.add(nameText);
wind.show();
var childRef = ref.child('UserData').child('Pebble2961');
childRef.on('value', function(value){
    
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
    /*
    if(average<65){
        if (left<right) {
            Vibe.vibrate('short');
            distance = left;
        } else {
            Vibe.vibrate('double');
            distance = right;
        }
       
        if(distance<65){
            for(var i=(distance*distance*distance*distance*5);i>0;i--){
            
        }
        }
    }*/
    
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
    
    
    
    childRef.remove();
}
);






