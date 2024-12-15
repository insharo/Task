import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class Passport {
  @Field()
  number: string;

  @Field()
  issueDate: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
export class Country {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Nationality {
  @Field(() => Country)
  country: Country;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
export class MaritalStatus {
  @Field()
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field(() => Int)
  dependants: number;

  @Field(() => Passport, { nullable: true })
  passport?: Passport;
}

@ObjectType()
export class UpdateResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

import { InputType } from '@nestjs/graphql';

@InputType()
export class LocalizedNameInput implements Required<LocalizedName> {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
export class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
export class CountryInput {
  @Field()
  id: string;

  @Field()
  name: string; // Add this to align with the Country type
}

@InputType()
export class NationalityInput {
  @Field(() => CountryInput)
  country: CountryInput;

  @Field(() => Int)
  countryId: number;
}

@InputType()
export class UserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field(() => LocalizedNameInput, { nullable: true })
  localizedName?: LocalizedNameInput;

  @Field(() => NationalIdInput, { nullable: true })
  nationalId?: NationalIdInput;

  @Field(() => [NationalityInput], { nullable: true })
  nationalities?: NationalityInput[];

  @Field(() => Int, { nullable: true })
  dependants?: number;
}
