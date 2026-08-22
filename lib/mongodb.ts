import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it to .env.local.");
  }
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    const promise = client.connect();
    // If the initial connection fails, drop the cached promise so the
    // next request tries again instead of reusing a permanently-broken one.
    promise.catch(() => {
      if (global._mongoClientPromise === promise) {
        global._mongoClientPromise = undefined;
      }
    });
    global._mongoClientPromise = promise;
  }
  return global._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db();
}
