var Nxt = require("./nxt").Nxt;
var nxt = new Nxt("COM4");

nxt.on('getinputvalue', function(data) {
    if(data[3] == nxt.INPUT_PORT_1){
        var adc = (data[11] << 8) | data[10];
        console.log('Touch ADC: ' + adc);
    }
});

nxt.sp.on("open", function () {
    // Init
    console.log("Robot connected")
    nxt.play_tone(440, 500);

    // Set up hardware
    nxt.set_input_state(nxt.INPUT_PORT_1, nxt.SWITCH, nxt.BOOLEANMODE);
    console.log("Hardware set up");

    // Start interval
    setInterval(function(){
        nxt.get_input_values(nxt.INPUT_PORT_1);
    }, 500);
});