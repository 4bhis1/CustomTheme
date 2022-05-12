import React, { useContext } from "react";
import { Theme } from "../Context/Povider";

const Main = () => {
  let { changeTheme, mode, colorFunction } = useContext(Theme);
  let BlueColor = colorFunction(mode, "blue");
  let GrayColor = colorFunction(mode, "gray");

  console.log("hihi", BlueColor["backgroundColor"], BlueColor["main"]);

  return (
    <div
      style={{
        backgroundColor: BlueColor["backgroundColor"],
        height: window.innerHeight,
      }}
    >
      {/* //Switch */}

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingRight : 20,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: 10,
            borderRadius: 50,
            backgroundColor: BlueColor["main"],
            width: "fit-content",
            cursor: "pointer",
          }}
          onClick={() => {
            console.log("Clickef on dark");
            changeTheme(!(mode === "light"));
          }}
        >
          <div
            style={{
              visibility: !(mode === "light") ? "hidden" : "visible",
              color: BlueColor["font"],
            }}
            onClick={() => {
              console.log("Clickef on dark");
              changeTheme(!(mode === "light"));
            }}
          >
            Dark
          </div>
          <div
            style={{
              visibility: mode === "light" ? "hidden" : "visible",
              color: BlueColor["font"],
            }}
            onClick={() => changeTheme(!(mode === "light"))}
          >
            Light
          </div>
        </div>
      </div>
      {/* <button
            onClick={() => {
            console.log("Clicked");
            changeTheme(!(mode === "light"));
            }}
            style={{ color: GrayColor["font"], backgroundColor: GrayColor["main"] }}
        >
            CLick to change Mode
        </button> */}

      <div
        style={{
          backgroundColor: GrayColor["main"],
          color: GrayColor["font"],
          padding: 10,
        }}
      >
        Experiment
      </div>
      <div
        style={{
          backgroundColor: BlueColor["main"],
          color: BlueColor["font"],
          padding: 10,
        }}
      >
        Experiment
      </div>
    </div>
  );
};

export default Main;
