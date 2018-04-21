// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.__devtron = { require: require, process: process }
var _process = process;
window.__electron = require('electron');

const { ipcRenderer } = require('electron')

//window.__electron.remote.getCurrentWindow().webContents.send('synchronous-message', 'ping');
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

// window.__electron.remote.getCurrentWindow().webContents.send('start-nightswatch', 'start-nightswatch');
// window.__electron.ipcRenderer.sendSync('start-nightswatch', 'send it fucking again dude!')

ipcRenderer.on('start-nightswatch', (event, arg) => {
  console.log(arg);
  var watchers = ipcRenderer.sendSync('start-nightswatch', 'start-nightswatch');
})


process.once('loaded', function() {
  global.process= _process;
});

function test() {
    console.log('test again rocks does it?!')
}

test()