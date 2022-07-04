import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Concert } from '../concert/concert.model';

@ObjectType()
export class ConcertAccess {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    ts!: Date;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:true})
    label!: string | null;

    @Field(() => Concert, {nullable:true})
    Concert?: Concert | null;

    @Field(() => String, {nullable:true})
    concertId!: string | null;
}
