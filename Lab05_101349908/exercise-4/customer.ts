export class Customer {
    private firstName: string;
    private lastName: string;
    
    private age: number;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    public greeter() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public getAge(): number {
      return this.age;
    }
  }
