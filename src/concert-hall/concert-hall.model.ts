import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Concert } from '../concert/concert.model';
import { ConcertHallCount } from './concert-hall-count.output';

@ObjectType()
export class ConcertHall {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    lon!: number;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => [Concert], {nullable:true})
    Concert?: Array<Concert>;

    @Field(() => ConcertHallCount, {nullable:false})
    _count?: ConcertHallCount;
}
