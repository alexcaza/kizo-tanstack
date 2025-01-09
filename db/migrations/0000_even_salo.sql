CREATE TABLE `gifts` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`price` integer,
	`recipient_id` integer NOT NULL,
	`occasion_id` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `occasions` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `recipients` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`relationship` text
);
