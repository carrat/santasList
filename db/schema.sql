CREATE DATABASE listmaker_db;

USE listmaker_db;

CREATE TABLE `children` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `child_name` varchar(150) NOT NULL,
  `naughty` tinyint(1) NOT NULL DEFAULT '0',
  `action_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);