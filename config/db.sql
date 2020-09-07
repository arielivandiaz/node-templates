CREATE TABLE `test_table` (
    `id` INTEGER AUTO_INCREMENT,
    `name` VARCHAR(125) NULL DEFAULT NULL,
    `counter` SMALLINT NULL DEFAULT 0,
    `status` SMALLINT NULL DEFAULT 1,
    `status_alt` SMALLINT NULL DEFAULT 1,
    `created` TIMESTAMP NULL DEFAULT current_timestamp(),
    `updated` TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);