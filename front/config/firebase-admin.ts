import { applicationDefault, initializeApp } from 'firebase-admin/app'
console.log(process.env.FIREBASE_DATABASE_URL)
const app = initializeApp({
  credential: applicationDefault(),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
})

export default app