CREATE TABLE `reg_confirmation` (
  `fk_registration_id` int,
  `created_at` datetime DEFAULT (now()),
  `expiration_at` datetime DEFAULT (now()) COMMENT 'Created date plus two hours',
  `validation_at` datetime DEFAULT null,
  `code` varchar(255)
);

CREATE TABLE `registration` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `created at` timestamp
);

CREATE TABLE `startup` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `email` varchar(255),
  `description` text,
  `created_at` datetime DEFAULT (now()),
  `updated_at` datetime DEFAULT (now())
);

CREATE TABLE `tags` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `tags_startup` (
  `fk_startup_id` int,
  `fk_tags_id` int
);

CREATE TABLE `social_startup` (
  `fk_startup_id` int,
  `fk_social_id` int,
  `decription` varchar(255)
);

CREATE TABLE `social` (
  `id` int UNIQUE PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(255)
);

ALTER TABLE `reg_confirmation` ADD FOREIGN KEY (`fk_registration_id`) REFERENCES `registration` (`id`);

CREATE TABLE `startup_tags_startup` (
  `startup_id` int,
  `tags_startup_fk_startup_id` int,
  PRIMARY KEY (`startup_id`, `tags_startup_fk_startup_id`)
);

ALTER TABLE `startup_tags_startup` ADD FOREIGN KEY (`startup_id`) REFERENCES `startup` (`id`);

ALTER TABLE `startup_tags_startup` ADD FOREIGN KEY (`tags_startup_fk_startup_id`) REFERENCES `tags_startup` (`fk_startup_id`);


CREATE TABLE `tags_tags_startup` (
  `tags_id` int,
  `tags_startup_fk_tags_id` int,
  PRIMARY KEY (`tags_id`, `tags_startup_fk_tags_id`)
);

ALTER TABLE `tags_tags_startup` ADD FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`);

ALTER TABLE `tags_tags_startup` ADD FOREIGN KEY (`tags_startup_fk_tags_id`) REFERENCES `tags_startup` (`fk_tags_id`);


CREATE TABLE `startup_social_startup` (
  `startup_id` int,
  `social_startup_fk_startup_id` int,
  PRIMARY KEY (`startup_id`, `social_startup_fk_startup_id`)
);

ALTER TABLE `startup_social_startup` ADD FOREIGN KEY (`startup_id`) REFERENCES `startup` (`id`);

ALTER TABLE `startup_social_startup` ADD FOREIGN KEY (`social_startup_fk_startup_id`) REFERENCES `social_startup` (`fk_startup_id`);


CREATE TABLE `social_social_startup` (
  `social_id` int,
  `social_startup_fk_social_id` int,
  PRIMARY KEY (`social_id`, `social_startup_fk_social_id`)
);

ALTER TABLE `social_social_startup` ADD FOREIGN KEY (`social_id`) REFERENCES `social` (`id`);

ALTER TABLE `social_social_startup` ADD FOREIGN KEY (`social_startup_fk_social_id`) REFERENCES `social_startup` (`fk_social_id`);

