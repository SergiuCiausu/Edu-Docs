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

  const h1 = "Introducere în recursivitate"
  
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
              profil="mate info" 
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
                  <H2 h2text="Prezentare generală" indexH2={indexH2("Prezentare generală")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Recursivitatea</strong> este o tehnică de programare în care o funcție se <strong>apelează pe sine</strong> pentru a rezolva o problemă. Problemele recursive sunt, de obicei, probleme care pot fi <strong>descompuse în subprobleme similare</strong> cu problema originală.
                  </p>
                  <p>
                    Exemplu simplu: calculul <strong>factorialului unui număr</strong>
                  </p>
                  <p>
                  Factorialul unui număr n se definește astfel:
                  </p>
                  <p>
                  n! = n × (n-1)!, cu 0! = 1 (condiția de oprire)
                  </p>
                  <H2 h2text="Modul de realizare a autoapelului" indexH2={indexH2("Modul de realizare a autoapelului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  O funcție recursivă conține două componente esențiale:
                  </p>
                  <ol className={olClass}>
                    <li><strong>Cazul de bază</strong> (condiția de oprire): oprește recursivitatea.</li>
                    <li><strong>Apelul recursiv</strong>: funcția se apelează pe sine cu un parametru mai simplu.</li>
                  </ol>
                  <p>
                    <strong>
                    Exemplu: Factorial (n!)
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`int factorial(int n) {`}
                        </code>
                        <code
                            className="pl-8">
                            if (n == 0) return 1;         // caz de bază
                        </code>
                        <code className="pl-8">
                            return n * factorial(n - 1);  // apel recursiv
                        </code>
                        <code>
                            {`};`}
                        </code>
                    </p>
                  </div>
                  <p>
                  Fiecare apel al funcției stochează temporar rezultatul până când se ajunge la cazul de bază, apoi se reiau calculele „în sus”.
                  </p>
                  <H2 h2text="Cum gândim un algoritm recursiv?" indexH2={indexH2("Cum gândim un algoritm recursiv?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Pentru a scrie un algoritm recursiv:
                  </p>
                  <ol className={olClass}>
                    <li>Identificăm <strong>subproblema și modul de simplificare</strong>.</li>
                    <li>Stabilim o <strong>condiție de oprire</strong> clară.</li>
                    <li>Apelăm funcția recursiv pe o <strong>versiune mai simplă</strong> a datelor.</li>
                  </ol>
                  <p>
                    <strong>
                        Exemplu: Suma primelor n numere naturale
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`int suma(int n) {`}
                        </code>
                        <code
                            className="pl-8">
                            if (n == 1) return 1;      // caz de bază
                        </code>
                        <code
                            className="pl-8">
                            return n + suma(n - 1);    // apel recursiv
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Aplicații recursive" indexH2={indexH2("Aplicații recursive")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Aceste probleme au o definire matematică recursivă.
                  </p>
                  <p>
                    <strong>
                    Ex.1: Fibonacci
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`int fib(int n) {`}
                        </code>
                        <code
                            className="pl-8">
                            if (n == 0 || n == 1) return n;
                        </code>
                        <code className="pl-8">
                        return fib(n - 1) + fib(n - 2);
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                  Observație: Această implementare are complexitate mare – putem optimiza folosind memorare (dynamic programming).
                  </p>
                  <p>
                  Recursivitatea poate fi folosită și pentru:
                  </p>
                  <ul className={ulClass}>
                    <li>parcurgerea arborelui</li>
                    <li>generarea permutărilor</li>
                    <li>rezolvarea labirinturilor</li>
                    <li>explorare combinatorică (backtracking)</li>
                  </ul>
                  <p>
                    <strong>Ex.2: Afișarea cifrelor unui număr de la stânga la dreapta</strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`void afisare(int n) {`}
                        </code>
                        <code className="pl-8">
                            {`if (n < 10) {`}
                        </code>
                        <code className="pl-16">
                            {`cout << n << " ";`}
                        </code>
                        <code className="pl-8">
                            {`} else {`}
                        </code>
                        <code className="pl-16">
                            afisare(n / 10);
                        </code>
                        <code className="pl-16">
                            {`cout << n % 10 << " ";`}
                        </code>
                        <code className="pl-8">
                            {`}`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <p>
                    Pentru afisare(1234) → output: 1 2 3 4
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