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
          text: "Proporționalitate și procente",
          link: "proportionalitate-si-procente"
        }
      ],
      h3: [
        { 
            text: "Noțiuni introductive",
            link: "notiuni-introductive"
        },
        { 
            text: "Proporționalitate directă",
            link: "proportionalitate-directa"
        },
        { 
            text: "Proporționalitate inversă",
            link: "proportionalitate-inversa"
        },
        { 
            text: "Proporții și regulă de trei simplă",
            link: "proportii-si-regula-de-trei-simpla"
        },
        { 
            text: "Procente",
            link: "procente"
        },
        { 
            text: "Aplicații în probleme reale",
            link: "aplicatii-si-probleme-reale"
        },
      ]
    },
    {
      h2: [
        {
          text: "Ecuații și inecuații în contexte aplicate",
          link: "ecuatii-si-inecuatii-in-contexte-aplicate"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Probleme de tip economic",
            link: "probleme-de-tip-economic"
        },
        { 
            text: "Probleme de tip geometric",
            link: "probleme-de-tip-geometric"
        },
        { 
            text: "Modelarea cu ecuații și inecuații",
            link: "modelarea-cu-ecuatii-si-inecuatii"
        },
      ]
    },
  ]