import { workspace, ExtensionContext } from "vscode";


export function activate(context: ExtensionContext) {
  console.log("activate!");
}

export function deactivate(): Thenable<void> | undefined {
  console.log("deactivate!");
  return new Promise((r) => r());
}
