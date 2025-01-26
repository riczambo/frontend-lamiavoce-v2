export class Citizen {
  id: number;
  codiceFiscale: string; // Codice Fiscale del cittadino
  nome: string;
  cognome: string;

  constructor(id: number, codiceFiscale: string, nome: string, cognome: string) {
    this.id = id;
    this.codiceFiscale = codiceFiscale;
    this.nome = nome;
    this.cognome = cognome;
  }
}

export class Category {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class Report {
  id?: number;
  title: string;
  description: string;
  citizen: Citizen;
  category: Category;
  creationDate: string;
  zone: string;
  attachmentReferences?: string;

  constructor(
    title: string,
    description: string,
    citizen: Citizen,
    category: Category,
    creationDate: string,
    zone: string,
    attachmentReferences?: string,
    id?: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.citizen = citizen;
    this.category = category;
    this.creationDate = creationDate;
    this.zone = zone;
    this.attachmentReferences = attachmentReferences;
  }
}

export class ReportRequest {
  title: string;
  description: string;
  citizenCodiceFiscale: string;
  categoryName: string;

  constructor(title: string, description: string, citizenCodiceFiscale: string, categoryName: string) {
    this.title = title;
    this.description = description;
    this.citizenCodiceFiscale = citizenCodiceFiscale;
    this.categoryName = categoryName;
  }
}

export interface ReportFilterDTO {
  categoryNames?: string[];
  zones?: string[];
}

export class ReportDTO {
  id: number;
  title: string;
  description: string;
  citizenNome: string;
  citizenCognome: string;
  categoryName: string;
  creationDate: string;
  zone: string;
  attachments: AttachmentDTO[];

  constructor(
    id: number,
    title: string,
    description: string,
    citizenNome: string,
    citizenCognome: string,
    categoryName: string,
    creationDate: string,
    zone: string,
    attachments: AttachmentDTO[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.citizenNome = citizenNome;
    this.citizenCognome = citizenCognome;
    this.categoryName = categoryName;
    this.creationDate = creationDate;
    this.zone = zone;
    this.attachments = attachments;
  }
}

export class AttachmentDTO {
  id: number;
  filename: string;
  contentType: string;
  data: string;

  constructor(id: number, filename: string, contentType: string, data: string) {
    this.id = id;
    this.filename = filename;
    this.contentType = contentType;
    this.data = data;
  }
}
