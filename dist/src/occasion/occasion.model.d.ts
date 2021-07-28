import { Model } from "sequelize-typescript";
interface OccasionCreationAttrs {
    title: string;
    subtitle: string;
    date: string;
    main_image: string;
    second_title: string;
    content: string[];
}
export declare class Occasion extends Model<Occasion, OccasionCreationAttrs> {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    main_image: string;
    second_title: string;
    content: string[];
}
export {};
