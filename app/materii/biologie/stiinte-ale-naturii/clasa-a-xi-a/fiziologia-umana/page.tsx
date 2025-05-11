"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-bio-stiinte-ale-naturii-11";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Fiziologia umană"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Structura sistemului nervos", "Conducerea impulsurilor nervoase", "Reflexele și procesarea informației"],
    ["Glandele endocrine și hormonii", "Reglarea hormonală"],
    ["Structura și funcțiile inimii și vaselor sanguine", "Circulația și transportul"],
    ["Mecanica respirației", "Schimburile gazoase"],
    ["Organele și rolurile lor", "Procesele digestive"],
    ["Structura sistemului urinar", "Formarea urinei"],
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
              profil="științe ale naturii" 
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
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                  <h1>{`Capitolul ${indexLectie}: ${h1}`}</h1>
                  <p>
                  Fiziologia umană studiază funcționarea sistemelor de organe din corpul uman, precum și modul în care acestea colaborează pentru menținerea homeostaziei – echilibrul intern necesar vieții.
                  </p>
                  <H2 h2text="Sistemul nervos" indexH2={indexH2("Sistemul nervos")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Structura sistemului nervos" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].findIndex(h3 => h3 === "Structura sistemului nervos") : -1}></H3>
                  <p>
                  Sistemul nervos este alcătuit din:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Sistemul nervos central (SNC)</strong>: creierul și măduva spinării – coordonează activitatea organismului;</li>
                    <li><strong>Sistemul nervos periferic (SNP)</strong>: nervi și ganglioni – transmite informații între SNC și restul corpului.</li>
                  </ul>
                  <H3 h3text="Conducerea impulsurilor nervoase" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].findIndex(h3 => h3 === "Conducerea impulsurilor nervoase") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Neuronii</strong> sunt celulele nervoase care generează și conduc impulsuri electrice.</li>
                    <li>Impulsul nervos este transmis printr-o succesiune de potențiale de acțiune de-a lungul axonului.</li>
                    <li>La nivelul sinapselor, transmiterea are loc chimic prin neurotransmițători (ex: dopamină, acetilcolină).</li>
                  </ul>
                  <H3 h3text="Reflexele și procesarea informației" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul nervos")].findIndex(h3 => h3 === "Reflexele și procesarea informației") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Reflexul</strong> este un răspuns automat la un stimul (ex: retragerea mâinii de la un obiect fierbinte).</li>
                    <li>Circuitul reflex include: receptor → neuron senzitiv → centru nervos → neuron motor → efector (mușchi sau glandă).</li>
                  </ul>
                  <H2 h2text="Sistemul endocrin" indexH2={indexH2("Sistemul endocrin")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Glandele endocrine și hormonii" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul endocrin")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul endocrin")].findIndex(h3 => h3 === "Glandele endocrine și hormonii") : -1}></H3>
                  <p>
                  Glandele endocrine eliberează hormoni direct în sânge. Exemple:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Hipofiza</strong> – controlează alte glande și creșterea.</li>
                    <li><strong>Tiroida</strong> – reglează metabolismul.</li>
                    <li><strong>Suprarenalele</strong> – produc adrenalină și cortizol.</li>
                    <li><strong>Pancreasul</strong> – secretă insulină și glucagon.</li>
                  </ul>
                  <H3 h3text="Reglarea hormonală" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul endocrin")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul endocrin")].findIndex(h3 => h3 === "Reglarea hormonală") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Reglarea hormonală se realizează prin <strong>feedback negativ</strong> (ex: scăderea nivelului de glucoză în sânge inhibă secreția de insulină).</li>
                    <li>Feedback-ul asigură echilibrul funcțiilor organismului.</li>
                  </ul>
                  <H2 h2text="Sistemul circulator" indexH2={indexH2("Sistemul circulator")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Structura și funcțiile inimii și vaselor sanguine" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul circulator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul circulator")].findIndex(h3 => h3 === "Structura și funcțiile inimii și vaselor sanguine") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Inima</strong> este un organ muscular format din patru camere (2 atrii și 2 ventricule) și pompează sângele prin corp.</li>
                    <li>
                        <strong>Vasele de sânge</strong> sunt:
                        <ul className={ulClass}>
                            <li><strong>Artere</strong> – transportă sângele de la inimă spre țesuturi.</li>
                            <li><strong>Vene</strong> – transportă sângele înapoi la inimă.</li>
                            <li><strong>Capilare</strong> – locul schimburilor dintre sânge și celule.</li>
                        </ul>
                    </li>
                  </ul>
                  <H3 h3text="Circulația și transportul" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul circulator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul circulator")].findIndex(h3 => h3 === "Circulația și transportul") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Circulația mare</strong>: între inimă și corp.</li>
                    <li><strong>Circulația mică</strong>: între inimă și plămâni.</li>
                    <li>Sângele transportă oxigen, nutrienți, hormoni și elimină dioxidul de carbon și alte deșeuri.</li>
                  </ul>
                  <H2 h2text="Sistemul respirator" indexH2={indexH2("Sistemul respirator")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Mecanica respirației" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul respirator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul respirator")].findIndex(h3 => h3 === "Mecanica respirației") : -1}></H3>
                  <ul className={ulClass}>
                    <li>Inspirația și expirația se realizează prin contracția/relaxarea diafragmei și a mușchilor intercostali.</li>
                    <li>Aerul pătrunde prin cavitatea nazală → faringe → trahee → bronhii → bronhiole → alveole.</li>
                  </ul>
                  <H3 h3text="Schimburile gazoase" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul respirator")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul respirator")].findIndex(h3 => h3 === "Schimburile gazoase") : -1}></H3>
                  <ul className={ulClass}>
                    <li>La nivelul alveolelor pulmonare, oxigenul difuzează în sânge, iar dioxidul de carbon este eliminat.</li>
                    <li>Aceste procese permit oxigenarea celulelor și eliminarea CO₂ rezultat din respirația celulară.</li>
                  </ul>
                  <H2 h2text="Sistemul digestiv" indexH2={indexH2("Sistemul digestiv")} indexLectie={indexLectie}></H2>
                  <H3 h3text="Organele și rolurile lor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul digestiv")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul digestiv")].findIndex(h3 => h3 === "Organele și rolurile lor") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Cavitatea bucală</strong> – masticație și digestie inițială.</li>
                    <li><strong>Esofag</strong> – transportul bolului alimentar.</li>
                    <li><strong>Stomac</strong> – digestia proteică (pepsină, acid clorhidric).</li>
                    <li><strong>Intestin subțire</strong> – digestia completă și absorbția nutrienților.</li>
                    <li><strong>Ficatul</strong> – produce bila.</li>
                    <li><strong>Pancreasul</strong> – secretă enzime digestive și insulină.</li>
                  </ul>
                  <H3 h3text="Procesele digestive" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul digestiv")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul digestiv")].findIndex(h3 => h3 === "Procesele digestive") : -1}></H3>
                  <ul className={ulClass}>
                    <li><strong>Digestia mecanică</strong> – fragmentarea alimentelor.</li>
                    <li><strong>Digestia chimică</strong> – descompunerea macromoleculelor (proteine, glucide, lipide).</li>
                    <li>Nutrienții (aminoacizi, glucoză, acizi grași) sunt absorbiți în sânge la nivelul vilozităților intestinale.</li>
                  </ul>
                  <H2 h2text="Sistemul excretor" indexH2={indexH2("Sistemul excretor")} indexLectie={indexLectie}></H2>
                    <H3 h3text="Structura sistemului urinar" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul excretor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul excretor")].findIndex(h3 => h3 === "Structura sistemului urinar") : -1}></H3>
                    <ul className={ulClass}>
                        <li>Format din: <strong>rinichi, uretere, vezică urinară, uretră</strong>.</li>
                        <li><strong>Rinichii</strong> filtrează sângele și elimină produși de excreție (uree, săruri).</li>
                    </ul>
                    <H3 h3text="Formarea urinei" indexH3={h3s[h2s.findIndex(h2 => h2 === "Sistemul excretor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Sistemul excretor")].findIndex(h3 => h3 === "Formarea urinei") : -1}></H3>
                    <ul className={ulClass}>
                        <li>
                            Urina se formează în <strong>nefroni</strong>, prin:
                            <ul className={ulClass}>
                                <li><strong>Filtrare</strong> – plasma trece în capsula Bowman.</li>
                                <li><strong>Reabsorbție</strong> – substanțele utile revin în sânge.</li>
                                <li><strong>Secreție</strong> – eliminarea activă a unor ioni sau toxine.</li>
                            </ul>
                        </li>
                        <li>Urina ajunge prin uretere în vezica urinară și este eliminată prin uretră.</li>
                    </ul>
                    <p>
                    Sistemele organismului colaborează pentru susținerea vieții. Sistemul nervos reglează rapid activitățile prin impulsuri, iar cel endocrin prin hormoni. Inima și vasele transportă substanțe esențiale către celule. Plămânii asigură schimburile de gaze, iar digestia furnizează nutrienți. Rinichii elimină deșeurile metabolice și mențin echilibrul intern.
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

export default page