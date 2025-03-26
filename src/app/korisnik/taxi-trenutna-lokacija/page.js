"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const Map = dynamic(
  () => import("../../../components/Map").then((component) => component.Map),
  { ssr: false }
);

const HomePage = () => {
  const [location, setLocation] = useState([]);

  const generateRandomNumber = () => {
    const min = -0.01;
    const max = 0.01;
    const number = min + (max - min) * Math.random();
    return number; // Format to 3 decimal places
  };

  if (Object.keys(location).length === 0) {
    setLocation([
      {
        id: "1",
        lat: 43.8663,
        lng: 18.4331,
      },
      {
        id: "2",
        lat: 43.8763,
        lng: 18.4231,
      },
    ]);
  }

  const [inputValue, setInputValue] = useState("");

  const handleClick = (event) => {
    if (event.key === "Enter") {
      console.log("Enter pressed with value:", inputValue);
      performAction(inputValue);
    }
  };

  const performAction = (value) => {
    const lat_step = generateRandomNumber();
    const lng_step = generateRandomNumber();

    const newLat = location["lat"] + lat_step;
    const newLng = location["lng"] + lng_step;

    console.log(newLat);
    console.log(newLng);

    setLocation({ id: location["id"], lat: newLat, lng: newLng });

    localStorage.setItem("odrediste", JSON.stringify(inputValue));
    window.location.href = "/";

    setInputValue("");
  };

  return (
    <>
      <Link href="/korisnik">
        <button className="my-5 mx-4">Nazad</button>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxHeight: "80%",
          width: "100%",
        }}
      >
        <Map center={{ lat: 43.8563, lng: 18.4131 }} locations={location} />
      </div>
    </>
  );
};

export default HomePage;
