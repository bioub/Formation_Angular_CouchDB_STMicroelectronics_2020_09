export interface AllDocs<T> {
  offset: number;
  rows: Row<T>[];
  total_rows: number;
}

export interface Row<T> {
  id: string;
  key: string;
  value: { rev: string };
  doc: T;
}
