"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar'
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar'
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { titluri } from "@/app/data/capitole-fizica-mate-info-mecanica-9";

const page = () => {

    const router = useRouter();

    const { theme, setTheme } = useTheme();

    useEffect(() => {
          document.documentElement.classList.toggle("dark-theme", theme === "dark");
          document.documentElement.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    const capitole = titluri.map((capitol, index) => {
        return {
            nume: capitol.h2[0].text,
            link: capitol.h2[0].link
        }
    })

  return (
    <div>
        <Navbar theme={theme} onThemeChange={setTheme}/>
        <section className="flex">
            <aside>
                <Sidebar 
                profil="filologie" 
                materie="fizică" 
                clasa={9} 
                titluri={titluri}
                capitol="mecanică"
                isCapitolContent={true}
                isPageContent={true}
                />
            </aside>
            <main
                className="flex-1">
                <div
                    className="w-[1263px] mx-auto">
                    <Breadcrumbs theme={theme}/>
                    <div
                        className="flex gap-5">
                        <div
                            className="py-16 flex-1">
                            <h1>Fizică, Filologie, clasa a IX-a, Mecanică</h1>
                            <p>                    
                            Mecanica este ramura fizicii care studiază mișcarea corpurilor materiale, cauzele care o determină (forțele), precum și efectele produse de aceste mișcări. Ea analizează legile fundamentale ale mișcării și interacțiunii corpurilor, fiind împărțită în trei mari domenii: cinetică (descrierea mișcării), dinamică (studiul cauzelor mișcării) și statica (analiza echilibrului forțelor). Mecanica stă la baza înțelegerii multor fenomene naturale și a funcționării dispozitivelor tehnice, fiind esențială în științele exacte și aplicate.
                            </p>
                            <H2 h2text="Capitole de studiu"></H2>
                            <div
                                className={`grid grid-cols-2 gap-5 w-full`}>
                                {capitole.map((capitol, index) => (
                                   <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/fizica/filologie/clasa-a-ix-a/mecanica/${capitol.link}`)}>{capitol.nume}</button> 
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