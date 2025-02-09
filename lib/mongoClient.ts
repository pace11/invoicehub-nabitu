import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = process.env.MONGODB_URI || ''

const client = new MongoClient(uri, {
  connectTimeoutMS: 30000,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
const clientPromise: Promise<MongoClient> = client.connect()

export { clientPromise }
