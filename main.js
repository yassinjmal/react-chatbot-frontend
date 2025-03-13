const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,    // Make the window transparent
    frame: false,         // Remove the window border
    webPreferences: {
      nodeIntegration: true,
    },
    hasShadow: false,     // Optional: Remove shadow around the window
  });

  win.loadURL('http://localhost:3000'); // Replace with your React app URL
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
