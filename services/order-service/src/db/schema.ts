import { pgTable, varchar, timestamp, uuid, integer } from 'drizzle-orm/pg-core';

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id'), 
  customerName: varchar('customer_name', { length: 255 }).notNull(), 
  email: varchar('email', { length: 255 }).notNull(),
  tableNumber: varchar('table_number', { length: 50 }).notNull(),
  totalAmount: integer('total_amount').notNull(),
  status: varchar('status', { length: 50 }).default('PENDING_PAYMENT').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
export const orderItems = pgTable('order_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').references(() => orders.id).notNull(),
  itemId: uuid('item_id').notNull(), // Soft link to Menu Service
  quantity: integer('quantity').notNull(),
  priceAtPurchase: integer('price_at_purchase').notNull(),
});