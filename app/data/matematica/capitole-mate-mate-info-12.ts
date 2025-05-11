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
          text: "Structuri algebrice",
          link: "structuri-algebrice"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        },
      ]
    },
    {
      h2: [
        {
          text: "Primitive și integrale",
          link: "primitive-si-integrale"
        }
      ],
      h3: [
        { 
            text: "Noțiuni introductive",
            link: "notiuni-introductive"
        },
        { 
            text: "Exemple",
            link: "exemple"
        },
        { 
            text: "Proprietăți",
            link: "proprietati"
        },
        { 
            text: "Tabel cu formule uzuale",
            link: "tabel-cu-formule-uzuale"
        },
        { 
            text: "Observație geometrică",
            link: "observatie-geometrica"
        },
      ]
    },
    {
      h2: [
        {
          text: "Aplicații ale integralei definite",
          link: "aplicatii-ale-integralei-definite"
        }
      ],
      h3: [
        { 
            text: "Calculul ariei unei suprafețe plane",
            link: "calculul-ariei-unei-suprafețe-plane"
        },
        { 
            text: "Determinarea volumului unui corp de rotație",
            link: "determinarea-volumului-unui-corp-de-rotatie"
        },
        { 
            text: "Calculul unor limite de șiruri folosind integrala definită",
            link: "calculul-unor-limite-de-siruri-folosind-integrala-definita"
        },
      ]
    },
  ]