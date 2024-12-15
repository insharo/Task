export interface Country {
  id: string;
  name: string;
}

export interface Nationality {
  country: Country;
  countryId: number;
}

export interface LocalizedName {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

export interface NationalId {
  idNumber: string;
  expiryDate: string;
}

export interface User {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  title?: string;
  dateOfBirth?: string;
  gender?: string;
  maritalStatus?: {
    name: string;
  };
  nationalities: Nationality[];
  passport?: {
    number: string;
    issueDate: string;
    expiryDate: string;
  };
  dependants: number;
  localizedName: LocalizedName;
  nationalId: NationalId;
}

// Define the query result type
export interface GetUserQueryData {
  user: User;
}

// Define the query variables type
export interface GetUserQueryVariables {
  userId: number;
}
