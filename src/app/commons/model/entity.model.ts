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

export class Report {
  id?: number;
  title: string;
  description: string;
  citizen: Citizen;
  category: string;
  creationDate: string;
  zone: string;
  attachmentReferences?: string;

  constructor(
    title: string,
    description: string,
    citizen: Citizen,
    category: string,
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
  citizenId: string;
  category: string;
  zone: string;

  constructor(title: string, description: string, citizenId: string, category: string, zone: string) {
    this.title = title;
    this.description = description;
    this.citizenId = citizenId;
    this.category = category;
    this.zone = zone;
  }
}

export interface ReportFilterDTO {
  categories?: string[];
  zones?: string[];
}

export class ReportDTO {
  id: number;
  title: string;
  description: string;
  citizenNome: string;
  citizenCognome: string;
  category: string;
  creationDate: string;
  zone: string;
  attachments: AttachmentDTO[];

  constructor(
    id: number,
    title: string,
    description: string,
    citizenNome: string,
    citizenCognome: string,
    category: string,
    creationDate: string,
    zone: string,
    attachments: AttachmentDTO[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.citizenNome = citizenNome;
    this.citizenCognome = citizenCognome;
    this.category = category;
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
