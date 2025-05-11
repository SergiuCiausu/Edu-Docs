export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const titluri: fullTitluri = [
    {
      h2: [
        {
          text: "Noțiuni și legi fundamentale ale chimiei",
          link: "notiuni-si-legi-fundamentale-ale-chimiei"
        }
      ],
      h3: [
        { 
            text: "Ce este legea conservării masei?",
            link: "ce-este-legea-conservarii-masei"
        },
        { 
            text: "Exemplu simplu",
            link: "exemplu-simplu"
        },
        { 
            text: "Implicații ale legii în chimie",
            link: "implicatii-ale-legii-in-chimie"
        },
        { 
            text: "Aplicație practică – problemă",
            link: "aplicatie-practica-problema"
        },
        { 
            text: "Verificare experimentală",
            link: "verificare-experimentala"
        },
      ]
    },
    {
      h2: [
        {
          text: "Legături covalente",
          link: "legaturi-covalente"
        }
      ],
      h3: [
        { 
            text: "Ce este legătura covalentă?",
            link: "ce-este-legatura-covalenta"
        },
        { 
            text: "Tipuri de legături covalente",
            link: "tipuri-de-legaturi-covalente"
        },
        { 
            text: "Reprezentarea legăturilor covalente",
            link: "reprezentarea-legaturilor-covalente"
        },
        { 
            text: "Condiții pentru formarea legăturii covalente",
            link: "conditii-pentru-formarea-legaturii-covalente"
        },
        { 
            text: "Proprietățile substanțelor cu legături covalente",
            link: "proprietatile-substantelor-cu-legaturi-covalente"
        },
      ]
    },
    {
      h2: [
        {
          text: "Nemetalele",
          link: "nemetalele"
        }
      ],
      h3: [
        { 
            text: "Generalități despre hidrogen",
            link: "generalitati-despre-hidrogen"
        },
        { 
            text: "Proprietăți fizice ale hidrogenului",
            link: "proprietati-fizice-ale-hidrogenului"
        },
        { 
            text: "Proprietăți chimice ale hidrogenului",
            link: "proprietati-chimice-ale-hidrogenului"
        },
        { 
            text: "Obținerea hidrogenului",
            link: "obtinerea-hidrogenului"
        },
        { 
            text: "Utilizări ale hidrogenului",
            link: "utilizari-ale-hidrogenului"
        },
      ]
    },
    {
      h2: [
        {
          text: "Metalele",
          link: "metalele"
        }
      ],
      h3: [
        { 
            text: "Generalități despre metale",
            link: "generalitati-despre-metale"
        },
        { 
            text: "Proprietăți fizice ale metalelor",
            link: "proprietati-fizice-ale-metalelor"
        },
        { 
            text: "Proprietăți chimice ale metalelor",
            link: "proprietati-chimice-ale-metalelor"
        },
        { 
            text: "Activitatea chimică – Seria reactivității metalelor",
            link: "activitatea-chimica-seria-reactivitatii-metalelor"
        },
        { 
            text: "Aplicații practice",
            link: "aplicatii-practice"
        },
      ]
    },
  ]