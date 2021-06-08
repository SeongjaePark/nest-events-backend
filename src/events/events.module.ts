import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from './attendee.entity';
import { AttendeesService } from './attendee.service';
import { AttendeesController } from './event-attendees.controller';
import { Event } from './event.entity';
import { EventsService } from './event.service';
import { EventsController } from './events.contoller';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Attendee])],
  controllers: [EventsController, AttendeesController],
  providers: [EventsService, AttendeesService],
})
export class EventsModule {}
