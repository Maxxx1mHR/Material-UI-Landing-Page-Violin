export interface DataContentText {
  navigation: string[];
  introduction: { [key: string]: string };
  workExample: { header: string; subheader: string; examples: Examples[] };
  experience: { header: string; subheader: string; description: string; items: Item[]; images: string[] };
  rewards: { header: string; items: Item[]; images: string[] };
  provideServices: { header: string; items: Item[] };
  contacts: { header: string };
}

interface Examples {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  title: string;
}

interface Item {
  id: number;
  title: string;
  description: string;
}
