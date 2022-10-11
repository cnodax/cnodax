CREATE DATABASE  IF NOT EXISTS `test_cnodax` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `test_cnodax`;
-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: test_cnodax
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT 'PK Autoincrement',
  `url` varchar(255) NOT NULL COMMENT 'Others Product images',
  `filename` varchar(100) NOT NULL COMMENT 'filename image',
  `product_id` bigint unsigned NOT NULL COMMENT 'Product owner',
  `principal` tinyint(1) DEFAULT NULL COMMENT 'Is principal',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `images_FK` (`product_id`),
  CONSTRAINT `images_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'http://localhost:3001/is/image/1665430007614.jpg','1665430007614.jpg',1,1,'2022-10-10 19:26:47','2022-10-10 19:26:47'),(2,'http://localhost:3001/is/image/1665430344593.jpg','1665430344593.jpg',2,1,'2022-10-10 19:32:24','2022-10-10 19:32:24'),(3,'http://localhost:3001/1665455052660.png','1665455052660.png',1,1,'2022-10-11 02:24:12','2022-10-11 02:24:12'),(4,'http://localhost:3001/1665455114394.png','1665455114394.png',1,1,'2022-10-11 02:25:14','2022-10-11 02:25:14');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT 'Autoincrement PK',
  `sku` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Internal stock-keeping unit. It is the candidate identifier of a product',
  `name` varchar(50) NOT NULL COMMENT 'Short description of the product',
  `brand` varchar(50) NOT NULL COMMENT 'Name of the brand',
  `size` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ST' COMMENT 'Size of the product',
  `price` decimal(10,2) NOT NULL DEFAULT '1.00' COMMENT 'Sell price',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `products_UN` (`sku`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'FAL-8406270','500 Zapatilla Urbana Mujer','New Balance','37',42990.00,NULL,NULL),(2,'FAL-88195228','Bicicleta Baltoro Aro 29','Jeep','ST',199999.00,NULL,'2022-10-11 00:49:15'),(3,'FAL-88189850','Camisa Manga Corta Hombre','Basement','M',24990.00,NULL,NULL),(4,'FAL-8406271','500 Zapatilla Urbana Mujer','New Balance','37',42990.00,'2022-10-10 17:20:31','2022-10-10 17:20:31'),(5,'FAL-8406290','600 Zapatilla Urbana Mujer','New Balance','37',42990.00,'2022-10-10 23:05:41','2022-10-10 23:05:41'),(6,'FAL-8406291','700 Zapatilla Urbana Mujer','New Balance','37',42990.00,'2022-10-10 23:06:34','2022-10-10 23:06:34'),(10,'FAL-8406280','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:35:26','2022-10-11 01:35:26'),(14,'FAL-8406281','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:37:34','2022-10-11 01:37:34'),(15,'FAL-8406282','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:38:13','2022-10-11 01:38:13'),(18,'FAL-8406283','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:39:33','2022-10-11 01:39:33'),(19,'FAL-8406284','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:44:10','2022-10-11 01:44:10'),(20,'FAL-8406285','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 01:51:02','2022-10-11 01:51:02'),(21,'FAL-8406286','780 Zapatilla Urbana Mujer','New Balance','39',4990.00,'2022-10-11 02:13:22','2022-10-11 02:13:22'),(22,'FAL-8406289','780 Zapatilla Urbana Mujer','New Balance','36',4990.00,'2022-10-11 02:26:04','2022-10-11 02:26:04');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'test_cnodax'
--

--
-- Dumping routines for database 'test_cnodax'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-10 23:39:02
