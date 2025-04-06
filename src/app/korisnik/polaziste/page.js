"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CircleX } from "lucide-react";

const Map = dynamic(
  () => import("../../../components/Map").then((component) => component.Map),
  { ssr: false }
);

const HomePage = () => {
  const [location, setLocation] = useState({});

  const generateRandomNumber = () => {
    const min = -0.01;
    const max = 0.01;
    const number = min + (max - min) * Math.random();
    return number; // Format to 3 decimal places
  };

  if (Object.keys(location).length === 0) {
    setLocation({
      id: "550e8400-e29b-41d4-a716-446655440000",
      lat: 43.8663,
      lng: 18.4331,
    });
  }

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const lat_step = generateRandomNumber();
      const lng_step = generateRandomNumber();

      const newLat = location["lat"] + lat_step;
      const newLng = location["lng"] + lng_step;

      console.log(newLat);
      console.log(newLng);

      setLocation({ id: location["id"], lat: newLat, lng: newLng });
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const performAction = (value) => {
    const lat_step = generateRandomNumber();
    const lng_step = generateRandomNumber();

    const newLat = location["lat"] + lat_step;
    const newLng = location["lng"] + lng_step;

    console.log(newLat);
    console.log(newLng);

    setLocation({ id: location["id"], lat: newLat, lng: newLng });

    localStorage.setItem("polaziste", JSON.stringify(inputValue));
    window.location.href = "/korisnik";

    setInputValue("");
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <>
      <Link href="/korisnik">
        <button className="my-5 mx-5">Nazad</button>
      </Link>
      <div className="w-full flex justify-center h-12 my-2">
        <label className="input input-bordered flex items-center mx-2 bg-gray-800 text-white">
          <input
            className="grow"
            type="text"
            value={inputValue}
            onChange={handleOnChange} // Update state with input value
            placeholder="Unesi adresu"
          />
          <CircleX onClick={handleClear} />
        </label>

        <div className="flex justify-center items-center"></div>

        <Link href="/korisnik">
          <button className="my-1" onClick={performAction}>
            Potvrdi
          </button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxHeight: "70%",
          width: "100%",
        }}
      >
        <Map center={{ lat: 43.8563, lng: 18.4131 }} locations={[location]} />
      </div>
    </>
  );
};

export default HomePage;
