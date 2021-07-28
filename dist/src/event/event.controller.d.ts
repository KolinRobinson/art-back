import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    create(dto: CreateEventDto): any;
}
