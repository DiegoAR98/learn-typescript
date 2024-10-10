import { faker } from "@faker-js/faker";

export class User {
 name: string;
 location: {
    lat: number;
    lng: Number;
 };

 constructor() {
    this.name = faker.name.firstName();
    this.location = {
        lat: parseFloat (faker.address.latitude()),
        lng: parseFloat (faker.address.longitude(),)
    };
 }
}

