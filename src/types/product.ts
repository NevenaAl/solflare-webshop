export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
  specifications: Specifications;
  additionalInformation: AdditionalInformation;
}

export interface Specifications {
  [keyof: string]: string | string[] | number;
}

export interface AdditionalInformation {
  Warranty: string;
  'In the Box': string[];
}
