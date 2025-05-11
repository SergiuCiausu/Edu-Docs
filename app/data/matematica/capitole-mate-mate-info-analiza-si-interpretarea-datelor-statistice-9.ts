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
          text: "Analiza și interpretarea datelor statistice",
          link: "analiza-si-interpretarea-datelor-statistice"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Reprezentarea datelor",
            link: "reprezentarea-datelor"
        },
        { 
            text: "Indicatori statistici",
            link: "indicatori-statistici"
        },
        { 
            text: "Interpretarea datelor în contexte reale",
            link: "interpretarea-datelor-in-contexte-reale"
        },
      ]
    },
  ]