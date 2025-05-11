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
          text: "Tablouri",
          link: "tablouri"
        }
      ],
      h3: [
        { 
            text: "Noțiunea de tablou",
            link: "notiunea-de-tablou"
        },
        { 
            text: "Citirea și afișarea tablourilor",
            link: "citirea-si-afisarea-tablourilor"
        },
        { 
            text: "Aplicarea algoritmilor pe tablouri",
            link: "aplicarea-algoritmilor-pe-tablouri"
        },
      ]
    },
    {
      h2: [
        {
          text: "Metoda Backtracking",
          link: "metoda-backtracking"
        }
      ],
      h3: [
        { 
            text: "Principiul metodei Backtracking",
            link: "principiul-metodei-backtracking"
        },
        { 
            text: "Aplicații: generarea permutărilor, aranjamentelor, combinărilor",
            link: "aplicatii-generarea-permutarilor-aranjamentelor-si-combinarilor"
        },
      ]
    },
    {
      h2: [
        {
          text: "Grafuri",
          link: "grafuri"
        }
      ],
      h3: [
        { 
            text: "Noțiuni fundamentale despre grafuri",
            link: "notiuni-fundamentale-despre-grafuri"
        },
        { 
            text: "Reprezentarea grafurilor în memorie",
            link: "reprezentarea-grafurilor-in-memorie"
        },
      ]
    },
  ]