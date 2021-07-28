import { EventsService } from "./events.service";
import { CreateEventsDto } from "./dto/create-events.dto";
import { Events } from "./events.model";
export declare class EventsController {
    private eventService;
    constructor(eventService: EventsService);
    create(dto: CreateEventsDto): Promise<Events>;
}
