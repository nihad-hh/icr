"use client";

import Navbar from "../../../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      {/* Feedback */}{" "}
      <h1 className="flex justify-center py-8 text-2xl text-white">O nama</h1>
      <p className="flex justify-center px-8 py-8 text-lg text-white">
        Naša taxi aplikacija pruža brz, siguran i pouzdan način prijevoza za
        putnike i vozače. Bilo da ste registrirani korisnik ili gost,
        omogućavamo vam jednostavno naručivanje vožnje u samo nekoliko klikova.
        Naš cilj je povezati vozače i putnike uz maksimalnu udobnost,
        transparentnost i sigurnost. Uz fleksibilne opcije plaćanja, praćenje
        vožnje u realnom vremenu i ocjenjivanje usluga, nastojimo poboljšati
        vaše iskustvo putovanja svaki dan.
      </p>
      <div className="flex justify-center items-center">
        <img src="/taxi_slika.png" alt="Logo" className="h-40 w-auto" />
      </div>
    </>
  );
}
