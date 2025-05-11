export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const titluriCapitole: fullTitluri = [
    {
      h2: [
        {
          text: "Termodinamică",
          link: "termodinamica"
        }
      ],
      h3: [
        {
          text: "Noțiuni fundamentale",
          link: "notiuni-fundamentale"
        },
        {
          text: "Teoria cinetico-moleculară",
          link: "teoria-cinetico-moleculara"
        },
        {
          text: "Calorimetrie",
          link: "calorimetrie"
        },
        {
          text: "Principiile termodinamicii",
          link: "principiile-termodinamicii"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Electricitate și Magnetism",
          link: "electricitate-si-magnetism"
        }
      ],
      h3: [
        {
          text: "Electrostatică",
          link: "electrostatica"
        },
        {
          text: "Curent electric continuu",
          link: "curent-electric-continuu"
        },
        {
          text: "Efecte ale curentului electric",
          link: "efecte-ale-curentului-electric"
        },
        {
          text: "Curent alternativ",
          link: "curent-alternativ"
        },
      ]
    },
  ]