import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Concert } from '../concert/concert.model';

@ObjectType()
export class ConcertGreeting {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    author!: string | null;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Concert, {nullable:true})
    Concert?: Concert | null;

    @Field(() => String, {nullable:true})
    concertId!: string | null;
}
