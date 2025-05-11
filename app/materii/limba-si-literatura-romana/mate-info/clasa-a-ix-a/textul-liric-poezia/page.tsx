"use client";

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs'
import Navbar from '@/app/components/Navbar/Navbar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import React, { useEffect } from 'react'
import { useTheme } from "@/context/ThemeContext";
import "@/app/globals.css";
import { H2 } from '@/app/components/PageContent/H2';
import TableOfContents from '@/app/components/PageContent/TableOfContents';
import { titluri } from "@/app/data/capitole-romana-mate-info-9";
import { olClass, ulClass } from '@/app/class/ul';
import H3 from '@/app/components/PageContent/H3';

const page = () => {
  
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);
  
  const h1 = "Textul liric – Poezia"

  const indexLectie = titluri.findIndex(capitol => capitol.h2[0].text === h1) + 1;

  const h2s = titluri[titluri.findIndex(capitol => capitol.h2[0].text === h1)].h3.map(header => header.text)

  const h3s = [
    [""],
    [""],
    [""],
    [""],
    ["Date despre autor", "Publicare", "Curent literar", "Teme și motive", "Specie literară", "Semnificația titlului", "Relații de simetrie/ opoziție", "Două secvențe relevante", "Elemente de limbaj", "Prozodie", "Concluzie"],
  ]

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
              materie="limba și literatura română" 
              clasa={9} 
              titluri={titluri}
              isPageContent={true}
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
                  <H2 h2text="Ce este textul liric?" indexH2={indexH2("Ce este textul liric?")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Textul liric este o specie a <strong>genului liric</strong>, în care autorul își exprimă <strong>în mod direct</strong> propriile stări, sentimente, emoții sau idei. Este, în general, scris la persoana I și are un caracter subiectiv.
                  </p>
                  <p>
                    Poezia este principala formă de realizare a textului liric.
                  </p>
                  <H2 h2text="Trăsături ale liricului" indexH2={indexH2("Trăsături ale liricului")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <ul className={ulClass}>
                    <li><strong>Prezența eului liric</strong> – vocea poetică ce exprimă trăiri interioare.</li>
                    <li><strong>Caracterul subiectiv</strong> – exprimarea directă a emoțiilor.</li>
                    <li><strong>Limbaj artistic</strong> – bogat în figuri de stil.</li>
                    <li><strong>Structura specifică</strong> – versuri, strofe, ritm și rimă.</li>
                    <li><strong>Motive literare</strong> – elemente repetitive cu semnificație simbolică (natura, dorul, visul, timpul, moartea, iubirea etc.).</li>
                  </ul>
                  <H2 h2text="Eu liric și sentimentele exprimate" indexH2={indexH2("Eu liric și sentimentele exprimate")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    Eul liric este vocea care se exprimă în poezie. Nu este neapărat autorul, ci o <strong>construcție artistică</strong> prin care sunt transmise:
                  </p>
                  <ul className={ulClass}>
                    <li>iubirea, dorul, singurătatea (ex: în poezia romantică);</li>
                    <li>melancolia, visarea, resemnarea (în lirica filozofică);</li>
                    <li>entuziasmul, admirația, revolta (în lirica patriotică sau socială).</li>
                  </ul>
                  <H2 h2text="Figuri de stil și versificație" indexH2={indexH2("Figuri de stil și versificație")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <p>
                    <strong>
                      Figuri de stil frecvente:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Epitetul</strong> – exprimă o calitate poetică („lacul codrilor albastru”);</li>
                    <li><strong>Metafora</strong> – exprimă o comparație subînțeleasă („noaptea gândurilor mele”);</li>
                    <li><strong>Personificarea</strong> – atribuie însușiri omenești elementelor neînsuflețite („luna plânge peste ape”);</li>
                    <li><strong>Repetiția</strong> – accentuează o idee sau un sentiment.</li>
                  </ul>
                  <p>
                    <strong>
                      Elemente de versificație:
                    </strong>
                  </p>
                  <ul className={ulClass}>
                    <li><strong>Vers</strong> – un rând din poezie.</li>
                    <li><strong>Strofă</strong> – un grup de versuri.</li>
                    <li><strong>Rimă</strong> – potrivirea sunetelor la sfârșitul versurilor.</li>
                    <li><strong>Ritm</strong> – succesiunea accentelor în versuri.</li>
                    <li><strong>Tipuri de rimă</strong>: împerecheată (aabb), încrucișată (abab), îmbrățișată (abba).</li>
                  </ul>
                  <H2 h2text="Studiu de caz: „Floare albastră” de Mihai Eminescu" indexH2={indexH2("Studiu de caz: „Floare albastră” de Mihai Eminescu")} indexLectie={titluri.length > 1 ? indexLectie : -1}></H2>
                  <H3 h3text="Date despre autor" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Date despre autor") : -1}></H3>
                  <p>
                    Considerat ultimul mare poet romantic național și universal, Mihai Eminescu și-a desfășurat activitatea literară în perioada marilor clasici. Opera sa vastă se remarcă, în special, prin universul imaginar, vast și înnoitor. Eminescu este cunoscut pentru capodopera literară „Luceafărul”, dar și pentru poeziile „Ce te legeni”, „Lacul”, sau „Floare albastră”.
                  </p>
                  <H3 h3text="Publicare" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Publicare") : -1}></H3>
                  <p>
                    Aceasta din urmă a fost publicată în anul 1873 în revista „Convorbiri literare” și, ulterior, a fost inclusă în volumul antum eminescian, „Poesii”, în anul 1883.
                  </p>
                  <H3 h3text="Curent literar" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Curent literar") : -1}></H3>
                  <p>
                    Poezia „Floare albastră” se încadrează în curentul literar romantism, care s-a desfășurat începând cu a doua jumătate a secolului al XVIII-lea, în Europa, și care promovează o nouă viziune artistică, ca artă de manifestare neîngrădită a originalității, fanteziei și sincerității sufletești. Această mișcare se caracterizează prin identificarea unor surse de inspirație din domenii precum istoria, natura, sau folclorul, prin utilizarea procedeului artistic al antitezei, prin retragerea în lumea trecutului idealizat sau în cea a visului, prin apelarea la toate straturile limbii, precum și prin combinarea tuturor acestor trăsături.
                  </p>
                  <p>
                    „Floare albastră” este un poem romantic, iar utilizarea antitezei este o trăsătură importantă a curentului, utilizată de poetul român pentru a exprima incompatibilitatea dintre omul comun și geniu, dintre planul terestru și cel cosmic, dintre efemer și etern. Opoziția devine principala sursă a neîmplinirii în iubire. Prin extrapolarea semnificației antitezei, se poate observa conturarea naturii duale a ființein umane.
                  </p>
                  <p>
                    O altă trăsătură a romantismului este reprezentată de libertatea absolută în alegerea speciilor literare. Poezia îmbină idila cu pastelul și meditația, relevate prin motive romantice, recurente în lirica eminesciană.
                  </p>
                  <H3 h3text="Teme și motive" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Teme și motive") : -1}></H3>
                  <p>
                    Tema poeziei „Floare albastră” este iubirea și natura. Iubirea reprezintă o cale de cunoaștere, o aspirație către absolut, îmbinându-se perfect cu natura ocrotitoare, care relevă sentimentele umane. Motivele cele mai importante care susțin această temă sunt cerul, norii, stelele, codrul, sărutarea și balta.
                  </p>
                  <H3 h3text="Specie literară" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Specie literară") : -1}></H3>
                  <p>
                    Specia literară a acestei poezii, ilustrând antiteza dintre omul comun și condiția de geniu, este redată prin lirica măștilor, care stă la baza discursului dintre cele două ipostaze.
                  </p>
                  <H3 h3text="Semnificația titlului" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Semnificația titlului") : -1}></H3>
                  <p>
                    Titlul este analitic, fiind alcătuit dintr-un substantiv comun, articulat nehotărât, „floare”, ce reprezintă un simbol al vieții, gingășiei și purității, specifice idealului feminin. Determinantul adjectival „albastră” reprezintă un epitet cromatic ce simbolizează infinitul cerului sau al mării. Această sintagmă reprezintă aspirația către fericirea veșnică prin iubire.
                  </p>
                  <H3 h3text="Relații de simetrie/ opoziție" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Relații de simetrie/ opoziție") : -1}></H3>
                  <p>
                    Opera este compusă din 14 catrene și patru secvențe lirice: reproșul iubitei, reacția meditativă a geniului, chemarea prezenței feminine și meditația finală a ipostazei masculine. Poezia se remarcă prin alternarea planurilor antitetice: cosmic, specific ființei superioare, respectiv terestru, specific omului comun.
                  </p>
                  <p>
                    Din perspectiva relației de simetrie, textul este alcătuit din două intervenții monologate ale prezenței feminine și două reacții meditative ale geniului.
                  </p>
                  <H3 h3text="Două secvențe relevante" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Două secvențe relevante") : -1}></H3>
                  <p>
                    O secvență relevantă din poezia „Floare albastră” este reprezentată de al doilea pasaj liric, alcătuit dintr-o singură strofă, în care este redată reacția meditativă a geniului derivată din incompatibilitatea dintre cele două planuri. Apropierea sufletească a celor doi îndrăgostiți este marcată prin prezența apelativului diminutival „mititica”, a adverbului de mod cu valoare simbolică, „dulce”, și a interjecției de factură afectivă, „ah!”.
                  </p>
                  <p>
                    Al treilea pasaj liric conturează o altă secvență relevantă din poezie, alcătuit din opt strofe, ce constituie un monolog al prezenței feminine, o chemare la iubire, prin intermediul visului, un motiv romantic al retragerii din realitate într-o lume idealizată, prielnică împlinirii sufletești. Elementele simbolice, precum „codrul cu verdeață”, „stânca”, sau „luna”, ale spațiului sacru, îmbină terestrul cu comicul, marcând detașarea de contingent.
                  </p>
                  <H3 h3text="Elemente de limbaj" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Elemente de limbaj") : -1}></H3>
                  <p>
                    Totuși, diferența dintre cele două dimensiuni este păstrată prin alternarea timpurilor verbale: intervențiile monologate ale iubitei sunt redate cu ajutorul verbelor la timpurile prezent și viitor, în timp ce cugetările geniului sunt redate folosind verbele la timpurile trecut și prezent. De asemenea, nuanțarea este continuată de îmbinarea formelor populare cu termenii livrești: „mi-i spune”, „voi cerca”, „nime-n lume”.
                  </p>
                  <H3 h3text="Prozodie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Prozodie") : -1}></H3>
                  <p>
                    Poezia are o muzicalitate aparte, conferită de elementele de prozodie, precum măsura de șapte-opt silabe, rima îmbrățișată și ritmul trohaic.
                  </p>
                  <H3 h3text="Concluzie" indexH3={h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].length > 1 ? h3s[h2s.findIndex(h2 => h2 === "Studiu de caz: „Floare albastră” de Mihai Eminescu")].findIndex(h3 => h3 === "Concluzie") : -1}></H3>
                  <p>
                    În final, poezia „Floare albastră” de Mihai Eminescu este o capodoperă a literaturii române, un poem romantic complex și rafinat, ce ilustrează o sinteză a neîmplinirii ființei superioare. Eminescu se dovedește a fi un fin observator al psihologiei umane, trăsătură care se remarcă prin reușita de a ilustra o iubire idealizată, imposibil de realizat în planul terestru.
                  </p>
                </div>
                <div
                  className="w-[237px] h-[85vh] pt-17 top-[155px] sticky overflow-y-auto">
                  <TableOfContents toc={toc} indexLectie={indexLectie}/>
                </div>
              </div>
            </div>
          </main>
        </section>
    </div>
  )
}

export default page