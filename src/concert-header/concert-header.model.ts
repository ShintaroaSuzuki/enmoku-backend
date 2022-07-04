import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConcertHeaderKey } from '../prisma/concert-header-key.enum';
import { Concert } from '../concert/concert.model';

@ObjectType()
export class ConcertHeader {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ConcertHeaderKey, {nullable:false})
    key!: keyof typeof ConcertHeaderKey;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Concert, {nullable:true})
    Concert?: Concert | null;

    @Field(() => String, {nullable:true})
    concertId!: string | null;
}
