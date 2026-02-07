import { type User, regularUser } from './user-model.ts';


const formatName = (firstName : string, lastName : string) => {
  return `${firstName} ${lastName}`;
};

type Address  = {
  street: string,
  city: string,
  country: string,
  postalCode:string
}

const formatAddress = (address: Address) => {
  return `${address.street}, ${address.city}, ${address.country} ${address.postalCode}`;
};



const isCandidateForDeletion = (role: string, isActive : boolean) => {
  return role === 'guest' && !isActive;
};

interface Settings {
  language: string
}

const getUserLocale = (settings : Settings) => {
  return settings.language || 'en';
};

type DateOfBirth = Date;
type MinAge = number | undefined;

const validateAge = (dateOfBirth : DateOfBirth, minAge: MinAge) => {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    return age - 1 >= minAge;
  }

  return age >= minAge;
};

type PhoneNumbers = Array<string>;

const hasPhone = (phoneNumbers: PhoneNumbers) => {
  return phoneNumbers.length > 0;
};

type Email = string;
interface Settings {
  notifications : boolean
}

const canSendEmailNotification = (email: Email, settings : Settings) => {
  return Boolean(email) && settings.notifications;
};

formatName(regularUser.firstName, regularUser.lastName);
formatAddress(regularUser.address);
isCandidateForDeletion(regularUser.role, regularUser.isActive);
getUserLocale(regularUser.settings);
validateAge(regularUser.dateOfBirth, 18);
hasPhone(regularUser.phoneNumbers);
canSendEmailNotification(regularUser.email, regularUser.settings);
