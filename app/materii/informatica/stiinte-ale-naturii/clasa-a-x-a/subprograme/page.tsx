"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-10";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';
import { tableClass, trClass } from '@/app/class/table';
import { table } from 'console';
import { fractie } from "@/app/class/fractie-container"
import Vector from '@/app/components/Ecuatii/Vectori/Vector';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Subprograme"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    [""],
    [""],
  ]
  
  const [clickedLinkId, setClickedLinkId] = useState<string>(h1);

  const updateClickedLinkId = (newClickedLinkId: string) => {
    setClickedLinkId(newClickedLinkId);
  }

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
              materie="informatică" 
              clasa={10} 
              titluri={titluri}
              isPageContent={true}
              clickedLink={clickedLinkId}
              onLinkClick={updateClickedLinkId}
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
                  <h1>{`${titluri.length > 1 ? `Capitolul ${indexLectie}: ` : ""}${h1}`}</h1>
                  <H2 h2text="Noțiunea de subprogram" indexH2={indexH2("Noțiunea de subprogram")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În programare, un <strong>subprogram</strong> este o secvență de instrucțiuni desemnată să realizeze o anumită sarcină, distinctă, care poate fi reutilizată în cadrul unui program mai mare. Subprogramele contribuie la:
                  </p>
                  <ul className={ulClass}>
                    <li>modularizarea codului (împărțirea în părți mai mici, mai ușor de înțeles);</li>
                    <li>reutilizarea codului;</li>
                    <li>reducerea erorilor și creșterea clarității programului.</li>
                  </ul>
                  <p>
                  Există două tipuri de subprograme:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Funcții</strong>: returnează un rezultat;</li>
                    <li><strong>Proceduri</strong>: execută o serie de acțiuni, fără să returneze direct o valoare.</li>
                  </ul>
                  <H2 h2text="Subprograme în C++" indexH2={indexH2("Subprograme în C++")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O funcție calculează și returnează o valoare. Exemplu în C++:
                  </p>
                  <div
                    className="code-container">
                    <p>
                        <code>{`int patrat (int x) {`}</code>
                    </p>
                    <p>
                        <code className="pl-8">return x*x;</code>
                    </p>
                    <p>
                        <code>{`}`}</code>
                    </p>
                  </div>
                  <p>
                  Apelul se face astfel:
                  </p>
                  <div
                    className="code-container">
                    <p>
                        <code>{`int rezultat = patrat(5); // rezultat = 25`}</code>
                    </p>
                  </div>
                  <p>
                    O <strong>procedură</strong> efectuează acțiuni, fără să returneze valori direct:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`void salut() {`}
                        </code>
                    </p>
                    <p>
                        <code
                            className="pl-8">{`cout << "Bun venit la ora de informatică!";`}</code>
                    </p>
                    <p>
                        <code>{`}`}</code>
                    </p>
                  </div>
                  <p>
                  Apel:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>salut();</code>
                    </p>
                  </div>
                  <H2 h2text="Structura unui subprogram" indexH2={indexH2("Structura unui subprogram")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O funcție conține un nume, o listă de parametri (opțional), un tip de retur, un bloc de instrucțiuni și o instrucțiune de returnare.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`float arieCerc(float r) {`}
                        </code>
                    </p>
                    <p>
                        <code
                            className="pl-8">
                            return 3.14 * r * r;
                        </code>
                    </p>
                    <p>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                  O procedură conține un nume, o listă de parametri (opțional), un bloc de instrucțiuni.
                  </p>
                  <p>
                  Exemplu:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`void afisareMesaj() {`}
                        </code>
                    </p>
                    <p>
                        <code
                            className="pl-8">
                            {`cout << "Aceasta este o procedură!";`}
                        </code>
                    </p>
                    <p>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Definirea și declararea unui subprogram" indexH2={indexH2("Definirea și declararea unui subprogram")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li>Declararea presupune anunțarea existenței subprogramului (opțională în C++, necesară în unele cazuri);</li>
                    <li>Definirea reprezintă scrierea completă a codului subprogramului.</li>
                  </ul>
                  <H2 h2text="Apelul subprogramelor" indexH2={indexH2("Apelul subprogramelor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Funcțiile se pot apela în expresii:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            int a = dublu(4) + 2;
                        </code>
                    </p>
                  </div>
                  <p>
                  Procedurile se apelează simplu:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            afisare();
                        </code>
                    </p>
                  </div>
                  <p>
                  Transmiterea parametrilor la apel se face prin:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>valoare</strong>: se transmite o copie a valorii;</li>
                    <li><strong>referință</strong>: se transmite adresa variabilei originale.</li>
                  </ul>
                  <p>
                  La apelul prin valoare, variabila din subprogram primește o copie. Modificările nu afectează variabila originală.
                  </p>
                  <p>
                    <strong>Transmiterea parametrilor prin valoare:</strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`void modifica(int x) {`}
                        </code>
                    </p>
                    <p>
                        <code
                            className="pl-8">
                            x = x + 5; // doar x local se modifică
                        </code>
                    </p>
                    <p>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Aplicații care folosesc subprograme" indexH2={indexH2("Aplicații care folosesc subprograme")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>Funcție care calculează factorialul unui număr:</strong>
                        <div className="code-container">
                            <p>
                                <code>
                                    {`int factorial(int n) {`}
                                </code>
                            </p>
                            <p
                                className="flex flex-col gap-1">
                                <code
                                    className="pl-8">
                                    {`int f = 1;`}
                                </code>
                                <code
                                    className="pl-8">
                                    {`for (int i = 2; i <= n; ++i)`}
                                </code>
                                <code
                                    className="pl-16">
                                    f *= i;
                                </code>
                                <code
                                    className="pl-8">
                                        return f;
                                </code>
                            </p>
                            <p>
                                <code>
                                    {`}`}
                                </code>
                            </p>
                        </div>
                    </li>
                    <li>
                        <strong>
                            Procedură care verifică dacă un număr este par:
                        </strong>
                        <div className="code-container">
                            <p>
                                <code>
                                    {`void estePar(int x) {`}
                                </code>
                            </p>
                            <p
                                className="flex flex-col gap-1">
                                <code
                                    className="pl-8">
                                        {`if (x%2 == 0)`}
                                </code>
                                <code
                                    className="pl-16">
                                    {`cout << "Numărul este par.";`}
                                </code>
                                <code
                                    className="pl-8">
                                        {`else`}
                                </code>
                                <code
                                    className="pl-16">
                                        {`cout << "Numărul este impar.";`}
                                </code>
                            </p>
                            <p>
                                <code>
                                    {`}`}
                                </code>
                            </p>
                        </div>
                    </li>
                  </ol>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[176px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={titluri.length > 1 ? indexLectie : -1} clickedLink={clickedLinkId} onLinkClick={updateClickedLinkId}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div> 
  )
}

export default page