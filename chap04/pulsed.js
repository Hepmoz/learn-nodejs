const Pulser = require('./pulser');

//Initiate a Pulser object
const pulser = new Pulser();

//Handler function
pulser.on('pulse', () => {
    console.log(`${new Date().toISOString()} pulse received`);
});

//Start it pulsing
pulser.start();