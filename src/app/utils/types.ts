export type Variant = {
  title: string;
  image: string;
};

export type Filter = {
  operator: string;
  value1: string;
  value2: string;
  variants: Variant[];
};