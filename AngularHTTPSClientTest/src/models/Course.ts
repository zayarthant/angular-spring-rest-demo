export class Course{
  id: string;
  name: string;
  numberOfWeek: number;
  cost: number;
  certificateAdvelable: boolean;

  constructor(id: string, name: string, numberOfWeek: number, cost: number, certificateAdvelable: boolean) {
    this.id = id;
    this.name = name;
    this.numberOfWeek = numberOfWeek;
    this.cost = cost;
    this.certificateAdvelable = certificateAdvelable;
  }

}
