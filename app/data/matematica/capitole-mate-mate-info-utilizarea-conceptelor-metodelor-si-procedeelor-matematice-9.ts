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
          text: "Mulțimi și operații cu mulțimi",
          link: "multimi-si-operatii-cu-multimi"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
    {
      h2: [
        {
          text: "Numere reale",
          link: "numere-reale"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
    {
      h2: [
        {
          text: "Funcții",
          link: "functii"
        }
      ],
      h3: [
        { 
            text: "Definiția funcției",
            link: "definitia-functiei"
        },
        { 
            text: "Domeniul de definiție și codomeniul",
            link: "domeniul-de-definitie-si-codomeniul"
        },
        { 
            text: "Tipuri de funcții",
            link: "tipuri-de-functii"
        },
        { 
            text: "Reprezentarea grafică a funcțiilor",
            link: "reprezentarea-grafica-a-functiilor"
        },
        { 
            text: "Exemple de exerciții",
            link: "exemple-de-exercitii"
        },
      ]
    },
    {
      h2: [
        {
          text: "Ecuații și inecuații",
          link: "ecuatii-si-inecuatii"
        }
      ],
      h3: [
        { 
            text: "Noțiuni introductive",
            link: "notiuni-introductive"
        },
        { 
            text: "Ecuații de gradul I",
            link: "ecuatii-de-gradul-i"
        },
        { 
            text: "Ecuații de gradul II",
            link: "ecuatii-de-gradul-ii"
        },
        { 
            text: "Inecuații de gradul I",
            link: "inecuatii-de-gradul-i"
        },
        { 
            text: "Inecuații de gradul II",
            link: "inecuatii-de-gradul-ii"
        },
        { 
            text: "Sisteme de ecuații liniare",
            link: "sisteme-de-ecuatii-liniare"
        },
        { 
            text: "Metode de rezolvare",
            link: "metode-de-rezolvare"
        },
        { 
            text: "Exerciții rezolvate",
            link: "exercitii-rezolvate"
        },
      ]
    },
  ]