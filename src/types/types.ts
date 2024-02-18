export type IIdentified = {
  id: string;
}

export type Student = IIdentified & {
  name: string;
  surname: string;
  email?: string;
}

export type Course = IIdentified & {
  title: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
}

export type Entity = Record<string, any> & IIdentified;