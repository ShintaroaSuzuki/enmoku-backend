import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConcertProgramType } from '../concert/concert-program-type.enum';
import { Concert } from '../concert/concert.model';

@ObjectType()
export class ConcertProgram {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => ConcertProgramType, {nullable:false})
    type!: keyof typeof ConcertProgramType;

    @Field(() => Concert, {nullable:true})
    Concert?: Concert | null;

    @Field(() => String, {nullable:true})
    concertId!: string | null;
}
