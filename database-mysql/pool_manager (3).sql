-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2019 at 03:33 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pool_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `coach`
--

CREATE TABLE `coach` (
  `user_Id` int(7) NOT NULL,
  `NIC` varchar(13) NOT NULL,
  `occupation` varchar(225) NOT NULL,
  `experience` varchar(225) NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `full_name` text NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(225) NOT NULL,
  `cell_phone` int(10) NOT NULL,
  `fixed_phone` int(10) NOT NULL,
  `email` varchar(225) NOT NULL,
  `imglink` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `coach`
--

INSERT INTO `coach` (`user_Id`, `NIC`, `occupation`, `experience`, `first_name`, `last_name`, `full_name`, `gender`, `dob`, `address`, `cell_phone`, `fixed_phone`, `email`, `imglink`, `status`) VALUES
(2, '951538892v', 'default', 'work 2 years as the head coach at abc collage swimming pool', 'nadeesha', 'pathiraja', 'nadeesha pathiraja', 'male', '2019-05-24', '34,1st street,matara.', 71234567, 112898989, 'nadeeshapthiraja@gmail.com', '', 'default');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `event_Id` int(5) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_date` date NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `coordinator` varchar(100) NOT NULL,
  `contact` int(10) NOT NULL,
  `description` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`event_Id`, `event_name`, `event_date`, `start_time`, `end_time`, `coordinator`, `contact`, `description`) VALUES
(0, 'event1', '2019-05-15', '08:00:00', '00:00:08', '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_Id` int(8) NOT NULL,
  `event_Id` int(5) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `poolmanager`
--

CREATE TABLE `poolmanager` (
  `user_Id` int(7) NOT NULL,
  `NIC` varchar(13) NOT NULL,
  `experience` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `full_name` varchar(225) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `address` varchar(225) NOT NULL,
  `cell_phone` int(10) NOT NULL,
  `fixed_phone` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `imglink` varchar(225) NOT NULL,
  `status` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `skill_Id` int(3) NOT NULL,
  `skill_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `user_Id` int(7) NOT NULL,
  `student_Id` int(5) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `full_name` varchar(225) NOT NULL,
  `dob` date NOT NULL,
  `gender` text NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cell_phone` int(10) NOT NULL,
  `fixed_phone` int(10) NOT NULL,
  `status` varchar(225) NOT NULL,
  `grade` int(2) NOT NULL,
  `school` varchar(225) NOT NULL,
  `parent` varchar(255) NOT NULL,
  `coach` int(7) NOT NULL,
  `dateOfAdmission` date NOT NULL,
  `img_link` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_skill`
--

CREATE TABLE `student_skill` (
  `student` int(7) NOT NULL,
  `skill` int(3) NOT NULL,
  `level` int(1) NOT NULL,
  `status` varchar(225) NOT NULL,
  `coach` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_Id` int(7) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_Id`, `user_name`, `password`, `user_type`) VALUES
(1, 'kushan01', 'pass/123', 'S'),
(2, 'Nadeesha', 'pass/123', 'C'),
(13, 'Randima', 'pass/123', 'P'),
(15, 'Kaumini', 'pass/123', 'S');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coach`
--
ALTER TABLE `coach`
  ADD PRIMARY KEY (`user_Id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`event_Id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_Id`),
  ADD KEY `event_Id` (`event_Id`);

--
-- Indexes for table `poolmanager`
--
ALTER TABLE `poolmanager`
  ADD PRIMARY KEY (`user_Id`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `NIC_2` (`NIC`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`skill_Id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`user_Id`),
  ADD UNIQUE KEY `Student_id` (`student_Id`),
  ADD KEY `coach` (`coach`);

--
-- Indexes for table `student_skill`
--
ALTER TABLE `student_skill`
  ADD PRIMARY KEY (`student`,`skill`),
  ADD KEY `skill` (`skill`),
  ADD KEY `coach` (`coach`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_Id`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `user_name_2` (`user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `image_Id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `skill_Id` int(3) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_Id` int(7) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `coach`
--
ALTER TABLE `coach`
  ADD CONSTRAINT `coach_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`event_Id`) REFERENCES `event` (`event_Id`);

--
-- Constraints for table `poolmanager`
--
ALTER TABLE `poolmanager`
  ADD CONSTRAINT `poolmanager_ibfk_1` FOREIGN KEY (`user_Id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`user_Id`) REFERENCES `user` (`user_id`),
  ADD CONSTRAINT `student_ibfk_2` FOREIGN KEY (`coach`) REFERENCES `coach` (`user_id`),
  ADD CONSTRAINT `student_ibfk_3` FOREIGN KEY (`user_Id`) REFERENCES `user` (`user_id`);

--
-- Constraints for table `student_skill`
--
ALTER TABLE `student_skill`
  ADD CONSTRAINT `student_skill_ibfk_1` FOREIGN KEY (`student`) REFERENCES `student` (`user_Id`),
  ADD CONSTRAINT `student_skill_ibfk_2` FOREIGN KEY (`skill`) REFERENCES `skill` (`skill_id`),
  ADD CONSTRAINT `student_skill_ibfk_3` FOREIGN KEY (`coach`) REFERENCES `coach` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
