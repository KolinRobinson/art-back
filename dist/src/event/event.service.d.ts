import { Event } from "./events.model";
import { CreateEventDto } from "./dto/create-event.dto";
export declare class EventService {
    private eventRepository;
    constructor(eventRepository: typeof Event);
    createEvents(dto: CreateEventDto): Promise<Event>;
}
