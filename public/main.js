const { app, electron, Menu, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
require("@electron/remote/main").initialize();
const { BrowserWindow } = require("electron");

let win;

app.on("ready", () => {
  win = new BrowserWindow({
    webPreferences: {
      // add
      nodeIntegration: true, // theseconst { ipcRenderer } = require('electron')
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");

  win.webContents.openDevTools();

  const menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        { label: "créer minisatures" },
        {
          label: "refresh",
          click() {
            win.reload();
          },
        },
        {
          label: "exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  win.on("closed", () => {
    win = null;
  });
});
