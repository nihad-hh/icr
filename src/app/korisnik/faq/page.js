"use client";

import Navbar from "../../../components/Navbar";

export default function Faq() {
  return (
    <>
      <Navbar />
      {/* Feedback */}{" "}
      <>
        <h1 className="flex justify-center py-6 text-2xl">
          Često postavljena pitanja
        </h1>
        <div className="px-4">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Kako mogu naručiti taxi bez prijave?
            </div>
            <div className="collapse-content">
              <p>
                Kao gost korisnik, možete naručiti taxi unosom adrese polazišta
                i odredišta. Međutim, registrirani korisnici imaju dodatne
                pogodnosti, poput praćenja historije vožnji i korištenje kredita
                u aplikaciji za plaćanje.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Kako mogu platiti vožnju?
            </div>
            <div className="collapse-content">
              <p>
                Plaćanje možete izvršiti gotovinom ili putem aplikacije
                koristeći kreditnu/debitnu karticu ili kredite u aplikaciji. Na
                kraju vožnje možete odabrati željeni način plaćanja.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Kako mogu ocijeniti vozača ili putnika?
            </div>
            <div className="collapse-content">
              <p>
                Nakon završetka vožnje, imat ćete mogućnost ocijeniti vozača ili
                putnika i ostaviti komentar. Ocjene pomažu u održavanju
                kvalitete usluge.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Što učiniti ako izgubim predmet u vozilu?
            </div>
            <div className="collapse-content">
              <p>
                Ako ste nešto zaboravili u vozilu, možete putem aplikacije
                prijaviti izgubljeni predmet korisničkoj podršci. Preporučujemo
                da to učinite što prije.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Kako mogu postati vozač u aplikaciji?
            </div>
            <div className="collapse-content">
              <p>
                Za registraciju kao vozač, morate ispuniti prijavni obrazac
                unutar aplikacije i priložiti potrebne dokumente, poput vozačke
                dozvole i podataka o vozilu. Nakon pregleda i odobrenja, moći
                ćete prihvaćati vožnje.
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
