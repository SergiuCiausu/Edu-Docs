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
          text: "Principiul relativității în fizică. Postulatele lui Einstein",
          link: "principiul-relativitatii-in-fizica-postulatele-lui-einstein"
        }
      ],
      h3: [
        {
          text: "Context istoric și limitele fizicii clasice",
          link: "context-istoric-si-limitele-fizicii-clasice"
        },
        {
          text: "Teoria relativității restrânse – Albert Einstein",
          link: "teoria-relativitatii-restranse-albert-einstein"
        },
        {
          text: "Consecințele teoriei relativității restrânse",
          link: "consecintele-teoriei-relativitatii-restranse"
        },
      ]
    },
    {
      h2: [
        {
          text: "Transformările lui Lorentz și consecințele acestora",
          link: "transformarile-lui-lorentz-si-consecintele-acestora"
        }
      ],
      h3: [
        {
          text: "Transformările lui Lorentz",
          link: "transformarile-lui-lorentz"
        },
        {
          text: "Compunerea relativistă a vitezelor",
          link: "compunerea-relativista-a-vitezelor"
        },
      ]
    },
    {
      h2: [
        {
          text: "Noțiuni de dinamică relativistă",
          link: "notiuni-de-dinamica-relativista"
        }
      ],
      h3: [
        {
          text: "Masa relativistă",
          link: "masa-relativista"
        },
        {
          text: "Impulsul relativist",
          link: "impulsul-relativist"
        },
        {
          text: "Energia relativistă",
          link: "energia-relativista"
        },
        {
          text: "Relația fundamentală între energie, impuls și masă",
          link: "relatia-fundamentala-intre-energie-impuls-si-masa"
        },
      ]
    },
  ]