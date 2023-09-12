import mysql from 'mysql2/promise'; // Note: Import the 'promise' version of mysql2
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST_NAME,
    user: process.env.MYSQL_USER,         // Use 'USER' here if it's defined as 'USER' in your .env file
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

pool
  .getConnection()
  .then((connection) => {
    console.log('MySQL connection successful');
    connection.release(); // Release the connection back to the pool
  })
  .catch((error) => {
    console.error('Error connecting to MySQL:', error);
  });
  export const getMine = async (
    state: string,
    district: string,
    mine_name: string,
    mine_owner: string
  ): Promise<any> => {
    try {
      const query = `
        SELECT * FROM coal_mines 
        WHERE \`State/UT Name\` = ? 
          AND \`District Name\` = ? 
          AND \`Mine Name\` = ? 
          AND \`Coal Mine Owner Name\` = ?
      `;
  
      const [rows] = await pool.query(query, [state, district, mine_name, mine_owner]);
      console.log(rows);
      
      return rows;
    } catch (error) {
      console.error('Error executing SQL query:', error);
      throw error; // You might want to handle this error more gracefully in your application
    }
  };

export const getAllMines = async (): Promise<any> => {
  const result = await pool.query(`
    SELECT * FROM coal_mines
  `);
  return result[0];
};
