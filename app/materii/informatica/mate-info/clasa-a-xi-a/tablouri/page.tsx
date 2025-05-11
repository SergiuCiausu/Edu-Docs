"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect, useState } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-info-11";
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

  const h1 = "Tablouri"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    ["Exemplu de tablou unidimensional", "Exemplu de tablou bidimensional"],
    ["Tablouri unidimensionale", "Tablouri bidimensionale"],
    ["Suma elementelor dintr-un vector", "Determinarea valorii maxime", "Numărarea elementelor pare", "Parcurgerea diagonalei principale a unei matrici pătratice"],
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
              profil="mate info" 
              materie="informatică" 
              clasa={11} 
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
                  <H2 h2text="Noțiunea de tablou" indexH2={indexH2("Noțiunea de tablou")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Tabloul</strong> (sau vectorul) este o structură de date omogenă care stochează mai multe valori de același tip, accesibile printr-un index.
                  </p>
                  <p>
                  Tablourile pot fi:
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Unidimensionale</strong> (vectori): o singură linie de date.</li>
                    <li><strong>Bidimensionale</strong> (matrici): mai multe rânduri și coloane.</li>
                  </ul>
                  <H3 h3text="Exemplu de tablou unidimensional:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiunea de tablou")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiunea de tablou")].findIndex(h3 => h3 === "Exemplu de tablou unidimensional") : -1}></H3>
                  <div className="code-container my-5">
                    <p>
                        <code>
                        int v[5]; // tablou de 5 elemente întregi
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Exemplu de tablou bidimensional:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Noțiunea de tablou")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Noțiunea de tablou")].findIndex(h3 => h3 === "Exemplu de tablou bidimensional") : -1}></H3>
                  <div className="code-container my-5">
                    <p>
                        <code>
                        int m[3][4]; // matrice 3x4 (3 rânduri, 4 coloane)
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Citirea și afișarea tablourilor" indexH2={indexH2("Citirea și afișarea tablourilor")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Tablouri unidimensionale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Citirea și afișarea tablourilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Citirea și afișarea tablourilor")].findIndex(h3 => h3 === "Tablouri unidimensionale") : -1}></H3>
                  <p>
                    <strong>
                    Citirea unui tablou:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`int v[100], n;`}
                        </code>
                        <code>
                            {`cin >> n;`}
                        </code>
                        <code>
                            {`for(int i = 0; i < n; i++) {`}
                        </code>
                        <code className="pl-8">
                            {`cin >> v[i];`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Afișarea unui tablou:
                    </strong>
                  </p>
                  <div className="code-container mb-5">
                    <p>
                        <code>
                            {`for(int i = 0; i < n; i++) {`}
                        </code>
                        <code className="pl-8">
                            {`cout << v[i] << " ";`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Tablouri bidimensionale" indexH3={h3s[h2s.findIndex(h2 => h2 === "Citirea și afișarea tablourilor")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Citirea și afișarea tablourilor")].findIndex(h3 => h3 === "Tablouri bidimensionale") : -1}></H3>
                  <p>
                    <strong>
                    Citirea unei matrice:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        int a[100][100], n, m;
                        </code>
                        <code>
                            {`cin >> n >> m;`}
                        </code>
                        <code>
                            {`for(int i = 0; i < n; i++)`}
                        </code>
                        <code className="pl-8">
                            {`for(int j = 0; j < m; j++)`}
                        </code>
                        <code className="pl-16">
                            {`cin >> a[i][j];`}
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                    Afișarea unei matrice:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`for(int i = 0; i < n; i++) {`}
                        </code>
                        <code className="pl-8">
                            {`for(int j = 0; j < m; j++)`}
                        </code>
                        <code className="pl-16">
                            {`cout << a[i][j] << " ";`}
                        </code>
                        <code className="pl-8">
                            {`cout << endl;`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Aplicarea algoritmilor pe tablouri" indexH2={indexH2("Aplicarea algoritmilor pe tablouri")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Suma elementelor dintr-un vector:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].findIndex(h3 => h3 === "Suma elementelor dintr-un vector") : -1}></H3>
                  <div className="code-container my-5">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        int suma = 0;
                        </code>
                        <code>
                            {`for(int i = 0; i < n; i++)`}
                        </code>
                        <code
                            className="pl-8">
                            {`suma += v[i];`}
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Determinarea valorii maxime:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].findIndex(h3 => h3 === "Determinarea valorii maxime") : -1}></H3>
                  <div className="code-container my-5">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        int maxim = v[0];
                        </code>
                        <code>
                            {`for(int i = 1; i < n; i++)`}
                        </code>
                        <code className="pl-8">
                            {`if(v[i] > maxim)`}
                        </code>
                        <code className="pl-16">
                        maxim = v[i];
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Numărarea elementelor pare:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].findIndex(h3 => h3 === "Numărarea elementelor pare") : -1}></H3>
                  <div className="code-container my-5">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                        int nrPare = 0;
                        </code>
                        <code>
                            {`for(int i = 0; i < n; i++)`}
                        </code>
                        <code className="pl-8">
                            {`if(v[i] % 2 == 0)`}
                        </code>
                        <code className="pl-16">
                            nrPare++;
                        </code>
                    </p>
                  </div>
                  <H3 h3text="Parcurgerea diagonalei principale a unei matrici pătratice:" indexH3={h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Aplicarea algoritmilor pe tablouri")].findIndex(h3 => h3 === "Parcurgerea diagonalei principale a unei matrici pătratice") : -1}></H3>
                  <div className="code-container my-5">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`for(int i = 0; i < n; i++)`}
                        </code>
                        <code>
                            {`cout << a[i][i] << " ";`}
                        </code>
                    </p>
                  </div>
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