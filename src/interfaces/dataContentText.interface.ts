export interface DataContentText {
  navigation: {
    logoPath: string;
    logoAlt: string;
    logoTitleMale: string;
    logoTitleFemale: string;
    items: string[];
  };
  introduction: { [key: string]: string };
  workExample: { header: string; subheader: string; examples: Examples[] };
  experience: {
    header: string;
    subheader: string;
    description: string;
    items: Item[];
    images: string[];
  };
  rewards: { header: string; subheader: string; items: Item[]; images: string[] };
  provideServices: { header: string; subheader: string; items: Item[] };
  contacts: { header: string; subheader: string; subheader_text: string; subheader_contact: string };
}

interface Examples {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  title: string;
}

interface Item {
  id: number;
  title: string;
  description: string;
  icons?: string;
}
