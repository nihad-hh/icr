"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import { Eye, EyeOff } from "lucide-react";

let timeoutPrihvatanjeVoznje;

let korisnici = [
  {
    email: "nihad@gmail.com",
    username: "Nihad Hodzic",
    password: "password123",
    krediti: "12",
    rola: "putnik",
  },
  {
    email: "edin@gmail.com",
    username: "Edin Avdukic",
    password: "password321",
    krediti: "12",
    rola: "taxi",
  },
];

let dostupneVoznje = [
  {
    id: "1",
    datum: "13.02.2025",
    vrijeme: "15:00",
    polaziste: "Bulevar Meše Selimovića 12",
    odrediste: "Drvenija 13",
  },
  {
    id: "2",
    datum: "13.02.2025",
    vrijeme: "11:25",
    polaziste: "Trg nezavinosti 4",
    odrediste: "Safeta Hadžića 13",
  },
  {
    id: "3",
    datum: "13.02.2024",
    vrijeme: "21:13",
    polaziste: "Enverha Šehovića 123",
    odrediste: "Skenderija 1",
  },
  {
    id: "4",
    datum: "13.02.2024",
    vrijeme: "13:25",
    polaziste: "Humska 4",
    odrediste: "Bolnička 12",
  },
];

let rezervisaneVoznje = [
  {
    id: "1",
    datum: "27.03.2025",
    vrijeme: "13:25",
    polaziste: "Humska 4",
    odrediste: "Bolnička 12",
    cijena: "12 KM",
  },
  {
    id: "2",
    datum: "15.02.2025",
    vrijeme: "21:13",
    polaziste: "Enverha Šehovića 123",
    odrediste: "Skenderija 1",
    cijena: "23 KM",
  },
  {
    id: "3",
    datum: "27.12.2024",
    vrijeme: "15:00",
    polaziste: "Bulevar Meše Selimovića 12",
    odrediste: "Drvenija 13",
    cijena: "19 KM",
  },
  {
    id: "4",
    datum: "13.02.2025",
    vrijeme: "11:25",
    polaziste: "Trg nezavinosti 4",
    odrediste: "Safeta Hadžića 13",
    cijena: "9 KM",
  },
];

let zavrseneVoznje = [
  {
    id: "1",
    datum: "27.03.2025",
    vrijeme: "14:11",
    polaziste: "Višnjik 13",
    odrediste: "Trg Alije Izetbegovića 91",
    cijena: "12 KM",
  },
  {
    id: "2",
    datum: "15.02.2025",
    vrijeme: "21:49",
    polaziste: "Gatačka 13",
    odrediste: "Koldžina 53",
    cijena: "10 KM",
  },
  {
    id: "3",
    datum: "27.12.2024",
    vrijeme: "15:00",
    polaziste: "Bulevar Meše Selimovića 12",
    odrediste: "Drvenija 13",
    cijena: "22 KM",
  },
  {
    id: "4",
    datum: "13.02.2025",
    vrijeme: "11:25",
    polaziste: "Trg nezavinosti 4",
    odrediste: "Safeta Hadžića 13",
    cijena: "15 KM",
  },
];

export default function Home() {
  localStorage.setItem("dostupneVoznje", JSON.stringify(dostupneVoznje));
  localStorage.setItem("krediti", 12);
  localStorage.setItem("rezervisaneVoznje", JSON.stringify(rezervisaneVoznje));
  localStorage.setItem("zavrseneVoznje", JSON.stringify(zavrseneVoznje));

  useEffect(() => {
    localStorage.setItem("initialLoad", "false");
    localStorage.setItem("handledLocation", "false");
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  let registriraniKorisnici = JSON.parse(
    localStorage.getItem("registriraniKorisnici")
  );

  if (registriraniKorisnici) {
    korisnici = korisnici.concat(registriraniKorisnici);

    registriraniKorisnici = [];

    localStorage.setItem(
      "registriraniKorisnici",
      JSON.stringify(registriraniKorisnici)
    );
  }

  const [users, setUsers] = useState(korisnici);

  const handleLogin = async () => {
    if (username === "") {
      setUsernameValid(false);
      return;
    } else {
      setUsernameValid(true);
    }

    if (password === "") {
      setPasswordValid(false);
      return;
    } else {
      setPasswordValid(true);
    }

    let user;

    if (users.length != 0) {
      user = users.find(
        (user) => user.username === username && user.password === password
      );
    }

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      if (user.rola === "putnik") {
        localStorage.setItem("polaziste", "Najcesce polaziste");
        localStorage.setItem("odrediste", "Najcesce odrediste");
        window.location.href = "/korisnik";
      } else if (user.rola === "taxi") {
        localStorage.setItem("polaziste", "Hamze Hume 4");
        localStorage.setItem("odrediste", "Skenderija 12");
        window.location.href = "/taxi";
      }
    } else {
      setPasswordValid(false);
    }
  };

  const handleInput = (event, setFn) => {
    event.preventDefault();
    setFn(event.target.value);
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleGuest = async (event) => {
    event.preventDefault();

    localStorage.setItem("currentUser", "None");

    window.location.href = "/korisnik";
  };

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-gray-900">
        <div className="w-full flex justify-center">
          <div className="flex flex-col w-96 gap-6">
          <div className="w-full flex justify-center">
            <a
              className="btn btn-ghost text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400"
              style={{
                backgroundImage: "linear-gradient(45deg, #ffffff 30%, #fcd34d 40%, #ffffff 45%, #fcd34d 49%, #ffffff 60%)",
              }}
            >
              JaBiHTaxi
            </a>
          </div>

            <label className="input input-bordered flex items-center gap-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="white"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow text-white bg-gray-800"
                placeholder="Korisničko ime"
                value={username}
                onChange={(event) => handleInput(event, setUsername)}
              />
            </label>

            {!usernameValid && (
              <span className="text-red-500">
                Molimo unesite ispravno korisničko ime.
              </span>
            )}

            <label className="input input-bordered flex items-center gap-2 bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="white"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={isVisible ? "text" : "password"}
                className="grow text-white bg-gray-800"
                placeholder="Lozinka"
                value={password}
                onChange={(event) => handleInput(event, setPassword)}
              />

              <button
                className="relative hover:text-blue-500 eye-toggle-btn"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={20} aria-hidden="true" className="text-white" />
                ) : (
                  <Eye size={20} aria-hidden="true" className="text-white"/>
                )}
              </button>
            </label>

            {!passwordValid && (
              <span className="text-red-500">
                Molimo unesite ispravne podatke.
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center my-5 text-white">
          <span ctext-white-500>
            Nemate račun ?{" "}
            <Link className="text-blue-500" href="/korisnik/registracija">
              Registrirajte se
            </Link>{" "}
            ili{" "}
            <Link
              className="text-blue-500"
              href="/korisnik"
              onClick={handleGuest}
            >
              Koristite kao gost
            </Link>
          </span>
        </div>
        <div className="w-full flex justify-center">
          <button className="my-5 " onClick={handleLogin}>
            Prijavi se
          </button>
        </div>
      </div>
    </>
  );
}
