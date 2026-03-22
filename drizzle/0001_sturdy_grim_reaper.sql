CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`stripeSessionId` varchar(255) NOT NULL,
	`stripePaymentIntentId` varchar(255),
	`customerEmail` varchar(320),
	`customerName` varchar(255),
	`lineItems` text,
	`amountTotal` int,
	`currency` varchar(10) DEFAULT 'usd',
	`status` enum('pending','paid','cancelled') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`),
	CONSTRAINT `orders_stripeSessionId_unique` UNIQUE(`stripeSessionId`)
);
