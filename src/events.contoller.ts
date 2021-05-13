import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'first event' },
      { id: 2, name: 'second event' },
    ];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id: id, name: `${id}th event` };
  }
  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateEventDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {}
}
