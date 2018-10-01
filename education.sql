-- MySQL dump 10.15  Distrib 10.0.36-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: elmsoftware
-- ------------------------------------------------------
-- Server version	10.0.36-MariaDB-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `text` varchar(100) NOT NULL,
  `analis` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'Вова','Солнце светит ярко','[\"1\",\"2\",\"3\"]'),(2,'Вова','Дом выглядит красиво','[\"1\",\"2\",\"3\"]'),(3,'Вова','Ветхий старик устал молиться.','[\"4\",\"1\",\"2\",\"2\"]'),(16,'Ярослав','Дождь шёл, не переставая.','[\"1\",\"2\",\"3\",\"3\"]'),(17,'Ярослав','Воздушный змей летел, подгоняемый ветром.','[\"3\",\"1\",\"2\",\"3\",\"3\"]'),(18,'Ярослав','Мальчишки выбежали в коридор , спустились вниз и бросились за  угол школы.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(19,'Ярослав','Мальчишки выбежали в коридор,спустились вниз и бросились за  угол школы.','[\"1\",\"2\",\"3\",\"3\",\"2\",\"3\",\"6\",\"2\",\"3\",\"3\",\"5\"]'),(20,'Ярослав','Ночной мотылёк бился в окно комнаты.','[\"4\",\"1\",\"2\",\"3\",\"3\",\"5\"]'),(21,'Ярослав','Белка схватила орех и бросилась бежать.','[\"1\",\"2\",\"5\",\"6\",\"2\",\"2\"]'),(22,'Ярослав','Я люблю ходить в сад,где цветут красивые цветочки.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(23,'Ярослав','Я люблю ходить в сад, где цветут красивые цветочки.','[\"6\",\"1\",\"2\",\"3\",\"3\",\"6\",\"2\",\"6\",\"5\"]'),(24,'Конфета','Я пошла гулять в сад.','[\"1\",\"2\",\"2\",\"3\",\"3\"]'),(25,'Ярослав',' Вокруг дикой груши гудели пчёлы.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(26,'Ярослав','Вокруг дикой груши гудели пчёлы.','[\"3\",\"4\",\"3\",\"2\",\"1\"]'),(27,'Ярослав','Вчера я прогуливалась по красивому парку.','[\"3\",\"1\",\"2\",\"4\",\"4\",\"5\"]'),(28,'Ярослав','Сегодня мы находились в интересном музее.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(29,'Ярослав','Сегодня мы находились в интересном музее.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(30,'Ярослав','Зеленоватый сумрачный воздух, наполненный дымом и жёлтыми отсветами скал, струился над нами.','[\"4\",\"4\",\"1\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"2\",\"3\",\"3\"]'),(31,'Ярослав','Медведь средней величины возился около липы.','[\"1\",\"4\",\"4\",\"2\",\"3\",\"3\"]'),(32,'Ярослав','Почтальон молча разносил запакованные посылки.','[\"1\",\"3\",\"2\",\"4\",\"5\"]'),(33,'Ярослав','Мы гуляем в дождливый день.','[\"1\",\"2\",\"6\",\"4\",\"5\"]'),(34,'Ярослав','Светило яркое солнце.','[\"2\",\"4\",\"1\"]'),(35,'Ярослав','Папа купил елку.','[\"1\",\"2\",\"5\"]'),(36,'Ярослав','Зайчонок стрелой мчался по опушке леса.','[\"1\",\"3\",\"2\",\"3\",\"3\",\"3\"]'),(37,'Ярослав','Вечером шёл пушистый снег.','[\"3\",\"2\",\"4\",\"1\"]'),(38,'Ярослав','Мама отдала в садик игрушки.','[\"1\",\"2\",\"3\",\"3\",\"5\"]'),(39,'Ярослав','Я с опозданием вернулся из деревни поздно.','[\"3\",\"3\",\"3\",\"2\",\"1\",\"1\",\"3\"]'),(40,'Ярослав','Красивая береза на лугу стояла по осени.','[\"4\",\"1\",\"3\",\"3\",\"2\",\"5\",\"5\"]'),(41,'Ярослав','Брат на озере нашел большую лягушку.','[\"1\",\"3\",\"3\",\"2\",\"4\",\"5\"]');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landing`
--

DROP TABLE IF EXISTS `landing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `landing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `text` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landing`
--

LOCK TABLES `landing` WRITE;
/*!40000 ALTER TABLE `landing` DISABLE KEYS */;
INSERT INTO `landing` VALUES (1,'dfg',NULL,NULL),(2,'dfg',NULL,NULL),(3,'ilya221133@gmail.com',NULL,NULL),(4,'ilya221133@gmail.com',NULL,NULL),(5,'ilya221133@gmail.com',NULL,NULL),(6,'ilya221133@gmail.com',NULL,NULL),(7,'ilya221133@gmail.com',NULL,NULL),(8,'ilya221133@gmail.com',NULL,NULL),(9,'ilya221133@gmail.com',NULL,NULL),(10,'ilya221133@gmail.com',NULL,NULL),(11,'ilya221133@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `landing` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-01  7:42:29
