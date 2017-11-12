-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 02, 2017 at 04:34 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `foodtrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `comida`
--

CREATE TABLE IF NOT EXISTS `comida` (
  `id` int(255) NOT NULL,
  `dateT` varchar(255) NOT NULL,
  `nombreRestaurante` varchar(255) NOT NULL,
  `emailRestaurante` varchar(255) NOT NULL,
  `tomate` int(255) NOT NULL,
  `cebolla` int(255) NOT NULL,
  `aguacate` int(255) NOT NULL,
  `cilantro` int(255) NOT NULL,
  `pina` int(255) NOT NULL,
  `lechuga` int(255) NOT NULL,
  `papa` int(255) NOT NULL,
  `chile` int(255) NOT NULL,
  `apio` int(255) NOT NULL,
  `zanahoria` int(255) NOT NULL,
  `comentarios` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comida`
--

INSERT INTO `comida` (`id`, `dateT`, `nombreRestaurante`, `emailRestaurante`, `tomate`, `cebolla`, `aguacate`, `cilantro`, `pina`, `lechuga`, `papa`, `chile`, `apio`, `zanahoria`, `comentarios`) VALUES
(1, '1 November 2017, 10:17 pm', 'Tacos Piedra', 'tacospiedra@hotmail.com', 4, 3, 6, 4, 1, 2, 8, 12, 15, 12, 'Es urgente para antes de las 8 AM');

-- --------------------------------------------------------

--
-- Table structure for table `distribuidor`
--

CREATE TABLE IF NOT EXISTS `distribuidor` (
  `id` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `distribuidor`
--

INSERT INTO `distribuidor` (`id`, `nombre`, `email`, `pass`) VALUES
(1, 'Distribuidor', 'dist@gmail.com', 'dist');

-- --------------------------------------------------------

--
-- Table structure for table `restaurante`
--

CREATE TABLE IF NOT EXISTS `restaurante` (
  `id` int(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `tomateT` int(11) NOT NULL,
  `cebollaT` int(11) NOT NULL,
  `aguacateT` int(11) NOT NULL,
  `cilantroT` int(11) NOT NULL,
  `pinaT` int(11) NOT NULL,
  `lechugaT` int(11) NOT NULL,
  `papasT` int(11) NOT NULL,
  `chileT` int(11) NOT NULL,
  `apioT` int(11) NOT NULL,
  `zanahoriaT` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurante`
--

INSERT INTO `restaurante` (`id`, `nombre`, `email`, `pass`, `tomateT`, `cebollaT`, `aguacateT`, `cilantroT`, `pinaT`, `lechugaT`, `papasT`, `chileT`, `apioT`, `zanahoriaT`) VALUES
(1, 'Tacos Andre', 'tacosandre@gmail.com', 'tacos', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 'Tacos Piedra', 'tacospiedra@hotmail.com', 'tacospiedra', 4, 3, 6, 4, 1, 2, 8, 12, 15, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comida`
--
ALTER TABLE `comida`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `distribuidor`
--
ALTER TABLE `distribuidor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurante`
--
ALTER TABLE `restaurante`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comida`
--
ALTER TABLE `comida`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `distribuidor`
--
ALTER TABLE `distribuidor`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `restaurante`
--
ALTER TABLE `restaurante`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
