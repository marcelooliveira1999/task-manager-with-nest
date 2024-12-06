import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { MessageResponseDto } from '../dto/message-response.dto';

export function RemoveTaskDocumentation() {
  return applyDecorators(
    ApiResponse({
      status: 200,
      description: 'Task data deleted',
      type: MessageResponseDto
    })
  );
}