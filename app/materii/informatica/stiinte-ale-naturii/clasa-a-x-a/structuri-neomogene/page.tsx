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
import { titluriCapitole } from '@/app/data/capitole-fizica-mate-info-capitole-10';

const page = () => {

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  const h1 = "Structuri neomogene"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
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
                  <H2 h2text="Tipul struct" indexH2={indexH2("Tipul struct")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  În C++, o structură (struct) este un tip de date definit de utilizator, care grupează mai multe variabile de <strong>tipuri diferite</strong> sub un singur nume.
                  </p>
                  <p>
                    <strong>
                    Definirea unei structuri:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`struct Elev {`}
                        </code>
                        <code className="pl-8">
                            char nume[30];
                        </code>
                        <code className="pl-8">
                            int varsta;
                        </code>
                        <code className="pl-8">
                            float medie;
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                    Aceasta definește un tip de date nou, numit Elev, cu trei câmpuri: nume, varsta, medie.
                  </p>
                  <p>
                    <strong>
                    Declararea unei variabile de tip structură:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            Elev el;
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Accesarea câmpurilor:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p className="flex flex-col gap-1">
                        <code>
                            strcpy(e1.nume, "Andrei");
                        </code>
                        <code>
                        e1.varsta = 16;
                        </code>
                        <code>
                        e1.medie = 9.75;
                        </code>
                    </p>
                    <p>
                        <code>
                            {`cout << e1.nume << " are " << e1.varsta << " ani și media " << e1.medie;`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Înregistrări îmbricate" indexH2={indexH2("Înregistrări îmbricate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Structurile pot <strong>conține alte structuri</strong> ca membri. Acestea se numesc <strong>structuri îmbricate</strong>.
                  </p>
                  <p>
                    <strong>
                    Exemplu:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`struct Data {`}
                        </code>
                        <code className="pl-8">
                            int zi, luna, an;
                        </code>
                        <code>
                            {`};`}
                        </code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`struct Persoana {`}
                        </code>
                        <code
                            className="pl-8">
                                char nume[30];
                        </code>
                        <code
                            className="pl-8">
                                Data dataNasterii;
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                        Utilizare:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        Persoana p;
                        </code>
                        <code>strcpy(p.nume, "Maria");</code>
                        <code>p.dataNasterii.zi = 12;</code>
                        <code>p.dataNasterii.luna = 5;</code>
                        <code>p.dataNasterii.an = 2007;</code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                            <code>
                                {`cout << p.nume << " s-a născut pe "`}
                            </code>
                            <code
                                className="pl-8">
                                {`<< p.dataNasterii.zi << "." `}
                            </code>
                            <code
                                className="pl-8">
                                {`<< p.dataNasterii.luna << "." `}
                            </code>
                            <code
                                className="pl-8">
                                {`<< p.dataNasterii.an;`}
                            </code>
                    </p>
                  </div>
                  <H2 h2text="Înregistrări cu structură variabilă" indexH2={indexH2("Înregistrări cu structură variabilă")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Uneori dorim ca o structură să conțină <strong>mai multe tipuri de date</strong>, dar să folosim <strong>doar unul la un moment dat</strong>. Pentru asta, se combină struct cu union.
                  </p>
                  <p>
                    <strong>union – alocă memorie comună pentru mai multe variabile:</strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`union Valoare {`}
                        </code>
                        <code className="pl-8">
                            int i;
                        </code>
                        <code className="pl-8">
                            float f;
                        </code>
                        <code className="pl-8">
                            char s[20];
                        </code>
                        <code>
                            {`};`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                        Structură cu câmp de discriminare (tip variantă):
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`struct CampVariabil {`}
                        </code>
                        <code className="pl-8">
                            int tip; // 0 = int, 1 = float, 2 = string
                        </code>
                        <code className="pl-8">
                            Valoare v;
                        </code>
                        <code>
                            {`};`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>Utilizare:</strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            CampVariabil x;
                        </code>
                        <code>
                            x.tip = 1;
                        </code>
                        <code>
                            x.v.f = 3.14;
                        </code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`if (x.tip == 1) {`}
                        </code>
                        <code
                            className="pl-8">
                            {`cout << "Valoarea este: " << x.v.f;`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                  Astfel, CampVariabil poate stoca fie un întreg, fie un float, fie un șir, dar doar unul la un moment dat.
                  </p>
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