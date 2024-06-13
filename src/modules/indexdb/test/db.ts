// src/db.ts
import { openDB } from 'idb';

const DB_NAME = 'KaptaDB';
const DB_VERSION = 3;

const initDB = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore('users', { keyPath: '_id' });
      db.createObjectStore('workspaces', { keyPath: '_id' });
      db.createObjectStore('lists', { keyPath: '_id' });
      db.createObjectStore('comments', { keyPath: '_id' });
      db.createObjectStore('labels', { keyPath: '_id' });
    },
  });

  return db;
};

export { initDB };
