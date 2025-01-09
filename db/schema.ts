import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const gifts = sqliteTable('gifts', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: integer('price'),
  recipientId: integer('recipient_id').notNull(),
  occasionId: integer('occasion_id').notNull(),
});

export const recipients = sqliteTable('recipients', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  relationship: text('relationship'),
});

export const occasions = sqliteTable('occasions', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  date: text('date').notNull(),
});