export enum LawCategory {
  TRAFFIC = 'transito',
  PEOPLE = 'pessoas',
  GENERAL = 'gerais'
}

export enum SeizureStatus {
  YES = 'Sim',
  NO = 'Não',
  MAYBE = 'Talvez',
  NONE = ''
}

export interface Law {
  id: string;
  title: string;
  category: LawCategory;
  fine: number | string; // String allowed for cases like "1200+"
  jailTime?: number; // In minutes
  seizure?: SeizureStatus;
  note?: string;
}
