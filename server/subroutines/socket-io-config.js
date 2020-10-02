/**
 * socket io - methods for doing socket io... for whatever its used for... do we need this???
 * ostensibly it should send a ping to the clients socket IO connection to cause their messages counter to update; 
 * also performs a heartbeat to check the API key and see if they may have left client opened on a terminal for an extended amount of time; this causes
 * disgruntled users but .. if they left their ngs open on a shared terminal then they might expose their battle.net account and no one wants that.
 * 
 * 
 * reviewed: 10-1-2020
 * reviewer: wraith
 */
//import the socketIO server
const socketIo = require('../../serverConf')['socketIo'];

/* 
This creates in memory storage for the clients that connect to keep track of the user / client ID relation ship and allow us to send messages back to the client if needed
*/


//memory storage for connected clients
//stores an object that has client ID and the associated system user ID
var clients = [];

//create a socket IO conenction
socketIo.on('connection', function(client) {

    //when a new client connects, store it's info in memory
    client.on('storeClientInfo', function(data) {
        if (indexOfUser(clients, data.userId) == -1) {
            let clientInfo = {};
            clientInfo.userId = data.userId;
            clientInfo.clientId = client.id;
            clients.push(clientInfo);
        }
    });

    //when a client disconnects remove it from memory
    client.on('disconnect', function() {
        if (indexOfClient(clients, client.id) > -1) {
            clients.splice(indexOfClient(clients, client.id), 1)
        }
    });
});

//helper function that returns the index of client object based on the client id
function indexOfClient(clients, client) {
    let ind = -1;
    clients.forEach((clientIt, index) => {
        if (clientIt.clientId == client) {
            ind = index;
        }
    });
    return ind;
}

//helper method that returns index of client object based on the user id
function indexOfUser(clients, user) {
    let ind = -1;
    clients.forEach((clientIt, index) => {
        if (clientIt.userId == user) {
            ind = index;
        }
    });
    return ind;
}

module.exports = {
    socketIo: socketIo,
    clients: clients,
    indexOfClient: indexOfClient,
    indexOfUser: indexOfClient
};