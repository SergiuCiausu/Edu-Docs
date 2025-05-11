"use client";

import Navbar from '@/app/components/Navbar/Navbar';
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react'
import { titluri } from "@/app/data/materii";
import { useRouter } from 'next/navigation';
import { ulClass } from '../class/ul';
import Link from 'next/link';

const page = () => {

  const { theme, setTheme } = useTheme();

  const router = useRouter();

  const programaScolaraLink = "materii";
  
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
            link: "informatica"
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
                className="flex gap-5">
                <div
                  className="py-16 flex-1">
                    <h1>Materii școlare</h1>
                    <p>
                    Parcurge programa școlară și caută noțiunile care te interesează din toată materia pentru a umple fiecare gol de cunoștințe.
                    </p>
                    <H2 h2text="Alege materia"></H2>
                    <div
                        className={`grid grid-cols-2 gap-5 w-full`}>
                        {capitole.map((capitol, index) => (
                            <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/${capitol.link}`)}>{capitol.nume}</button> 
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page