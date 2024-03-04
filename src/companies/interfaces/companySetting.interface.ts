export interface CompanySettings {
  limit_by_department: number;
  file_prefix: string;
  document_types: DocumentType[];
}

export interface DocumentType {
  name: string;
  limit_days: number;
}
