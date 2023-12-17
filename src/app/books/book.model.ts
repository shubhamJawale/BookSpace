import { StationaryItem } from "../shared/stationaryItem.model";

export class Book {
    public name: string;
    public description: string;
    public image: string;
    public stationaryItem: StationaryItem[];
    constructor(name: string, description: string, image: string, item: StationaryItem[]) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.stationaryItem = item;

    }
}