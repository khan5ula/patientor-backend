import data from '../../data/patients';

import { NoSensitiveDataPatient, Patient } from '../types';

const getEntries = (): Patient[] => {
  return data;
};

const getNonSensitiveEntries = (): NoSensitiveDataPatient[] => {
  return data.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export default {
  getEntries,
  getNonSensitiveEntries,
};
