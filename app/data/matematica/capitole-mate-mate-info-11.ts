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
          text: "Limite și continuitate",
          link: "limite-si-continuitate"
        }
      ],
      h3: [
        { 
            text: "Noțiunea de limită",
            link: "notiunea-de-limita"
        },
        { 
            text: "Exemple simple",
            link: "exemple-simple"
        },
        { 
            text: "Metode de calcul al limitelor",
            link: "metode-de-calcul-al-limitelor"
        },
        { 
            text: "Forme de nedeterminare",
            link: "forme-de-nedeterminare"
        },
      ]
    },
    {
      h2: [
        {
          text: "Derivata",
          link: "derivata"
        }
      ],
      h3: [
        { 
            text: "Definirea derivatei",
            link: "definirea-derivatei"
        },
        { 
            text: "Interpretare geometrică și practică",
            link: "interpretare-geometrica-si-practica"
        },
        { 
            text: "Derivata funcțiilor uzuale",
            link: "derivata-functiilor-uzuale"
        },
        { 
            text: "Reguli de derivare",
            link: "reguli-de-derivare"
        },
        { 
            text: "Aplicații ale derivatei",
            link: "aplicatii-ale-derivatei"
        },
      ]
    },
    {
      h2: [
        {
          text: "Elemente de algebră",
          link: "elemente-de-algebra"
        }
      ],
      h3: [
        { 
            text: "Matrice",
            link: "matrice"
        },
        { 
            text: "Determinanți",
            link: "determinanti"
        },
        { 
            text: "Sisteme de ecuații liniare",
            link: "sisteme-de-ecuatii-liniare"
        },
      ]
    },
  ]