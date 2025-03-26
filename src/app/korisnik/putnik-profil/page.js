"use client";

import Navbar from "../../../components/Navbar.jsx";
import Link from "next/link";

import { loadDataFromJson, createVoznje } from "../../../utils/utils.js";
import { useState } from "react";

export default function PutnikProfil() {
  const [ime, setIme] = useState(
    JSON.parse(localStorage.getItem("currentUser")).username
  );

  let krediti = localStorage.getItem("krediti");

  let zavrseneVoznje = JSON.parse(localStorage.getItem("zavrseneVoznje"));

  let rezervisaneVoznje = JSON.parse(localStorage.getItem("rezervisaneVoznje"));

  let zavrseneVoznjeJSX = createVoznje(zavrseneVoznje);

  let rezervisaneVoznjeJSX = createRezervisaneVoznje(rezervisaneVoznje);

  function createRezervisaneVoznje(voznje) {
    return (
      <>
        <tbody>
          {voznje.map((row) => (
            <tr key={row.id}>
              <td>
                {row.datum} <br /> {row.vrijeme}
              </td>
              <td>{row.polaziste}</td>
              <td>{row.odrediste}</td>
              <td>{row.cijena}</td>
              <td
                onClick={(e) => {
                  console.log(e.target.parentElement.parentElement);

                  document.getElementById("my_modal_4").showModal();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="rgb(255, 204, 0)"
                  className="size-6 bg-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box bg-gray-900">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="w-full flex justify-center flex-col text-gray-400">
              <table className="table table-pin-rows z-0 my-6">
                <thead className="text-gray-500">
                  <tr className="bg-gray-200 text-gray-900">
                    <th>Datum i vrijeme</th>
                    <th>Polazište</th>
                    <th>Odredište</th>
                    <th>Cijena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      27.3.2025. <br /> 13:25
                    </td>
                    <td>Humska 4</td>
                    <td>Bolnička 12</td>
                    <td>12 KM</td>
                  </tr>
                </tbody>
              </table>

              <button
                className="my-5 btn btn-warning"
                onClick={() => {
                  window.location.href = "/korisnik/putnik-profil";
                }}
              >
                Potvrdi otkazivanje
              </button>
            </div>
          </div>
        </dialog>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="flex space-x-4 px-4 py-6 text-yellow-400">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="rgb(255, 204, 0)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
          <p>{ime} </p>
        </div>
        <div className="flex space-x-2 py-4 ml-20">
          <span className="bg-gray-900 text-yellow-400 py-2 rounded">
            Krediti:
          </span>
          <span className="bg-gray-900 text-yellow-400 py-2 rounded mr-10">
            {krediti} KM
          </span>
          <Link
            href={{
              pathname: "/korisnik/uplati",
            }}
          >
            <button className="ml-2">Uplati</button>
          </Link>
        </div>
      </div>
      <hr class="border-t-4 border-gray-200 my-0" />

      <div className="overflow-auto" style={{ maxHeight: "276px" }}>
        <table className="table table-pin-rows z-0 text-white">
          <caption className="text-yellow-400 text-lg font-bold p-2">
            Prethodno završene vožnje
          </caption>
          <thead>
            <tr className="bg-gray-200 text-gray-900">
              <th>Datum i vrijeme</th>
              <th>Polazište</th>
              <th>Odredište</th>
              <th>Cijena</th>
            </tr>
          </thead>
          {zavrseneVoznjeJSX}
        </table>
      </div>

      <hr class="border-t-4 border-gray-200 my-0" />

      <div className="overflow-auto" style={{ maxHeight: "276px" }}>
        <table
          id="tRezervisaneVoznje"
          className="table table-pin-rows text-white"
        >
          <caption className="text-yellow-400 text-lg font-bold p-2">
            Rezervisane vožnje
          </caption>
          <thead>
            <tr className="bg-gray-200 text-gray-900">
              <th>Datum i vrijeme</th>
              <th>Polazište</th>
              <th>Odredište</th>
              <th>Cijena</th>
              <th>Otkaži</th>
            </tr>
          </thead>
          {rezervisaneVoznjeJSX}
        </table>
      </div>
      <hr class="border-t-4 border-gray-200 my-0" />
    </div>
  );
}
