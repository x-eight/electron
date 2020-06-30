const {app, BrowserWindow } = require('electron')
//const path = require('path')
//const fs = require('fs')

let mainWindow

app.on('ready',()=>{
    //create windows
    mainWindow = new BrowserWindow({
        width: 325,//default
        height: 320,//default
        webPreferences:{
            nodeIntegration: true
        }
    })

    //mainWindow.setIcon(path.join(__dirname, '/img/images.png'))

    //create content window
    mainWindow.loadFile('index.html')

    //create the console
    //mainWindow.webContents.openDevTools()
})



