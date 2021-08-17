import React from "react";

export default function Test() {
  const handleOk = () => {
    console.log("test");
    console.log(window.ipcRenderer);
    console.log(window.dialog);
    window.dialog.showOpenDialog({ properties: ["openFile"] });
  };

  return (
    <div>
      <button onClick={() => handleOk()}>OK</button>
    </div>
  );
}
