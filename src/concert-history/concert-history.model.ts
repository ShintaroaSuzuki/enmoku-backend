import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConcertHistoryEvent } from '../concert-history-event/concert-history-event.model';
import { Concert } from '../concert/concert.model';
import { ConcertHistoryCount } from '../concert/concert-history-count.output';

@ObjectType()
export class ConcertHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    label!: string | null;

    @Field(() => [ConcertHistoryEvent], {nullable:true})
    events?: Array<ConcertHistoryEvent>;

    @Field(() => Concert, {nullable:true})
    Concert?: Concert | null;

    @Field(() => String, {nullable:true})
    concertId!: string | null;

    @Field(() => ConcertHistoryCount, {nullable:false})
    _count?: ConcertHistoryCount;
}
