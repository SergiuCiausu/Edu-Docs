"use client";

import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect } from 'react'
import { titluri } from "@/app/data/materii";
import { useRouter } from 'next/navigation';
import { ulClass } from '../class/ul';
import Link from 'next/link';
import { tocIntroducere } from '../data/introducere';
import TableOfContents from '../components/PageContent/TableOfContents';

const page = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const programaScolaraLink = "materii";
  const eduBotLink = "edubot";
  const eduProfLink = "eduprof";
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark-theme", theme === "dark");
      document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const capitole = [
        {
            nume: "Limba și literatura română",
            link: "limba-si-literatura-romana"
        },
        {
            nume: "Matematică",
            link: "matematica"
        },
        {
            nume: "Informatică",
            link: "info"
        },
        {
            nume: "Fizică",
            link: "fizica"
        },
        {
            nume: "Biologie",
            link: "biologie"
        },
        {
            nume: "Chimie",
            link: "chimie"
        },
        {
            nume: "Istorie",
            link: "istorie"
        },
        {
            nume: "Științe socio-umane",
            link: "stiinte-socio-umane"
        },
        {
            nume: "Limbi străine",
            link: "limbi-straine"
        },
        {
            nume: "Muzică și desen",
            link: "muzica-si-desen"
        },
    ]

    const h2s = tocIntroducere[tocIntroducere.findIndex(capitol => capitol.h2[0].text === "Introducere")].h3.map(header => header.text)

    const h3s = [
      [""],
      [""],
      [""]
    ]
  
    const toc = h2s.map((h2, index) => {
      return {h2: h2, h3: h3s[index]};
    });

  return (
    <div>
      <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
          <aside>
            <Sidebar 
              titluri={titluri}
            />
          </aside>
          <main
            className="flex-1">
            <div
              className="w-[1263px] mx-auto pt-[21.5px]">
              <div
                className="flex gap-12">
                <div
                  className="py-16 flex-1">
                    <h1>Obține note foarte bune cu efort minim pentru învățat</h1>
                    <p>
                    Salutare!!
                    </p>
                    <p>
                    Aruncă un ochi peste metodele pe care ți le punem la dispoziție ca să ai note mai bune și să faci școala să fie mai ușoară:
                    </p>
                    <ul className={ulClass}>
                      <li><Link href={`/${programaScolaraLink}`}><strong>Programa școlară</strong></Link> poate fi stufoasă și alambicată, însă atunci când o ai pe toată la câteva click-uri distanță, într-un singur „manual” digital, lucrurile devin deodată muuult mai ușoare — găsești exact fiecare noțiune pe care trebuie să o știi la fiecare materie de la fiecare profil și fiecare specializare, pentru fiecare clasă de liceu.</li>
                      <li><Link href={`/${eduBotLink}`}><strong>EduBot</strong></Link> te poate ajuta să-ți lămurești micile confuzii care apar inevitabil în timpul studiului, fiind specializat în a răspunde întrebărilor ce se ivesc din urma parcurgerii materiei școlare. Ai o noțiune pe care n-o înțelegi? Pac, te rezolvă EduBot în următoarea clipă.</li>
                      <li><Link href={`/${eduProfLink}`}><strong>EduProf</strong></Link> îți oferă accesul la cei mai bine pregătiți profesori din toată țara. Pentru momentele în care simți că stagnezi în parcursul tău școlar, unul dintre acești profesori te va ajuta să întorci cărțile în favoarea ta. Programează o întâlnire cu un EduProf din confortul casei tale (chiar din confortul patului tău) și fii pregătit să-ți catapultezi progresul.</li>
                    </ul>
                    <H2 h2text="Alege materia"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full mb-4`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/${capitol.link}`)}>{capitol.nume}</button> 
                        ))}
                    </div>
                    <H2 h2text="EduBot"></H2>
                    <p>
                    Fixează-ți noțiunile de bază și micile nelămuriri legate de orice lecție și fă următorul pas în parcursul tău școlar.
                    </p>
                    <Link href={`/${eduBotLink}`} className="page-btn">Vorbește cu Edubot</Link>
                    <H2 h2text="EduProf"></H2>
                    <p>
                    Programează o întâlnire online de 40 de minute pentru a intră în contact cu cei mai buni profesori din țară pentru a face progres masiv și a-ți crește semnificativ notele. 
                    </p>
                    <Link href={`/${eduProfLink}`} className="page-btn">Programează o întâlnire</Link>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page