import { Events } from "./events.model";
import { CreateEventsDto } from "./dto/create-events.dto";
export declare class EventsService {
    private eventRepository;
    constructor(eventRepository: typeof Events);
    createEvents(dto: CreateEventsDto): Promise<Events>;
}
