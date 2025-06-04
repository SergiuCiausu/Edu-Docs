"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';

const Page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Sistemul respirator"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Componentele sistemului respirator"],
    [""],
    ["Inspirația", "Expirația"],
    [""],
    ["Controlul respirației", "Adaptări fiziologice"],
  ]

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
              profil="științe sociale" 
              materie="biologie" 
              clasa={10} 
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Sistemul respirator este responsabil pentru asigurarea aportului de oxigen necesar celulelor și pentru eliminarea dioxidului de carbon rezultat din metabolismul celular. Prin intermediul respirației, organismul menține echilibrul gazelor din sânge și contribuie la homeostazia internă.
                  </p>
                  <H2 h2text="Structura și funcțiile sistemului respirator" indexH2={indexH2("Structura și funcțiile sistemului respirator")} indexLectie={indexLectie}></H2>
                  <p>
                  Sistemul respirator este alcătuit dintr-un ansamblu de organe care permit circulația aerului din mediul exterior până la nivelul alveolelor pulmonare.
                  </p>
                  <H3 h3text="Componentele sistemului respirator:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemului respirator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Structura și funcțiile sistemului respirator")].findIndex(h3 => h3 === "Componentele sistemului respirator") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li><strong>Cavitatea nazală</strong> – încălzește, umezește și filtrează aerul inspirat;</li>
                        <li><strong>Faringe</strong> – canal comun pentru aer și alimente;</li>
                        <li><strong>Laringe</strong> – conține corzile vocale și este implicat în fonatie;</li>
                        <li><strong>Trahee</strong> – tub cartilaginos care conduce aerul spre plămâni;</li>
                        <li><strong>Bronhii</strong> – două ramificații ale traheei care pătrund în fiecare plămân;</li>
                        <li><strong>Bronhiole</strong> – ramificații fine ale bronhiilor, ce duc aerul spre alveole;</li>
                        <li><strong>Alveole pulmonare</strong> – structuri microscopice unde au loc schimburile gazoase;</li>
                        <li><strong>Plămânii</strong> – organe pereche aflate în cavitatea toracică, înconjurate de pleură.</li>
                  </ul>
                  <H2 h2text="Organitele implicate în respirație: trahee, bronhii, alveole" indexH2={indexH2("Organitele implicate în respirație: trahee, bronhii, alveole")} indexLectie={indexLectie}></H2>
                  <ul
                    className={ulClass}>
                        <li><strong>Traheea</strong> este un tub flexibil, susținut de inele cartilaginoase, care asigură un flux constant de aer către bronhii.</li>
                        <li><strong>Bronhiile</strong> se ramifică în interiorul plămânilor, conducând aerul către toate zonele pulmonare.</li>
                        <li><strong>Alveolele</strong> sunt saci microscopici cu pereți foarte subțiri (un strat de celule epiteliale), înconjurați de capilare. Aici se realizează schimbul de gaze între aerul inspirat și sânge.</li>
                  </ul>
                  <H2 h2text="Mecanismul respirației" indexH2={indexH2("Mecanismul respirației")} indexLectie={indexLectie}></H2>
                  <p>
                  Respirația cuprinde două faze:
                  </p>
                  <H3 h3text="Inspirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].findIndex(h3 => h3 === "Inspirația") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este un proces activ, în care <strong>diafragma se contractă</strong> și coboară, iar <strong>mușchii intercostali externi ridică coastele</strong>, mărind volumul toracic.</li>
                        <li>Presiunea din plămâni scade sub presiunea atmosferică, iar aerul pătrunde în plămâni.</li>
                  </ul>
                  <H3 h3text="Expirația" indexH3={h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Mecanismul respirației")].findIndex(h3 => h3 === "Expirația") : -1}></H3>
                  <ul
                    className={ulClass}>
                        <li>Este, în mod obișnuit, un proces pasiv, în care <strong>mușchii inspiratori se relaxează</strong>, volumul toracic scade, iar aerul este eliminat datorită creșterii presiunii în alveole.</li>
                  </ul>
                  <H2 h2text="Schimburile gazoase la nivelul alveolelor" indexH2={indexH2("Schimburile gazoase la nivelul alveolelor")} indexLectie={indexLectie}></H2>
                  <p>
                  Schimburile de gaze se realizează prin <strong>difuzie</strong>, în funcție de gradientul de presiune:
                  </p>
                  <ul 
                    className={ulClass}>
                        <li><strong>Oxigenul</strong> din aerul alveolar trece în capilare și se leagă de hemoglobina din globulele roșii.</li>
                        <li><strong>Dioxidul de carbon</strong> din sânge trece în alveole și este eliminat prin expirație.</li>
                  </ul>
                  <p>
                  Suprafața totală a alveolelor este foarte mare (~70 m²), ceea ce facilitează un schimb eficient de gaze.
                  </p>
                  <H2 h2text="Controlul respirației și adaptările fiziologice" indexH2={indexH2("Controlul respirației și adaptările fiziologice")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Controlul respirației:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].findIndex(h3 => h3 === "Controlul respirației") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li>Este realizat de <strong>centrii nervoși din bulbul rahidian și puntea cerebrală</strong>, care reglează ritmul și profunzimea respirației.</li>
                        <li>Nivelul de <strong>CO₂</strong> din sânge este principalul factor care stimulează centrii respiratori.</li>
                        <li>Receptorii chimici din <strong>aortă și carotidă</strong> monitorizează nivelurile de oxigen și dioxid de carbon.</li>
                  </ul>
                  <H3 h3text="Adaptări fiziologice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Controlul respirației și adaptările fiziologice")].findIndex(h3 => h3 === "Adaptări fiziologice") : -1}></H3>
                  <ul 
                    className={ulClass}>
                        <li>În timpul efortului fizic, frecvența și amplitudinea respirației cresc.</li>
                        <li>În condiții de altitudine (oxigen redus), organismul mărește producția de hemoglobină.</li>
                        <li>Antrenamentele fizice îmbunătățesc eficiența schimburilor gazoase și capacitatea pulmonară.</li>
                  </ul>
                  <p>
                  Sistemul respirator asigură schimburile de gaze între organism și mediu. Principalele organe: cavitatea nazală, trahee, bronhii, bronhiole, alveole și plămâni. Inspirația este un proces activ, iar expirația, pasivă (în repaus). Schimburile gazoase se realizează la nivelul alveolelor prin difuzie. Respirația este controlată nervos și influențată de nivelul gazelor din sânge.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default Page