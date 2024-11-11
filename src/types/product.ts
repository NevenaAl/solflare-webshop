export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
  specifications: Specifications;
  additionalInformation: AdditionalInformation;
};

export type Specifications = Record<string, ProductDataValue>;

export type AdditionalInformation = {
  Warranty: string;
  'In the Box': string[];
};

export type ProductDataValue = string | string[] | number;
