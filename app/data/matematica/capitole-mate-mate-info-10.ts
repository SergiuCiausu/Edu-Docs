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
          text: "Funcții și ecuații",
          link: "functii-si-ecuatii"
        }
      ],
      h3: [
        { 
            text: "Ce este o funcție?",
            link: "ce-este-o-functie"
        },
        { 
            text: "Tipuri de funcții importante",
            link: "tipuri-de-functii-importante"
        },
        { 
            text: "Reprezentarea grafică",
            link: "reprezentarea-grafica"
        },
        { 
            text: "Ecuații de forma f(x) = a și f(x) = g(x)",
            link: "ecuatii-de-forma-fx-a-si-fx-gx"
        },
        { 
            text: "Activitate aplicativă",
            link: "activitate-aplicativa"
        },
      ]
    },
    {
      h2: [
        {
          text: "Trigonometrie",
          link: "trigonometrie"
        }
      ],
      h3: [
        { 
            text: "Ce sunt funcțiile trigonometrice?",
            link: "ce-sunt-functiile-trigonometrice"
        },
        { 
            text: "Graficele funcțiilor trigonometrice",
            link: "graficele-functiilor-trigonometrice"
        },
        { 
            text: "Identități trigonometrice fundamentale",
            link: "identitati-trigonometrice-fundamentale"
        },
      ]
    },
    {
      h2: [
        {
          text: "Geometrie analitică în plan",
          link: "geometrie-analitica-in-plan"
        }
      ],
      h3: [
        { 
            text: "Vectori în plan",
            link: "vectori-in-plan"
        },
        { 
            text: "Ecuația dreptei în plan",
            link: "ecuatia-dreptei-in-plan"
        },
        { 
            text: "Poziții relative între drepte",
            link: "pozitii-relative-intre-drepte"
        },
        { 
            text: "Cerc în plan",
            link: "cerc-in-plan"
        },
      ]
    },
    {
      h2: [
        {
          text: "Statistica și probabilități",
          link: "statistica-si-probabilitati"
        }
      ],
      h3: [
        { 
            text: "Reprezentarea datelor",
            link: "reprezentarea-datelor"
        },
        { 
            text: "Probabilități – noțiuni fundamentale",
            link: "probabilitati-notiuni-fundamentale"
        },
        { 
            text: "Aplicații în viața reală",
            link: "aplicatii-in-viata-reala"
        },
      ]
    },
    {
      h2: [
        {
          text: "Algebră",
          link: "algebra"
        }
      ],
      h3: [
        { 
            text: "Polinoame",
            link: "polinoame"
        },
        { 
            text: "Fracții algebrice",
            link: "fractii-algebrice"
        },
        { 
            text: "Inegalități",
            link: "inegalitati"
        },
        { 
            text: "Sisteme de ecuații",
            link: "sisteme-de-ecuatii"
        },
      ]
    },
  ]