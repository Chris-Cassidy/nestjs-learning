import { ApiProperty } from "@nestjs/swagger";

/**
 * DTO = Data Transfer Object
 * Schema representation of objects
 */

export class CreateUserDto {
    @ApiProperty()
    name: string
}