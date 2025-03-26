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
  return (
    <>
      <Navbar />
      {/* Feedback */}{" "}
      <>
        <div className="w-full flex justify-center my-4 text-white" style={{ marginTop: '4cm'}}>
          <h1>Hvala što ste koristili JaBiHTaxi!</h1>
        </div>
        <div className="w-full flex justify-center my-4 text-white">
          Ocijenite vaše iskustvo:
        </div>
        <div className="w-full flex justify-center my-4">
          <ReactStars count={5} size={24} color2={"#ffd700"} />
        </div>
      </>
      {/* divider */}
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <>
        <div className="w-full flex justify-center">
          <Link href="/taxi">
            <button className="my-5">
              Povratak na glavni ekran
            </button>
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
