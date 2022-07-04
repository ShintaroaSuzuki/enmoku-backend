import { registerEnumType } from '@nestjs/graphql';

export enum ConcertProgramType {
    piece = "piece",
    message = "message",
    pause = "pause"
}


registerEnumType(ConcertProgramType, { name: 'ConcertProgramType', description: undefined })
