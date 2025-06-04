"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar'
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar'
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { titluri } from "@/app/data/capitole-fizica-mate-info-termodinamica-10";

const Page = () => {

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
                clasa={10} 
                titluri={titluri}
                capitol="termodinamica"
                isPageContent={true}
                isCapitolContent={true}
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
                            <h1>Fizică, Filologie, clasa a X-a, Termodinamică</h1>
                            <p>                    
                            Termodinamica este ramura fizicii care studiază proprietățile macroscópice ale sistemelor fizice și procesele de transfer de energie, în special sub formă de căldură și lucru mecanic. Aceasta analizează relațiile dintre temperatură, căldură, lucru mecanic, presiune și volum, stabilind legi fundamentale care descriu comportamentul sistemelor în echilibru termic.
                            </p>
                            <H2 h2text="Capitole de studiu"></H2>
                            <div
                                className={`grid grid-cols-2 gap-5 w-full`}>
                                {capitole.map((capitol, index) => (
                                   <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/fizica/filologie/clasa-a-x-a/termodinamica/${capitol.link}`)}>{capitol.nume}</button> 
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

export default Page