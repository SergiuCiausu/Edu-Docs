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
          text: "Noțiuni fundamentale",
          link: "notiuni-fundamentale"
        }
      ],
      h3: [
        {
          text: "Temperatura și echilibrul termic",
          link: "temperatura-si-echilibrul-termic"
        },
        {
          text: "Procese termodinamice",
          link: "procese-termodinamice"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Teoria cinetico-moleculară",
          link: "teoria-cinetico-moleculara"
        }
      ],
      h3: [
        {
          text: "Ce este teoria cinetico-moleculară?",
          link: "ce-este-teoria-cinetico-moleculara"
        },
        {
          text: "Agitația termică",
          link: "agitatia-termica"
        },
        {
          text: "Difuzia",
          link: "difuzia"
        },
        {
          text: "Stările de agregare ale materiei",
          link: "starile-de-agregare"
        },
        {
          text: "Aplicații și exemple",
          link: "aplicatii-si-exemple"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Calorimetrie",
          link: "calorimetrie"
        }
      ],
      h3: [
        {
          text: "Ce este căldura?",
          link: "ce-este-caldura"
        },
        {
          text: "Căldura ca mărime de proces",
          link: "caldura-ca-marime-de-proces"
        },
        {
          text: "Capacitatea calorică și căldura specifică",
          link: "capacitatea-calorica-si-caldura-specifica"
        },
        {
          text: "Calorimetria - calculul energiei transferate",
          link: "calorimetria-calculul-energie-transferate"
        },
        {
          text: "Exemple de probleme:",
          link: "exemple-de-probleme"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Principiile termodinamicii",
          link: "principiile-termodinamicii"
        }
      ],
      h3: [
        {
          text: "Primul principiu al termodinamicii",
          link: "primul-principiu-al-termodinamicii"
        },
        {
          text: "Al doilea principiu al termodinamicii",
          link: "al-doilea-principiu-al-termodinamicii"
        },
        {
          text: "Mașini termice (motorul termic)",
          link: "masini-termice-motorul-termic"
        },
      ]
    },
  ]