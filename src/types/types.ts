class Model {
  id: string;
}

export class Student extends Model {
  name: string;
  surname: string;
  email?: string;
}

export class Course extends Model {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export type Entity<T extends Model> = T & { id: string };