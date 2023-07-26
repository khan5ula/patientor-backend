import data from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { parseId } from '../utils';

import { NewPatient, NoSensitiveDataPatient, Patient } from '../types';

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

const addPatient = (entry: NewPatient): Patient => {
  const id: string = parseId(uuid());
  const newPatient = {
    id: id,
    ...entry,
  };

  data.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
