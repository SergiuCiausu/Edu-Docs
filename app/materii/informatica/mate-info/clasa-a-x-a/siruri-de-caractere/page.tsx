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

  const h1 = "Șiruri de caractere"
  
  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
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
                  <H2 h2text="Generalități" indexH2={indexH2("Generalități")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un <strong>șir de caractere</strong> este o secvență de caractere încheiată cu caracterul nul ('\0'). În C++, șirurile pot fi reprezentate:
                  </p>
                  <ol className={olClass}>
                    <li><strong>Clasic</strong>, ca tablouri de caractere (char[] sau char*);</li>
                    <li><strong>Modern</strong>, cu tipul string din biblioteca {`<string>`}.</li>
                  </ol>
                  <H2 h2text="Citirea și scrierea șirurilor de caractere" indexH2={indexH2("Citirea și scrierea șirurilor de caractere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                        Citire:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            char sir[100];
                        </code>
                        <code>
                            {`cin >> sir; // citește un cuvânt (fără spații)`}
                        </code>
                    </p>
                  </div>
                  <p>
                  Pentru citirea unui șir cu spații:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            cin.getline(sir, 100);
                        </code>
                    </p>
                  </div>
                  <p>
                    Afișare:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                            {`cout << sir;`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Tipul char*" indexH2={indexH2("Tipul char*")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Un șir de caractere este, tehnic, un pointer la primul caracter:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                        char* mesaj = "Salut!"; // constant string literal
                        </code>
                    </p>
                  </div>
                  <p>
                  Este echivalent cu:
                  </p>
                  <div className="code-container">
                    <p>
                        <code>
                        char mesaj[] = {`{'S', 'a', 'l', 'u', 't', '!', '\0'}`};
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Lungimea unui șir de caractere" indexH2={indexH2("Lungimea unui șir de caractere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    {`Funcția strlen din <cstring> determină numărul de caractere (fără '\0'):`}
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            {`#include <iostream>`}
                        </code>
                        <code>
                            {`#include <cstring>`}
                        </code>
                        <code>
                            {`using namespace std;`}
                        </code>
                    </p>
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            char text[] = "informatica";
                        </code>
                        <code>
                            int l = strlen(text); // l = 11
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Copierea și concatenarea șirurilor de caractere" indexH2={indexH2("Copierea și concatenarea șirurilor de caractere")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>Copiere:</strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            char s1[100] = "salut";
                        </code>
                        <code>
                            char s2[100];
                        </code>
                        <code>
                            strcpy(s2, s1); // s2 devine "salut"
                        </code>
                    </p>
                  </div>
                  <p>
                    <strong>
                        Concatenare:
                    </strong>
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            char s1[100] = "infor";
                        </code>
                        <code>
                            char s2[] = "matica";
                        </code>
                        <code>
                            strcat(s1, s2); // s1 devine "informatica"
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Căutarea unui caracter într-un șir" indexH2={indexH2("Căutarea unui caracter într-un șir")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                  Funcția strchr caută prima apariție a unui caracter:
                  </p>
                  <div className="code-container">
                    <p
                        className="flex flex-col gap-1">
                        <code>
                            char text[] = "informatica";
                        </code>
                        <code>
                            char* pozitie = strchr(text, 'a'); // poziție pointer la primul 'a'
                        </code>
                        <code>
                            {`if (pozitie != NULL) {`}
                        </code>
                        <code
                            className="pl-8">
                                {`cout << "Caracterul 'a' se găsește în șir.";`}
                        </code>
                        <code>
                            {`}`}
                        </code>
                    </p>
                  </div>
                  <H2 h2text="Exemple practice" indexH2={indexH2("Exemple practice")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ol className={olClass}>
                    <li>
                        <strong>
                        Numărarea vocalelor dintr-un șir:
                        </strong>
                        <div className="code-container mt-5">
                            <p>
                                <code>
                                    {`int nrVocale(char s[]) {`}
                                </code>
                            </p>
                            <p
                                className="flex flex-col gap-1">
                                <code
                                    className="pl-8">
                                    int cnt = 0;
                                </code>
                                <code
                                    className="pl-8">
                                    {`for (int i = 0; i < strlen(s); i++) {`}
                                </code>
                                <code
                                    className="pl-16">
                                        char c = tolower(s[i]);
                                </code>
                                <code
                                    className="pl-16">
                                        if (strchr("aeiou", c)) cnt++;
                                </code>
                            </p>
                            <p
                                className="flex flex-col gap-1">
                                <code
                                    className="pl-8">
                                    {`}`}
                                </code>
                            </p>
                            <p>
                                <code
                                    className="pl-8">
                                    return cnt;
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
                            Verificare palindrom:
                        </strong>
                        <div className="code-container mt-5">
                            <p>
                                <code>
                                    {`bool estePalindrom(char s[]) {`}
                                </code>
                            </p>
                            <p
                                className="flex flex-col gap-1">
                                <code
                                    className="pl-8">
                                    int i = 0, j = strlen(s) - 1;
                                </code>
                                <code
                                    className="pl-8">
                                    {`while (i < j) {`}
                                </code>
                                <code
                                    className="pl-16">
                                        if (s[i] != s[j]) return false;
                                </code>
                                <code
                                    className="pl-16">
                                        i++; j--;
                                </code>
                                <code
                                    className="pl-8">
                                    {`}`}
                                </code>
                            </p>
                            <p>
                                <code
                                    className="pl-8">
                                    return true;
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