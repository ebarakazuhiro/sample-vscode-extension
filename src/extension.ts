// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("catCoding.start", () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        "catCoding",
        "Cat Coding",
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>`;
}
