import { CelestialBody } from "./CelestialBody";

export class Planet implements CelestialBody {
    nev: String;
    age: Number;
    size: Number;
    waterContent : Number;

    constructor(nev: String, age: Number, size: Number, waterContent: Number) {
        this.nev = nev;
        this.age = age;
        this.size = size;
        this.waterContent = waterContent;
    }
}