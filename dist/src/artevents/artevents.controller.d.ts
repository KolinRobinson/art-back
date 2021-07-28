import { ArteventsService } from "./artevents.service";
import { CreateArteventsDto } from "./dto/create-artevents.dto";
import { Artevents } from "./artevents.model";
export declare class ArteventsController {
    private eventService;
    constructor(eventService: ArteventsService);
    create(dto: CreateArteventsDto): Promise<Artevents>;
    getAll(): Promise<Artevents[]>;
    getOneUser(id: number): Promise<Artevents>;
}
