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
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'Вова','Солнце светит ярко','[\"1\",\"2\",\"3\"]'),(2,'Вова','Дом выглядит красиво','[\"1\",\"2\",\"3\"]'),(3,'Вова','Ветхий старик устал молиться.','[\"4\",\"1\",\"2\",\"2\"]'),(16,'Ярослав','Дождь шёл, не переставая.','[\"1\",\"2\",\"3\",\"3\"]'),(17,'Ярослав','Воздушный змей летел, подгоняемый ветром.','[\"3\",\"1\",\"2\",\"3\",\"3\"]'),(18,'Ярослав','Мальчишки выбежали в коридор , спустились вниз и бросились за  угол школы.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(19,'Ярослав','Мальчишки выбежали в коридор,спустились вниз и бросились за  угол школы.','[\"1\",\"2\",\"3\",\"3\",\"2\",\"3\",\"6\",\"2\",\"3\",\"3\",\"5\"]'),(20,'Ярослав','Ночной мотылёк бился в окно комнаты.','[\"4\",\"1\",\"2\",\"3\",\"3\",\"5\"]'),(21,'Ярослав','Белка схватила орех и бросилась бежать.','[\"1\",\"2\",\"5\",\"6\",\"2\",\"2\"]'),(22,'Ярослав','Я люблю ходить в сад,где цветут красивые цветочки.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(23,'Ярослав','Я люблю ходить в сад, где цветут красивые цветочки.','[\"6\",\"1\",\"2\",\"3\",\"3\",\"6\",\"2\",\"6\",\"5\"]'),(24,'Конфета','Я пошла гулять в сад.','[\"1\",\"2\",\"2\",\"3\",\"3\"]'),(25,'Ярослав',' Вокруг дикой груши гудели пчёлы.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(26,'Ярослав','Вокруг дикой груши гудели пчёлы.','[\"3\",\"4\",\"3\",\"2\",\"1\"]'),(27,'Ярослав','Вчера я прогуливалась по красивому парку.','[\"3\",\"1\",\"2\",\"4\",\"4\",\"5\"]'),(28,'Ярослав','Сегодня мы находились в интересном музее.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(29,'Ярослав','Сегодня мы находились в интересном музее.','[\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"]'),(30,'Ярослав','Зеленоватый сумрачный воздух, наполненный дымом и жёлтыми отсветами скал, струился над нами.','[\"4\",\"4\",\"1\",\"4\",\"4\",\"4\",\"4\",\"4\",\"4\",\"2\",\"3\",\"3\"]'),(31,'Ярослав','Медведь средней величины возился около липы.','[\"1\",\"4\",\"4\",\"2\",\"3\",\"3\"]'),(32,'Ярослав','Почтальон молча разносил запакованные посылки.','[\"1\",\"3\",\"2\",\"4\",\"5\"]'),(33,'Ярослав','Мы гуляем в дождливый день.','[\"1\",\"2\",\"6\",\"4\",\"5\"]'),(34,'Ярослав','Светило яркое солнце.','[\"2\",\"4\",\"1\"]'),(35,'Ярослав','Папа купил елку.','[\"1\",\"2\",\"5\"]'),(36,'Ярослав','Зайчонок стрелой мчался по опушке леса.','[\"1\",\"3\",\"2\",\"3\",\"3\",\"3\"]'),(37,'Ярослав','Вечером шёл пушистый снег.','[\"3\",\"2\",\"4\",\"1\"]'),(38,'Ярослав','Мама отдала в садик игрушки.','[\"1\",\"2\",\"3\",\"3\",\"5\"]'),(39,'Ярослав','Я с опозданием вернулся из деревни поздно.','[\"3\",\"3\",\"3\",\"2\",\"1\",\"1\",\"3\"]'),(40,'Ярослав','Красивая береза на лугу стояла по осени.','[\"4\",\"1\",\"3\",\"3\",\"2\",\"5\",\"5\"]'),(41,'Ярослав','Брат на озере нашел большую лягушку.','[\"1\",\"3\",\"3\",\"2\",\"4\",\"5\"]'),(42,'Ярослав','Мама готовит ужин.','[\"1\",\"2\",\"5\"]'),(43,'Ярослав','Папа читает новую газету.','[\"1\",\"2\",\"4\",\"5\"]'),(44,'Ярослав','Сестра делает много уроков.','[\"1\",\"2\",\"5\",\"5\"]'),(45,'Ярослав','Погода на улице испортилась снова.','[\"1\",\"6\",\"5\",\"2\",\"5\"]'),(46,'Ярослав','Я иду гулять в новых сапожках.','[\"1\",\"2\",\"2\",\"6\",\"4\",\"5\"]'),(47,'Ярослав','Мальчики и девочки пели и танцевали.','[\"1\",\"6\",\"1\",\"2\",\"6\",\"2\"]'),(48,'Ярослав','Мороз крепчал и щипал уши, лицо и руки.','[\"3\",\"2\",\"6\",\"2\",\"5\",\"5\",\"6\",\"5\"]'),(49,'Ярослав','Весной обильно цветут сирень, черемуха и жасмин.','[\"3\",\"3\",\"2\",\"1\",\"1\",\"6\",\"1\"]'),(50,'Ярослав','Листья бывают зеленые, желтые, красные.','[\"1\",\"2\",\"4\",\"4\",\"4\"]'),(51,'Ярослав','Улетают стрижи, журавли, ласточки.','[\"2\",\"1\",\"1\",\"1\"]'),(52,'Ярослав','Трава завяла, засохла, потемнела.','[\"1\",\"2\",\"2\",\"2\"]'),(53,'Ярослав','Мальчик бежит.','[\"1\",\"2\"]'),(54,'Ярослав','Земля круглая.','[\"1\",\"2\"]'),(55,'Ярослав','Девочка думает.','[\"1\",\"2\"]'),(56,'Ярослав','Режиссер выбрал спаниеля Оливера.','[\"1\",\"2\",\"5\",\"4\"]'),(57,'Ярослав','Сосед мой, хирург.','[\"1\",\"4\",\"4\"]'),(58,'Ярослав','Как человек образованный, наш дедушка хорошо знал историю.','[\"4\",\"4\",\"4\",\"6\",\"1\",\"5\",\"2\",\"5\"]'),(59,'Ярослав','Прекрасный наладчик станков, Дубров был нарасхват в цеху.','[\"4\",\"4\",\"4\",\"1\",\"6\",\"3\",\"6\",\"3\"]'),(60,'Ярослав','Умельцы бобры сплавляют.','[\"4\",\"1\",\"2\"]'),(61,'Ярослав','Ярко горят уличные фонари.','[\"3\",\"2\",\"4\",\"1\"]'),(62,'Ярослав','Кира идет на каток.','[\"1\",\"2\",\"3\",\"3\"]'),(63,'Ярослав','Блестит лед.','[\"2\",\"1\"]'),(64,'Ярослав','Девочка надела коньки.','[\"1\",\"2\",\"5\"]'),(65,'Ярослав','Утром солнце осветило родную деревню.','[\"3\",\"1\",\"2\",\"4\",\"5\"]'),(66,'Ярослав','Варенуха подал ему срочную телеграмму.','[\"1\",\"2\",\"5\",\"4\",\"5\"]'),(67,'Ярослав','Я читаю интересную книгу.','[\"1\",\"2\",\"4\",\"4\"]'),(68,'Ярослав','Конек режет лед.','[\"1\",\"2\",\"5\"]'),(69,'Ярослав','Весло задевает водоросли.','[\"1\",\"2\",\"5\"]'),(70,'Ярослав','Встретить ночь готовится природа.','[\"5\",\"5\",\"2\",\"1\"]');
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

-- Dump completed on 2018-10-01 22:09:34