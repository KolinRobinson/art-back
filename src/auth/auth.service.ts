import {Body, HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginUserDto} from "./dto/login-user.dto";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from "bcryptjs"
import {User} from "../users/users.model";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private  jwtService: JwtService) {
    }

    async login(userDto: LoginUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUsersByEmail(userDto.email)
        if (candidate){
            throw new HttpException('Пользователь существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user);
    }

    private async generateToken(user: User){
        const payload = {email: user.email, login: user.login, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUsersByLogin(userDto.login)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        console.log(passwordEquals)
        if (user && passwordEquals){
            return user;
        }

        throw new UnauthorizedException({message: 'password or login uncorrect'})
    }
}
