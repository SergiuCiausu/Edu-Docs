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
          text: "Subprograme",
          link: "subprograme"
        }
      ],
      h3: [
        { 
            text: "Noțiunea de subprogram",
            link: "notiunea-de-subprogram"
        },
        { 
            text: "Subprograme în C++",
            link: "subprograme-in-c"
        },
        { 
            text: "Structura unui subprogram",
            link: "structura-unui-subprogram"
        },
        { 
            text: "Definirea și declararea unui subprogram",
            link: "definirea-si-declararea-unui-subprogram"
        },
        { 
            text: "Apelul subprogramelor",
            link: "apelul-subprogramelor"
        },
        { 
            text: "Aplicații care folosesc subprograme",
            link: "aplicatii-care-folosesc-subprograme"
        },
      ]
    },
    {
      h2: [
        {
          text: "Șiruri de caractere",
          link: "siruri-de-caractere"
        }
      ],
      h3: [
        { 
            text: "Generalități",
            link: "generalitati"
        },
        { 
            text: "Citirea și scrierea șirurilor de caractere",
            link: "citirea-si-scrierea-sirurilor-de-caractere"
        },
        { 
            text: "Tipul char*",
            link: "tipul-char"
        },
        { 
            text: "Lungimea unui șir de caractere",
            link: "lungimea-unui-sir-de-caractere"
        },
        { 
            text: "Copierea și concatenarea șirurilor de caractere",
            link: "copierea-si-concatenarea-sirurilor-de-caractere"
        },
        { 
            text: "Căutarea unui caracter într-un șir",
            link: "cautarea-unui-caracter-intr-un-sir"
        },
        { 
            text: "Exemple practice",
            link: "exemple-practice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Structuri neomogene",
          link: "structuri-neomogene"
        }
      ],
      h3: [
        { 
            text: "Tipul struct",
            link: "tipul-struct"
        },
        { 
            text: "Înregistrări îmbricate",
            link: "inregistrari-imbricate"
        },
        { 
            text: "Înregistrări cu structură variabilă",
            link: "inregistrari-cu-structura-variabila"
        },
        { 
            text: "Componentele unui program C++",
            link: "componentele-unui-program-c"
        },
      ]
    },
    {
      h2: [
        {
          text: "Introducere în recursivitate",
          link: "introducere-in-recursivitate"
        }
      ],
      h3: [
        { 
            text: "Prezentare generală",
            link: "prezentare-generala"
        },
        { 
            text: "Modul de realizare a autoapelului",
            link: "modul-de-realizare-a-autoapelului"
        },
        { 
            text: "Cum gândim un algoritm recursiv?",
            link: "cum-gandim-un-algoritm-recursiv"
        },
        { 
            text: "Aplicații recursive",
            link: "aplicatii-recursive"
        },
      ]
    },
    {
      h2: [
        {
          text: "Complexitatea algoritmilor",
          link: "complexitatea-algoritmilor"
        }
      ],
      h3: [
        { 
            text: "Exprimarea complexității",
            link: "exprimarea-complexitatii"
        },
        { 
            text: "Ce trebuie să mai știm?",
            link: "ce-trebuie-sa-mai-stim"
        },
      ]
    },
  ]