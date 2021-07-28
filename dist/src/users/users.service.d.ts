import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getOneUser(id: number): Promise<User>;
    getUsersByEmail(email: string): Promise<User>;
    getUsersByLogin(login: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    deleteRole(dto: AddRoleDto): Promise<AddRoleDto>;
}
