class Vehicle {

    constructor(public color: string) {
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Caar extends Vehicle {  // Renamed the class to Car

constructor(public wheels: number, color: string) {
    super(color);
}
    private drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}


const caar = new Caar(4, 'red');  // Renamed the instance to car
caar.startDrivingProcess();  // Now calling the methods on the correct instance

