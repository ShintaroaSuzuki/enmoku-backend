import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConcertCount {

    @Field(() => Int, {nullable:false})
    note?: number;

    @Field(() => Int, {nullable:false})
    header?: number;

    @Field(() => Int, {nullable:false})
    program?: number;

    @Field(() => Int, {nullable:false})
    history?: number;

    @Field(() => Int, {nullable:false})
    greeting?: number;

    @Field(() => Int, {nullable:false})
    access?: number;
}
