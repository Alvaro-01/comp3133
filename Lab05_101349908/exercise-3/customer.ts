class Customer {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    public greeter() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
  }
  
  // create instance of customer class and call method on object
  let customer = new Customer("Alvaro", "Aguirre");

  customer.greeter();
  