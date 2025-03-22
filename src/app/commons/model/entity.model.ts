export class Report {
  id: number;
  title: string;
  description: string;
  citizenNome: string;
  citizenCognome: string;
  category: string;
  creationDate: Date;
  zone: string;
  upvotes: string[];
  upvotesCount: number;

  constructor(
    id: number,
    title: string,
    description: string,
    citizenNome: string,
    citizenCognome: string,
    category: string,
    creationDate: Date,
    zone: string,
    upvotes: string[],
    upvotesCount: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.citizenNome = citizenNome;
    this.citizenCognome = citizenCognome;
    this.category = category;
    this.creationDate = creationDate;
    this.zone = zone;
    this.upvotes = upvotes;
    this.upvotesCount = upvotesCount;
  }
}

export interface ReportFilterDTO {
  categories?: string[];
  zones?: string[];
}