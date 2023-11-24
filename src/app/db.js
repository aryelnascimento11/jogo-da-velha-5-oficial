import postgres from 'postgres'
import sql from './db.js'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql
async function getUsersOver(age) {
    const users = await sql`
      select name, age
      from users
      where age > ${ age }
    `
    // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
    return users
  }