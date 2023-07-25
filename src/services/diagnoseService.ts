import data from '../../data/diagnoses';
import { Diagnose } from '../types';

const getEntries = (): Diagnose[] => {
  return data;
};

export default {
  getEntries,
};
