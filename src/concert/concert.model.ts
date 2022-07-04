import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConcertHall } from '../concert-hall/concert-hall.model';
import { ConcertNote } from '../concert-note/concert-note.model';
import { ConcertHeader } from '../concert-header/concert-header.model';
import { ConcertProgram } from '../concert-program/concert-program.model';
import { ConcertHistory } from '../concert-history/concert-history.model';
import { ConcertGreeting } from '../concert-greeting/concert-greeting.model';
import { ConcertAccess } from '../concert-access/concert-access.model';
import { User } from '../user/user.model';
import { ConcertCount } from './concert-count.output';

@ObjectType()
export class Concert {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ConcertHall, {nullable:true})
    place?: ConcertHall | null;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => [ConcertNote], {nullable:true})
    notes?: Array<ConcertNote>;

    @Field(() => [ConcertHeader], {nullable:true})
    headers?: Array<ConcertHeader>;

    @Field(() => [ConcertProgram], {nullable:true})
    programs?: Array<ConcertProgram>;

    @Field(() => [ConcertHistory], {nullable:true})
    historys?: Array<ConcertHistory>;

    @Field(() => [ConcertGreeting], {nullable:true})
    greetings?: Array<ConcertGreeting>;

    @Field(() => [ConcertAccess], {nullable:true})
    accesses?: Array<ConcertAccess>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    concertHallId!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    published!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ConcertCount, {nullable:false})
    _count?: ConcertCount;
}
