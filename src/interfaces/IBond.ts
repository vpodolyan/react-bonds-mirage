export interface IBond {
  isin: string;
  name: string;
  issuer: string;
  sector: string;
  price: number;
  currency: string;
  endDate: Date;
  rating: string;
  points: ReadonlyArray<object>
}