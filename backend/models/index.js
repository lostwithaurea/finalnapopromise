// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LOGIN, REGISTER } = initSchema(schema);

export {
  LOGIN,
  REGISTER
};