"use client";

import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

import ReactStars from "react-stars";

let timeoutPrihvatanjeVoznje;

export default function Home() {
  let currentUser = localStorage.getItem("currentUser");

  if (currentUser !== "None") {
    currentUser = JSON.parse(currentUser);
  }

  return (
    <>
      <Navbar />
      {/* Feedback */}{" "}
      <>
        <div className="w-full flex justify-center my-4">
          <span className="text-yellow-400 px-2 py-2 rounded">
            Želim da podijelim:
          </span>
          <select
            className="select select-warning w-full max-w-xs bg-white text-gray-900"
            defaultValue="Odaberi način plaćanja"
          >
            <option value="Problem u aplikaciji">Problem u aplikaciji</option>
            <option value="Incident sa korisnikom">
              Incident sa korisnikom
            </option>
            <option value="Pitanje/prijedlog">Pitanje/prijedlog</option>
          </select>
        </div>
      </>
      <div className="w-full flex justify-start my-4 mx-2">
        <span className="text-yellow-400 px-2 py-2 rounded">Tekst:</span>
      </div>
      <div className="flex min-w-[480px] flex-col mx-2">
        <textarea
          className="textarea textarea-warning h-64 bg-white text-gray-900"
          placeholder="Ono što želim da podijelim"
        ></textarea>
      </div>
      <>
        <div className="w-full flex justify-center">
          <Link
            href={
              currentUser !== "None" && currentUser.rola === "taxi"
                ? "/taxi"
                : "/korisnik"
            }
          >
            <button className="my-5">Pošalji poruku</button>
          </Link>
        </div>
      </>
    </>
  );
}

// const dataFilePath = path.join(process.cwd(), 'db/data.json');

// const jsonData = await fsPromises.readFile(dataFilePath);
// const objectData = JSON.parse(jsonData);

// console.log(objectData);

// const newData = {
//   Name: "Ermina",
//   ID: 2
// };

// objectData.push(newData)

// const updatedData = JSON.stringify(objectData);

// await fsPromises.writeFile(dataFilePath, updatedData);
