import { Model } from "sequelize-typescript";
interface EventsCreationAttrs {
    title: string;
    subtitle: string;
    dateEvent: string;
    mainImage: string;
    secondTitle: string;
    content: string[];
}
export declare class Events extends Model<Events, EventsCreationAttrs> {
    id: number;
    title: string;
    subtitle: string;
    dateEvent: string;
    mainImage: string;
    secondTitle: string;
    content: string[];
}
export {};
