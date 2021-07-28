import { Artevents } from "./artevents.model";
import { CreateArteventsDto } from "./dto/create-artevents.dto";
export declare class ArteventsService {
    private eventRepository;
    constructor(eventRepository: typeof Artevents);
    createEvents(dto: CreateArteventsDto): Promise<Artevents>;
    getAllEvents(): Promise<Artevents[]>;
    getOneEvent(id: number): Promise<Artevents>;
}
