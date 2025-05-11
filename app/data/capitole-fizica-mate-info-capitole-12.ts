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
          text: "Fizică atomică",
          link: "fizica-atomica"
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
          text: "Elemente ale teoriei relativității restrânse",
          link: "elemente-ale-teoriei-relativitatii-restranse"
        }
      ],
      h3: [
        {
          text: "",
          link: ""
        },
      ]
    },
  ]