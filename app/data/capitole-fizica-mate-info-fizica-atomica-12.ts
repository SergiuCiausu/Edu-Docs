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
          text: "Spectre atomice",
          link: "spectre-atomice"
        }
      ],
      h3: [
        {
          text: "Ce sunt spectrele atomice?",
          link: "ce-sunt-spectrele-atomice?"
        },
        {
          text: "Spectre de emisie și absorbție",
          link: "spectre-de-emisie-si-absorbtie"
        },
        {
          text: "Clasificarea spectrelor",
          link: "clasificarea-spectrelor"
        },
        {
          text: "Legea seriilor spectrale ale hidrogenului",
          link: "legea-seriilor-spectrale-ale-hidrogenului"
        },
        {
          text: "Analiza spectrală și aplicații",
          link: "analiza-spectrala-si-aplicatii"
        },
      ]
    },
    {
      h2: [
        {
          text: "Modelul atomic al lui Bohr",
          link: "modelul-atomic-al-lui-bohr"
        }
      ],
      h3: [
        {
          text: "Context istoric",
          link: "context-istoric"
        },
        {
          text: "Postulatele modelului Bohr",
          link: "postulatele-modelului-bohr"
        },
        {
          text: "Explicația liniilor spectrale ale hidrogenului",
          link: "explicatia-liniilor-spectrale-ale-hidrogenului"
        },
        {
          text: "Limitările modelului Bohr",
          link: "limitarile-modelului-bohr"
        },
      ]
    },
    {
      h2: [
        {
          text: "Dualismul undă-corpuscul",
          link: "dualismul-unda-corpuscul"
        }
      ],
      h3: [
        {
          text: "Introducere în conceptul de dualism",
          link: "introducere-in-conceptul-de-dualism"
        },
        {
          text: "Dualismul luminii",
          link: "dualismul-luminii"
        },
        {
          text: "Dualismul materiei",
          link: "dualismul-materiei"
        },
        {
          text: "Implicații ale dualismului",
          link: "implicatii-ale-dualismului"
        },
      ]
    },
  ]