const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true, // Make the window transparent
    frame: false, // Remove the window frame
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Required for direct IPC communication
    },
  });

  // Enable click-through for the entire window initially
  win.setIgnoreMouseEvents(true);

  // Listen for messages from the renderer process to toggle click-through
  ipcMain.on('set-ignore-mouse-events', (event, ignore) => {
    win.setIgnoreMouseEvents(ignore);
  });

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);