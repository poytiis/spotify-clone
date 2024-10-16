import AuthModel from './prisma/auth';
const selectedDatabaseInterface = `${process.env.DATABASE_INTERFACE}`;

export default AuthModel;

