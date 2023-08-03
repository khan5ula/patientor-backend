import data from '../../data/patients';
import { v1 as uuid } from 'uuid';
import { parseId } from '../utils';

import { NewPatient, NonSensitivePatient, Patient } from '../types';

const getEntries = (): Patient[] => {
  return data;
};

const findById = (id: string): Patient => {
  const foundPatient = data.find((patient) => patient.id === id);
  if (foundPatient) {
    return foundPatient;
  }
  throw new Error(`Error: Patient with the given id was not found`);
};

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
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

  data.concat(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
  findById,
};
