import { registerEnumType } from '@nestjs/graphql';

export enum ConcertHeaderKey {
    program = "program",
    history = "history",
    greeting = "greeting"
}


registerEnumType(ConcertHeaderKey, { name: 'ConcertHeaderKey', description: undefined })
