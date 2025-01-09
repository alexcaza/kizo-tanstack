import { sqliteTable, text, int } from 'drizzle-orm/sqlite-core';

export const gifts = sqliteTable('gifts', {
    id: int('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: int('price'),
    recipientId: int('recipient_id').notNull(),
    occasionId: int('occasion_id').notNull(),
});

export const recipients = sqliteTable('recipients', {
    id: int('id').primaryKey(),
    name: text('name').notNull(),
    relationship: text('relationship'),
});

export const occasions = sqliteTable('occasions', {
    id: int('id').primaryKey(),
    name: text('name').notNull(),
    date: text('date').notNull(),
});