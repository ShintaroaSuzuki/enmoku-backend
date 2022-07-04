import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConcertHistory } from '../concert-history/concert-history.model';

@ObjectType()
export class ConcertHistoryEvent {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => ConcertHistory, {nullable:true})
    ConcertHistory?: ConcertHistory | null;

    @Field(() => String, {nullable:true})
    concertHistoryId!: string | null;
}
