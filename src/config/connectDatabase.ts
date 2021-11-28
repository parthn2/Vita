import { DATABASE_URL as mongoURI } from './keys';
import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect(mongoURI);
    console.log('MongoDB Connected :D');
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
