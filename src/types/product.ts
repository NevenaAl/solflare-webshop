export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  features: string[];
  specifications: Specifications;
  additionalInformation: AdditionalInformation;
}

export type Specifications = Record<string, ProductDataType>;
export type AdditionalInformation = Record<
  AdditionalInformationKey,
  ProductDataType
>;

export type AdditionalInformationKey = 'Warranty' | 'In the Box';
export type ProductDataType = string | string[] | number;
