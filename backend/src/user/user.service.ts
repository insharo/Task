import { Injectable } from '@nestjs/common';
import { User, UpdateResponse } from './user.model';

@Injectable()
export class UserService {
  private user: User = {
    firstName: 'Zaria',
    fatherName: 'Edward',
    grandfatherName: 'Ernest',
    familyName: 'Willie',
    title: 'Mr.',
    dateOfBirth: '1980-01-04',
    gender: 'Male',
    localizedName: {
      firstName: 'صفوان',
      fatherName: 'حمدان',
      grandfatherName: 'هشام',
      familyName: 'عباس',
    },
    nationalId: {
      idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
      expiryDate: '2024-07-24T22:45:29.864Z',
    },
    nationalities: [
      { country: { id: 'egypt', name: 'Egypt' }, countryId: 1016 },
      { country: { id: 'france', name: 'France' }, countryId: 1020 },
    ],

    maritalStatus: { id: 27, name: 'Divorced' },
    dependants: 60,
    passport: {
      number: 'A135464',
      issueDate: '1980-04-01',
      expiryDate: '2025-04-01',
    },
  };

  getUser(userId: number): User {
    console.log(this.user);
    return this.user;
  }

  updateUser(userId: number, input: Partial<User>): UpdateResponse {
    this.user = { ...this.user, ...input };
    return {
      success: true,
      message: 'User updated successfully',
      user: this.user,
    };
  }
}
