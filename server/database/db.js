import mongoose from 'mongoose';

const Connection = async (username, password) => {
   // const URL = `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;
   const URL = `mongodb://${username}:${password}@ac-3dktwnq-shard-00-00.w3985bo.mongodb.net:27017,ac-3dktwnq-shard-00-01.w3985bo.mongodb.net:27017,ac-3dktwnq-shard-00-02.w3985bo.mongodb.net:27017/?ssl=true&replicaSet=atlas-14lnwo-shard-0&authSource=admin&retryWrites=true&w=majority`;
   try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;