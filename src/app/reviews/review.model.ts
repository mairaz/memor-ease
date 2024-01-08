export interface Review {
  id?: string;
  title?: string;
  created_at?: string | number | Date;
  next_review?: string | number | Date;
  previous_review?: string | number | Date;
  type_review?: ReviewType;
  is_delayed?: boolean,
  uid?: string | undefined
}

export type ReviewType = 1 | 7 | 30
