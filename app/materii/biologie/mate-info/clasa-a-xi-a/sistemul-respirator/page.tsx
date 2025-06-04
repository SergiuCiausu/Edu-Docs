"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import H3 from '@/app/components/PageContent/H3';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { titluri } from '@/app/data/capitole-bio-mate-info-11';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { ulClass, olClass } from '@/app/class/ul';
import { Inder } from 'next/font/google';

const Page = () => {
  
  const { theme, setTheme } = useTheme();
  
    const [clickedLinkId, setClickedLinkId] = useState<string>("");
    
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const h2s = [
      "Structura și funcțiile sistemului respirator",
      "Organitele implicate în respirație: trahee, bronhii, alveole",
      "Mecanismul respirației",
      "Schimburile gazoase la nivelul alveolelor",
      "Controlul respirației și adaptările fiziologice"
    ]

    const h3s = [
      ["Componentele principale"],
      ["Traheea", "Bronhiile și bronhiolele", "Alveolele"],
      ["Inspirația", "Expirația"],
      [""],
      ["Factori de reglare", "Adaptări fiziologice"]
    ]

    const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === "Sistemul respirator") + 1;

    const toc = h2s.map((h2, index) => {
      return {h2: h2, h3: h3s[index]};
    });

    const indexH2 = ( h2text: string ) => {
      return h2s.findIndex(h2 => h2 === h2text);
    }

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              profil="mate info" 
              materie="biologie" 
              clasa={11} 
              titluri={titluri} 
              isPageContent={true}  
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto">
              <Breadcrumbs theme={theme}/>
              <div
                className="flex gap-12 relative">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: Sistemul respirator`}</h1>
                  <p>
                  <strong>Sistemul respirator</strong> este responsabil cu realizarea schimburilor de gaze dintre organism și mediul înconjurător, asigurând astfel aportul de oxigen necesar celulelor și eliminarea dioxidului de carbon rezultat din procesele metabolice.
                  </p>
                  <H2 h2text="Structura și funcțiile sistemului respirator" indexH2={indexH2("Structura și funcțiile sistemului respirator")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul respirator este alcătuit dintr-un ansamblu de organe specializate care asigură <strong>conducerea aerului, filtrarea, încălzirea și umidificarea</strong> acestuia, precum și <strong>realizarea schimburilor gazoase</strong>.
                  </p>
                  <H3 h3text="Componentele principale:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemului respirator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemului respirator")].findIndex(h3 => h3 === "Componentele principale") : -1}></H3>
                  <ul  
                    className={ulClass}>
                        <li><strong>Cavitatea nazală</strong> – Filtrează, încălzește și umidifică aerul inspirat.</li>
                        <li><strong>Faringele</strong> – Comunică cu cavitatea bucală și nazală; dirijează aerul spre laringe.</li>
                        <li><strong>Laringele</strong> – Conține corzile vocale și permite trecerea aerului spre trahee.</li>
                        <li><strong>Traheea</strong> – Tub elastic ce conduce aerul spre bronhii; este susținută de inele cartilaginoase.</li>
                        <li><strong>Bronhiile</strong> – Ramificații ale traheei care pătrund în plămâni și se divid în bronhiole.</li>
                        <li><strong>Plămânii</strong> – Organele principale ale respirației, unde se desfășoară schimburile gazoase.</li>
                        <li><strong>Alveolele pulmonare</strong> – Structuri microscopice în care se realizează schimbul de gaze.</li>
                  </ul>
                  <H2 h2text="Organitele implicate în respirație: trahee, bronhii, alveole" indexH2={indexH2("Organitele implicate în respirație: trahee, bronhii, alveole")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Traheea" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].findIndex(h3 => h3 === "Traheea"): -1}></H3>
                  <p>
                  Este un canal respirator flexibil, căptușit cu un epiteliu ciliat și mucus, care ajută la eliminarea particulelor străine. Traheea se bifurcă în cele două <strong>bronhii principale</strong>.
                  </p>
                  <H3 h3text="Bronhiile și bronhiolele" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].findIndex(h3 => h3 === "Bronhiile și bronhiolele") : -1}></H3>
                  <p>
                  Conduc aerul în interiorul plămânilor și se ramifică progresiv până ajung la <strong>alveole</strong>. Pereții lor sunt prevăzuți cu musculatură netedă, ceea ce permite reglarea fluxului de aer.
                  </p>
                  <H3 h3text="Alveolele" indexH3={h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Organitele implicate în respirație: trahee, bronhii, alveole")].findIndex(h3 => h3 === "Alveolele") : -1}></H3>
                  <p>
                  Sunt <strong>saci microscopici</strong> formați dintr-un epiteliu subțire, înconjurați de capilare sanguine. Aici are loc <strong>difuzia gazelor</strong>: oxigenul pătrunde în sânge, iar dioxidul de carbon este eliminat din organism.
                  </p>
                  <H2 h2text="Mecanismul respirației" indexH2={indexH2("Mecanismul respirației")} indexLectie={indexLectie}></H2>
                  <p>
                  Respirația presupune două faze:
                  </p>
                  <H3 h3text="Inspirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].findIndex(h3 => h3 === "Inspirația") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este un proces activ care necesită contracția mușchiului <strong>diafragm</strong> și a mușchilor intercostali.</li>
                        <li>Cavitatea toracică se dilată, iar presiunea internă scade → aerul pătrunde în plămâni.</li>
                  </ul>
                  <H3 h3text="Expirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].findIndex(h3 => h3 === "Expirația") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este un proces <strong>pasiv</strong> (în repaus) sau <strong>activ</strong> (în efort).</li>
                        <li>Diafragma și mușchii intercostali se relaxează → volumul toracic scade → aerul este expulzat din plămâni.</li>
                  </ul>
                  <H2 h2text="Schimburile gazoase la nivelul alveolelor" indexH2={indexH2("Schimburile gazoase la nivelul alveolelor")} indexLectie={indexLectie}></H2>
                  <p>
                  În <strong>alveole</strong>, oxigenul din aerul inspirat <strong>difuzează</strong> prin peretele alveolar în sângele capilar, legându-se de hemoglobină.
                  </p>
                  <p>
                  Simultan, dioxidul de carbon acumulat în sânge difuzează în sens invers, din capilare în alveole, și este <strong>eliminat</strong> prin expirație.
                  </p>
                  <p>
                  Acest proces de <strong>schimb gazos</strong> este esențial pentru menținerea echilibrului acido-bazic și buna funcționare a tuturor organelor.
                  </p>
                  <H2 h2text="Controlul respirației și adaptările fiziologice" indexH2={indexH2("Controlul respirației și adaptările fiziologice")} indexLectie={indexLectie}></H2>
                  <p>
                  Respirația este controlată de <strong>centrii respiratori</strong> localizați în <strong>bulbul rahidian</strong> și <strong>puntea cerebrală</strong>, care reglează frecvența și amplitudinea mișcărilor respiratorii în funcție de nevoile organismului.
                  </p>
                  <H3 h3text="Factori de reglare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].findIndex(h3 => h3 === "Factori de reglare") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li><strong>Nivelul de CO₂</strong> – principalul stimulent al centrilor respiratori.</li>
                        <li><strong>pH-ul sanguin</strong> – modificările acestuia influențează direct ventilația.</li>
                        <li><strong>Stimulii nervoși și hormonali</strong> – influențează respirația în situații de stres, efort sau frică.</li>
                  </ul>
                  <H3 h3text="Adaptări fiziologice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].findIndex(h3 => h3 === "Adaptări fiziologice") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>În timpul <strong>efortului fizic</strong>, respirația devine mai frecventă și profundă.</li>
                        <li>În <strong>altitudine</strong>, organismul crește producția de hematii pentru a compensa scăderea presiunii oxigenului.</li>
                        <li>La sportivi, capacitatea pulmonară este crescută, iar eficiența schimburilor gazoase este îmbunătățită.</li>
                  </ul>
                  <p>
                  Sistemul respirator este vital pentru existența vieții, asigurând schimbul de gaze esențial pentru funcționarea celulelor. Înțelegerea structurii și mecanismelor acestui sistem permite nu doar aprecierea complexității corpului uman, ci și învățarea unor măsuri preventive pentru menținerea sănătății respiratorii.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie} clickedLink={clickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default Page