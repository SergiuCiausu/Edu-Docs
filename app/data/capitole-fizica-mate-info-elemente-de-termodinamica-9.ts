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
          text: "Elemente de termodinamică",
          link: "elemente-de-termodinamica"
        }
      ],
      h3: [
        {
          text: "Temperatura și dilatarea termică",
          link: "temperatura-si-dilatarea-termica"
        },
        {
          text: "Căldura și capacitatea calorică",
          link: "caldura-si-capacitatea-calorica"
        },
        {
          text: "Schimbul de căldură",
          link: "schimbul-de-caldura"
        },
        {
          text: "Primul principiu al termodinamicii",
          link: "primul-principiu-al-termodinamicii"
        },
        {
          text: "Exemplu practic:",
          link: "exemplu-practic"
        },
      ]
    },
  ]