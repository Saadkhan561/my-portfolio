import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="flex items-center h-screen bg-gray-800 flex-col font-mina">
      <div className="w-4/5">
        <div className="flex justify-between items-center bg-gradient-to-r from-purple-900 via-purple-700 to-pink-900 p-8">
          <div>
            <img
              className="rounded-full h-[120px] w-[120px] object-cover"
              src="/images/profile.jfif"
              alt=""
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl fonr-semibold text-white">
              Hey...
              <br />
              I'm Saad...
              <br />A passionate Frontend Developer.
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex gap-1 items-center text-white">
                <img src="/images/github.png" alt="" height={25} width={25} />
                SaadKhan561
              </div>
              <div className="flex gap-1 items-center text-white">
                <img
                  src="/images/linked-in.png"
                  alt=""
                  height={25}
                  width={25}
                />
                Saad Khan
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly gap-1 gap-y-12 flex-wrap p-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
