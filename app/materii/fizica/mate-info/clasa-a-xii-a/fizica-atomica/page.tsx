"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Navbar from '@/app/components/Navbar/Navbar'
import { H2 } from '@/app/components/PageContent/H2';
import Sidebar from '@/app/components/Sidebar/Sidebar'
import { useTheme } from '@/context/ThemeContext';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { titluri } from "@/app/data/capitole-fizica-mate-info-fizica-atomica-12";

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
                profil="mate info" 
                materie="fizică" 
                capitol="fizică atomică"
                isCapitolContent={true}
                isPageContent={true}
                clasa={12} 
                titluri={titluri}
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
                            <h1>Fizică, Mate-info, clasa a XII-a, Fizică atomică</h1>
                            <p>                    
                            <strong>Fizica atomică</strong> este ramura fizicii care studiază structura, proprietățile și comportamentul atomilor, în special modul în care electronii interacționează cu nucleul atomic și cum aceștia absorb sau emit energie sub formă de radiație electromagnetică. Această disciplină explică fenomene precum <strong>spectrele atomice, modelele atomice, efectul fotoelectric și dualitatea undă-corpuscul</strong>, fiind fundamentul fizicii moderne și al tehnologiilor cuantice.                            </p>
                            <H2 h2text="Capitole de studiu"></H2>
                            <div
                                className={`grid grid-cols-2 gap-5 w-full`}>
                                {capitole.map((capitol, index) => (
                                   <button key={index} className="px-16 py-8 flex items-center justify-center rounded-2xl capitol-btn cursor-pointer" onClick={() => router.push(`/materii/fizica/mate-info/clasa-a-xii-a/fizica-atomica/${capitol.link}`)}>{capitol.nume}</button> 
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