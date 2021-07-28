import { Model } from "sequelize-typescript";
interface ArteventsCreationAttrs {
    title: string;
    subtitle: string;
    dateEvent: string;
    mainImage: string;
    secondTitle: string;
    content: string[];
}
export declare class Artevents extends Model<Artevents, ArteventsCreationAttrs> {
    id: number;
    title: string;
    subtitle: string;
    dateEvent: string;
    mainImage: string;
    secondTitle: string;
    content: string[];
}
export {};
