import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from '../dto/user-response.dto';

export function FindOneUserDocumentation() {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'User found',
      type: UserResponseDto
    })
  );
}
