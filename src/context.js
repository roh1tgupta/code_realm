import { createContext } from 'react';

export const Empl = {
  "firstName": "Micheal",
  "LastName": "Zane",
  "phone": "+12490450934",
  "email": "micheal.zane@xyz.com",
  "address": "Time Square, New York",
  "workRemotely": true,
  "date": "12/3/19",
  "jobSeeking": "Not open to offers",
  "age": "30"
};

export const MyContext = createContext({
  employee: null,
  setEmployee: () => {},
});
