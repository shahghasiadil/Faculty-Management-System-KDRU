-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2020 at 04:43 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `srms2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(100) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `updationDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `UserName`, `Password`, `updationDate`) VALUES
(1, 'admin', '0cc175b9c0f1b6a831c399e269772661', '2017-05-13 11:18:49');

-- --------------------------------------------------------

--
-- Table structure for table `middlemark`
--

CREATE TABLE IF NOT EXISTS `middlemark` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sub_id` varchar(65) NOT NULL,
  `Marks` float NOT NULL,
  `creat_At` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `studentid` varchar(65) NOT NULL,
  `semesterID` int(11) NOT NULL,
  `classId` int(11) NOT NULL,
  `teacherid` varchar(65) NOT NULL,
  `prieodid` int(11) NOT NULL,
  `attend` varchar(65) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `middlemark`
--

INSERT INTO `middlemark` (`id`, `sub_id`, `Marks`, `creat_At`, `studentid`, `semesterID`, `classId`, `teacherid`, `prieodid`, `attend`) VALUES
(1, '4', 12, '2020-09-25 04:27:54', '7', 2, 1, '5', 1, 'حاضر'),
(2, '4', 14, '2020-09-25 04:27:54', '8', 2, 1, '5', 1, 'حاضر'),
(3, '4', 16, '2020-09-25 04:27:54', '9', 2, 1, '5', 1, 'حاضر'),
(4, '4', 18, '2020-09-25 04:27:54', '10', 2, 1, '5', 1, 'حاضر'),
(5, '4', 20, '2020-09-25 04:27:54', '11', 2, 1, '5', 1, 'حاضر'),
(6, '4', 4, '2020-09-25 07:02:50', '7', 2, 1, '5', 1, 'حاضر'),
(7, '4', 4, '2020-09-25 07:02:50', '8', 2, 1, '5', 1, 'محروم'),
(8, '4', 6, '2020-09-25 07:02:50', '9', 2, 1, '5', 1, 'حاضر'),
(9, '4', 6, '2020-09-25 07:02:50', '10', 2, 1, '5', 1, 'حاضر'),
(10, '4', 6, '2020-09-25 07:02:50', '11', 2, 1, '5', 1, 'حاضر');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE IF NOT EXISTS `salary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountNumber` varchar(100) NOT NULL,
  `studentId` varchar(65) NOT NULL,
  `classid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `accountNumber` (`accountNumber`),
  KEY `studentid` (`studentId`),
  KEY `class_id` (`classid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`id`, `accountNumber`, `studentId`, `classid`) VALUES
(1, '2147483647999', 'cs03001', 1),
(4, '1234676789000', 'cs03006', 1),
(8, '23456767890', 'cs03003', 1),
(9, '2345678965432', 'cs03004', 1),
(10, '234567890-888', 'CS01001', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblattence`
--

CREATE TABLE IF NOT EXISTS `tblattence` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `studentId` int(11) NOT NULL,
  `StartDate` varchar(70) COLLATE utf8_persian_ci NOT NULL,
  `EndDate` varchar(70) COLLATE utf8_persian_ci NOT NULL,
  `periodId` int(11) NOT NULL,
  `classId` int(11) NOT NULL,
  `semesterid` int(11) NOT NULL,
  `subjectId` int(11) NOT NULL,
  `teacherid` int(11) NOT NULL,
  `numberOfPersent` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `tblattence`
--

INSERT INTO `tblattence` (`ID`, `studentId`, `StartDate`, `EndDate`, `periodId`, `classId`, `semesterid`, `subjectId`, `teacherid`, `numberOfPersent`) VALUES
(1, 7, '1399/6/15', '1399/7/15', 1, 1, 2, 4, 5, 12),
(2, 8, '1399/6/15', '1399/7/15', 1, 1, 2, 4, 5, 13),
(3, 9, '1399/6/15', '1399/7/15', 1, 1, 2, 4, 5, 14),
(4, 10, '1399/6/15', '1399/7/15', 1, 1, 2, 4, 5, 11),
(5, 11, '1399/6/15', '1399/7/15', 1, 1, 2, 4, 5, 16),
(6, 12, '1399/5/15', '1399/7/15', 2, 2, 3, 7, 5, 30),
(7, 13, '1399/5/15', '1399/7/15', 2, 2, 3, 7, 5, 32),
(8, 14, '1399/5/15', '1399/7/15', 2, 2, 3, 7, 5, 20),
(9, 15, '1399/5/15', '1399/7/15', 2, 2, 3, 7, 5, 29);

-- --------------------------------------------------------

--
-- Table structure for table `tblclasses`
--

CREATE TABLE IF NOT EXISTS `tblclasses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(80) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `ClassNameNumeric` int(4) DEFAULT NULL,
  `Section` varchar(5) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdationDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf16 COLLATE=utf16_persian_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tblclasses`
--

INSERT INTO `tblclasses` (`id`, `ClassName`, `ClassNameNumeric`, `Section`, `CreationDate`, `UpdationDate`) VALUES
(1, 'اول', 1, 'A', '2020-09-14 10:19:54', NULL),
(2, 'دویم', 2, 'A', '2020-03-10 10:52:34', NULL),
(3, 'دریم', 3, 'A', '2020-03-11 14:08:59', NULL),
(4, 'ځلورم', 4, 'A', '2020-09-07 06:58:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblexamtimetable`
--

CREATE TABLE IF NOT EXISTS `tblexamtimetable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dayofweek` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `class` varchar(30) NOT NULL,
  `semester` varchar(30) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `teacher` varchar(100) NOT NULL,
  `teacherassistant` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `starttime` time NOT NULL,
  `remarks` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `tblexamtimetable`
--

INSERT INTO `tblexamtimetable` (`id`, `dayofweek`, `date`, `class`, `semester`, `subject`, `teacher`, `teacherassistant`, `starttime`, `remarks`) VALUES
(1, 'Sunday', '2020-09-18', '1', '1', '2', '9', 'حبیب الهی رحمانی', '12:06:00', 'dddd'),
(2, 'Tuesday', '2020-09-18', '1', '1', '1', '5', 'وحیدالله مدثر', '12:06:00', 'Come on Time'),
(3, 'Tuesday', '2020-09-18', '1', '1', '3', '10', 'سید احمد محبوبی', '08:10:00', 'dddd'),
(4, 'Saturday', '2020-09-18', '2', '3', '1', '4', 'فهیم اح', '12:06:00', 'dddd'),
(5, 'Saturday', '2020-09-18', '2', '3', '1', '5', 'فهیم اح', '12:06:00', 'dddd'),
(6, 'Saturday', '2020-09-18', '3', '5', '1', '6', 'فهیم اح', '12:06:00', 'dddd'),
(7, 'Saturday', '2020-09-18', '3', '5', '1', '7', 'فهیم اح', '12:06:00', 'dddd'),
(8, 'Thuesday', '2020-09-18', '3', '5', '9', '7', 'محمد صدیق روحی', '12:06:00', 'Came on time'),
(9, 'Saturday', '2020-09-18', '2', '4', '1', '9', 'فهیم اح', '12:06:00', 'dddd'),
(10, 'Saturday', '2020-09-18', '4', '4', '1', '9', 'فهیم اح', '12:06:00', 'dddd'),
(11, 'Saturday', '2020-09-18', '4', '7', '1', '9', 'فهیم اح', '12:06:00', 'dddd');

-- --------------------------------------------------------

--
-- Table structure for table `tblmarks`
--

CREATE TABLE IF NOT EXISTS `tblmarks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chance` int(11) NOT NULL,
  `SubjectID` varchar(65) NOT NULL,
  `StudentID` varchar(60) DEFAULT NULL,
  `ClassID` int(11) NOT NULL,
  `SemesterID` int(11) NOT NULL,
  `TeacherID` varchar(65) NOT NULL,
  `assignment` int(10) DEFAULT NULL,
  `attendence` int(10) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `finalscore` int(10) DEFAULT NULL,
  `postingdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updationdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `create_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `midleId` int(11) NOT NULL,
  `prieodid` int(11) NOT NULL,
  `attend` varchar(65) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tblmarks`
--

INSERT INTO `tblmarks` (`id`, `chance`, `SubjectID`, `StudentID`, `ClassID`, `SemesterID`, `TeacherID`, `assignment`, `attendence`, `total`, `finalscore`, `postingdate`, `updationdate`, `create_at`, `midleId`, `prieodid`, `attend`) VALUES
(1, 3, '4', '7', 1, 2, '5', 8, 9, 73, 44, '2020-09-25 04:29:59', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 1, 'حاضر'),
(2, 3, '4', '8', 1, 2, '5', 8, 9, 64, 33, '2020-09-25 04:29:59', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 1, 'حاضر'),
(3, 3, '4', '9', 1, 2, '5', 8, 9, 88, 55, '2020-09-25 04:29:59', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 1, 'حاضر'),
(4, 3, '4', '10', 1, 2, '5', 8, 6, 77, 45, '2020-09-25 04:29:59', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4, 1, 'حاضر'),
(5, 3, '4', '11', 1, 2, '5', 8, 4, 78, 46, '2020-09-25 04:29:59', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5, 1, 'حاضر');

-- --------------------------------------------------------

--
-- Table structure for table `tblperiod`
--

CREATE TABLE IF NOT EXISTS `tblperiod` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Period` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `PeriodNum` int(11) NOT NULL,
  `PeriodYear` varchar(30) COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tblperiod`
--

INSERT INTO `tblperiod` (`ID`, `Period`, `PeriodNum`, `PeriodYear`) VALUES
(1, 'اول', 1, '1395-1396'),
(2, 'دویم', 2, '1396-1397'),
(3, 'دریم', 3, '1397-1398'),
(4, 'پنڅم', 5, '1399-1400');

-- --------------------------------------------------------

--
-- Table structure for table `tblsemester`
--

CREATE TABLE IF NOT EXISTS `tblsemester` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Semester` varchar(100) NOT NULL,
  `ClassID` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tblsemester`
--

INSERT INTO `tblsemester` (`ID`, `Semester`, `ClassID`) VALUES
(1, 'First', 1),
(2, 'Second', 1),
(3, 'Third', 2),
(4, 'Forth', 2),
(5, 'Fifth', 3),
(6, 'Sixth', 3),
(7, 'Seventh', 4),
(8, 'Eighth', 4);

-- --------------------------------------------------------

--
-- Table structure for table `tblstudents`
--

CREATE TABLE IF NOT EXISTS `tblstudents` (
  `StudentId` int(11) NOT NULL AUTO_INCREMENT,
  `StudentName` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
  `FatherName` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
  `GrandFatherName` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
  `FamilyName` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `Nation` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `MotherTongue` varchar(100) COLLATE utf8_persian_ci NOT NULL,
  `TazkiraGeneralNumber` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `TazkiraVolumeNumber` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `TazkiraPageNumber` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `TazkiraRegisterNumber` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `MaritalStatus` varchar(100) CHARACTER SET latin1 NOT NULL,
  `RollId` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `MainAddress` tinytext COLLATE utf8_persian_ci,
  `PresentAddress` tinytext COLLATE utf8_persian_ci,
  `MainDistrict` varchar(150) COLLATE utf8_persian_ci NOT NULL,
  `MainVillage` varchar(150) COLLATE utf8_persian_ci NOT NULL,
  `PresentDistrict` varchar(150) COLLATE utf8_persian_ci NOT NULL,
  `PresentVillage` varchar(150) COLLATE utf8_persian_ci NOT NULL,
  `School` varchar(100) COLLATE utf8_persian_ci DEFAULT NULL,
  `EducatedYear` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `KankorYear` int(11) NOT NULL,
  `KankorScore` float DEFAULT NULL,
  `KankorID` varchar(30) CHARACTER SET latin1 DEFAULT NULL,
  `Phone` varchar(40) CHARACTER SET latin1 DEFAULT NULL,
  `Remarks` varchar(250) COLLATE utf8_persian_ci DEFAULT NULL,
  `StudentEmail` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `DOB` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `Period` varchar(50) COLLATE utf8_persian_ci DEFAULT NULL,
  `ClassId` int(11) DEFAULT NULL,
  `RegDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdationDate` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `Status` int(1) DEFAULT NULL,
  PRIMARY KEY (`StudentId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci AUTO_INCREMENT=16 ;

--
-- Dumping data for table `tblstudents`
--

INSERT INTO `tblstudents` (`StudentId`, `StudentName`, `FatherName`, `GrandFatherName`, `FamilyName`, `Nation`, `MotherTongue`, `TazkiraGeneralNumber`, `TazkiraVolumeNumber`, `TazkiraPageNumber`, `TazkiraRegisterNumber`, `MaritalStatus`, `RollId`, `MainAddress`, `PresentAddress`, `MainDistrict`, `MainVillage`, `PresentDistrict`, `PresentVillage`, `School`, `EducatedYear`, `KankorYear`, `KankorScore`, `KankorID`, `Phone`, `Remarks`, `StudentEmail`, `DOB`, `Period`, `ClassId`, `RegDate`, `UpdationDate`, `Status`) VALUES
(1, 'احمد ', ' سعید', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03001', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(2, 'احمد سعید', ' سعید', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03006', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(3, ' سعید', ' سید احمد', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03002', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(4, ' مسعود', ' سید احمد', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03003', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(5, 'علی', ' سید احمد', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03004', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(6, 'علی احمد', ' سید احمد', 'محمد رحیم', 'شریفی', 'افغان', 'دری', '12343', '43', '533', '1256', 'Single', 'CS03005', 'هرات', 'هرات', 'غوریان', 'منگوان', 'غوریان', 'منگوان', 'فوشنج', '1394', 1394, 286.65, 'H24007191', '0797470777', 'شششششش', 'ahmadsaeedbarakzay@gmail.com', '1376', '3', 1, '2020-09-24 15:24:47', NULL, 1),
(7, 'کریم', 'یوسف', 'رحیم', 'رحیمی', 'افغان', 'پښتو', '1223256', '1', '2', '4', 'Single', 'CS01001', 'کندهار', 'کندهار', 'میوند', 'میوند', 'میوند', 'میوند', 'تیمورشاهی', '1393', 1393, 277, 'L-2400099', '123456789', 'خوش آمدید', 'as@gmail.com', '1372', '1', 1, '2020-09-24 15:34:57', NULL, 1),
(8, 'رحیم', 'یوسف', 'رحیم', 'رحیمی', 'افغان', 'پښتو', '1223256', '1', '2', '4', 'Single', 'CS01002', 'کندهار', 'کندهار', 'میوند', 'میوند', 'میوند', 'میوند', 'تیمورشاهی', '1393', 1393, 277, 'L-2400099', '123456789', 'خوش آمدید', 'as@gmail.com', '1372', '1', 1, '2020-09-24 15:34:57', NULL, 1),
(9, 'امید', 'علی احمد', 'رحیم', 'رحیمی', 'افغان', 'پښتو', '1223256', '1', '2', '4', 'Single', 'CS01003', 'کندهار', 'کندهار', 'میوند', 'میوند', 'میوند', 'میوند', 'تیمورشاهی', '1393', 1393, 277, 'L-2400099', '123456789', 'خوش آمدید', 'as@gmail.com', '1372', '1', 1, '2020-09-24 15:34:57', NULL, 1),
(10, 'علی احمد', 'احمد', 'رحیم', 'رحیمی', 'افغان', 'پښتو', '1223256', '1', '2', '4', 'Single', 'CS01004', 'کندهار', 'کندهار', 'میوند', 'میوند', 'میوند', 'میوند', 'تیمورشاهی', '1393', 1393, 277, 'L-2400099', '123456789', 'خوش آمدید', 'as@gmail.com', '1372', '1', 1, '2020-09-24 15:34:57', NULL, 1),
(11, 'مسعور', 'احمد', 'رحیم', 'رحیمی', 'افغان', 'پښتو', '1223256', '1', '2', '4', 'Single', 'CS01005', 'کندهار', 'کندهار', 'میوند', 'میوند', 'میوند', 'میوند', 'تیمورشاهی', '1393', 1393, 277, 'L-2400099', '123456789', 'خوش آمدید', 'as@gmail.com', '1372', '1', 1, '2020-09-24 15:34:57', NULL, 1),
(12, 'احسان الله', 'عزیز احمد', 'عزیزآقا', 'عزیزی', 'افغان', 'دری', '4565645', '75', '4', '4', 'Single', 'CS02001', 'کندهار', 'کندهار', 'دند', 'دند', 'دند', 'دند', 'افغان ترک', '1395', 1396, 289, '34567', '1234567', 'سسسسس', 'as@gmail.comf', '1370', '2', 1, '2020-09-24 15:54:03', NULL, 1),
(13, 'عزیزالله', 'احمد', 'عزیزآقا', 'عزیزی', 'افغان', 'دری', '4565645', '75', '4', '4', 'Single', 'CS02002', 'کندهار', 'کندهار', 'دند', 'دند', 'دند', 'دند', 'افغان ترک', '1395', 1396, 289, '34567', '1234567', 'سسسسس', 'as@gmail.comf', '1370', '2', 1, '2020-09-24 15:54:03', NULL, 1),
(14, 'اجمل', 'احمد', 'عزیزآقا', 'عزیزی', 'افغان', 'دری', '4565645', '75', '4', '4', 'Single', 'CS02003', 'کندهار', 'کندهار', 'دند', 'دند', 'دند', 'دند', 'افغان ترک', '1395', 1396, 289, '34567', '1234567', 'سسسسس', 'as@gmail.comf', '1370', '2', 1, '2020-09-24 15:54:03', NULL, 1),
(15, 'احسان ', 'عزیز احمد', 'نوراحمد', 'عزیزی', 'افغان', 'دری', '4565645', '75', '4', '4', 'Single', 'CS02004', 'کندهار', 'کندهار', 'دند', 'دند', 'دند', 'دند', 'افغان ترک', '1395', 1396, 289, '34567', '1234567', 'سسسسس', 'as@gmail.comf', '1370', '2', 1, '2020-09-24 15:54:03', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblsubjectcombination`
--

CREATE TABLE IF NOT EXISTS `tblsubjectcombination` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PeriodID` int(11) NOT NULL,
  `ClassId` int(11) DEFAULT NULL,
  `SubjectId` int(11) DEFAULT NULL,
  `SemesterID` int(11) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `status` int(1) DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Updationdate` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `tblsubjectcombination`
--

INSERT INTO `tblsubjectcombination` (`id`, `PeriodID`, `ClassId`, `SubjectId`, `SemesterID`, `TeacherID`, `status`, `CreationDate`, `Updationdate`) VALUES
(1, 1, 1, 1, 1, 11, 1, '2020-09-24 15:07:57', NULL),
(2, 1, 1, 2, 1, 9, 1, '2020-09-24 15:08:18', NULL),
(3, 1, 1, 3, 1, 10, 1, '2020-09-24 15:08:30', NULL),
(4, 1, 1, 8, 1, 8, 1, '2020-09-24 15:08:50', NULL),
(5, 1, 1, 4, 2, 5, 1, '2020-09-24 15:11:23', NULL),
(6, 1, 1, 5, 2, 11, 1, '2020-09-24 15:11:47', NULL),
(7, 1, 2, 6, 3, 4, 1, '2020-09-24 15:12:44', NULL),
(8, 1, 2, 7, 3, 5, 1, '2020-09-24 15:13:38', NULL),
(9, 1, 2, 9, 4, 8, 1, '2020-09-24 15:14:01', NULL),
(10, 1, 2, 10, 4, 6, 1, '2020-09-24 15:14:19', NULL),
(11, 1, 3, 12, 5, 4, 1, '2020-09-24 15:14:32', NULL),
(12, 1, 4, 18, 7, 7, 1, '2020-09-24 15:14:54', NULL),
(13, 1, 4, 19, 7, 12, 1, '2020-09-24 15:15:14', NULL),
(14, 1, 4, 16, 8, 4, 1, '2020-09-24 15:15:28', NULL),
(15, 1, 4, 17, 8, 5, 1, '2020-09-24 15:15:52', NULL),
(16, 2, 1, 1, 1, 16, 1, '2020-09-24 15:16:22', NULL),
(17, 2, 1, 2, 1, 9, 1, '2020-09-24 15:16:39', NULL),
(18, 3, 1, 8, 1, 11, 1, '2020-09-24 15:17:12', NULL),
(19, 3, 1, 5, 2, 12, 1, '2020-09-25 06:45:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblsubjects`
--

CREATE TABLE IF NOT EXISTS `tblsubjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `SubjectName` varchar(100) NOT NULL,
  `Cridits` int(11) NOT NULL,
  `SubjectCode` varchar(100) DEFAULT NULL,
  `SemesterID` int(11) NOT NULL,
  `Creationdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdationDate` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `tblsubjects`
--

INSERT INTO `tblsubjects` (`id`, `SubjectName`, `Cridits`, `SubjectCode`, `SemesterID`, `Creationdate`, `UpdationDate`) VALUES
(1, 'Math I', 4, 'ma0098', 1, '2020-09-24 14:50:10', NULL),
(2, 'English I', 4, 'eng567', 1, '2020-09-24 14:50:24', NULL),
(3, 'Islamic I', 1, 'isl1', 1, '2020-09-24 14:50:43', NULL),
(4, ' Database I', 4, 'db0987', 2, '2020-09-24 14:51:41', NULL),
(5, 'Math II', 4, 'mt99883', 2, '2020-09-24 14:51:55', NULL),
(6, 'Database System II', 4, 'db9087', 3, '2020-09-24 14:52:23', NULL),
(7, 'Math III', 4, 'mtcs7889', 3, '2020-09-24 14:53:09', NULL),
(8, 'Fundemental OF CS', 4, 'fgh5676', 1, '2020-09-24 14:54:15', NULL),
(9, 'Fundemental OF Network', 4, 'csfn4567', 4, '2020-09-24 14:54:31', NULL),
(10, 'Fundemental OF DB', 4, 'csdfg4567', 4, '2020-09-24 14:54:59', NULL),
(11, 'Islamic studies IIII', 1, 'csis234', 4, '2020-09-24 14:55:29', NULL),
(12, 'Network Security', 4, 'Nt00992', 5, '2020-09-24 14:55:48', NULL),
(13, 'Big Data', 4, 'csbd34566', 5, '2020-09-24 14:56:08', NULL),
(14, 'Data Warehouse', 4, 'dcs4571', 6, '2020-09-24 14:56:31', NULL),
(15, 'Advanced Software Engineering II', 4, 'adcs3489', 6, '2020-09-24 14:56:50', NULL),
(16, 'Cloud Computing', 4, 'cscl9876', 8, '2020-09-24 14:57:18', NULL),
(17, 'Big Data II', 4, 'bcse3412', 8, '2020-09-24 14:57:49', NULL),
(18, 'Web Designing I', 4, 'wecs3216', 7, '2020-09-24 14:58:08', NULL),
(19, 'Network Archeticture', 4, 'ntcs2378', 7, '2020-09-24 14:58:32', NULL),
(20, 'Cloud Computing', 4, 'cs3456', 8, '2020-09-25 06:44:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblteacher`
--

CREATE TABLE IF NOT EXISTS `tblteacher` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `Name` varchar(120) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `FatherName` varchar(150) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `GrandFatherName` varchar(150) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `Picture` varchar(200) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Tazkira` varchar(100) DEFAULT NULL,
  `Gender` varchar(30) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Phone` varchar(30) DEFAULT NULL,
  `MainAddress` varchar(250) CHARACTER SET ucs2 COLLATE ucs2_persian_ci DEFAULT NULL,
  `PresentAddress` varchar(250) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `Degree` varchar(250) CHARACTER SET utf8 COLLATE utf8_persian_ci DEFAULT NULL,
  `Departement` varchar(250) DEFAULT NULL,
  `Remarks` tinytext CHARACTER SET utf8 COLLATE utf8_persian_ci,
  `Qualifications` varchar(120) DEFAULT NULL,
  `JoiningDate` date DEFAULT NULL,
  `RegDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `tblteacher`
--

INSERT INTO `tblteacher` (`ID`, `Name`, `FatherName`, `GrandFatherName`, `Picture`, `Email`, `Tazkira`, `Gender`, `DOB`, `Phone`, `MainAddress`, `PresentAddress`, `Degree`, `Departement`, `Remarks`, `Qualifications`, `JoiningDate`, `RegDate`) VALUES
(1, 'علی احمدی', 'Mahmod', 'Mohammad', '9761c29c000d31247a2cf4f3e3a84bd41599197041jpeg', 'aliahmadi@gmail.com', '45678', 'Male', '1999-01-04', '7987654321', 'Kandahar, Aino Mina Afghanistan', 'Kandahar, Aino Mina Afghanistan', 'Master', 'Network', 'Some text here', 'mcs', '2020-09-01', '2020-09-04 05:24:01'),
(2, 'فهیم اح', 'Karim', 'Abu Baker', '33268e646ce7a5d4552ba8ef43e646c81599197392.jpg', 'fahim2019@gmail.com', '7654', 'Male', '1993-07-07', '7998765543', 'Herat Afghanistan', 'Herat Afghanistan', 'PHD', 'Network', 'Welcome dear', 'PHDcs', '2020-09-01', '2020-09-04 05:29:52'),
(3, 'اسدالله پوپل', 'Abdul Majid', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Herat Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(4, 'سیداحمد سهیم', 'Abdul Majid', 'Karim', '933fcc3a63bb803cc1bf310704d7fcba1599389298.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(5, 'حبیب الهی رحمانی', 'Mohammad', 'Karim', 'e0587551121a2c455803d51a7db4b9f61599389327.jpg', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(6, 'حضرت موسی هودمن', 'Mohammad', 'Karim', '9761c29c000d31247a2cf4f3e3a84bd41599389589jpeg', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(7, 'وحیدالله مدثر', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(8, 'سید احمد محبوبی', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(9, 'عبدالستار کاکر', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(10, 'حضرت علی آغا', 'Mohammad', 'Karim', '33268e646ce7a5d4552ba8ef43e646c81599389734.jpg', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(11, 'محمد صدیق روحی', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(12, 'نیاز مححمد', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(15, 'سید شاه آغا', 'Mohammad', 'Karim', '16396ba87a5665405ac0bfdd38e2547a1599197551.png', 'mas.67@gmail.com', '123456', 'Male', '1995-08-08', '7987654345', 'Kandahar Afghanistan', 'Herat Afghanistan', 'Bachelor', 'Softwar Engineerine ', 'welcome', 'bcs', '2020-11-07', '2020-09-04 05:32:31'),
(16, 'کریم', 'سخی', 'سخی', '16b8ac6f7786fa72dd15375331a09f941600220841.png', 'ahmadsaeedbarakzay@gmail.com', '4564', 'Male', '2020-09-01', '7897897987', 'نننن', 'متتا', 'ماستر', 'Network', 'تلبتستبسیببتیمبتسینبتیسبتیهبتی', 'MCA,BCA', '2020-09-10', '2020-09-16 01:47:21');

-- --------------------------------------------------------

--
-- Table structure for table `tblteacherlogin`
--

CREATE TABLE IF NOT EXISTS `tblteacherlogin` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tblteacherlogin`
--

INSERT INTO `tblteacherlogin` (`ID`, `Username`, `Password`, `TeacherID`) VALUES
(1, 'ali', '86318e52f5ed4801abe1d13d509443de', 1),
(2, 'mudasser', '77d3e9516bf2a26c4c55d2c4a67d6401', 7),
(3, 'rahmani', '9c08b8e34fdeccc54995ed7d870fb6e3', 5),
(4, 'kakar', '01c769fb853840e9e0fea4dd5ffd3c24', 9),
(5, 'mahboobi', '0f4e57a1448b20ac13b91ac2a88fee2a', 8),
(6, 'agha', 'fb84254504dbc2bb6fab5967385dbba0', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbltimetable`
--

CREATE TABLE IF NOT EXISTS `tbltimetable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dayofweek` varchar(30) DEFAULT NULL,
  `class` varchar(30) DEFAULT NULL,
  `semester` varchar(30) DEFAULT NULL,
  `subject` varchar(250) DEFAULT NULL,
  `teacher` varchar(100) DEFAULT NULL,
  `starthour` time DEFAULT NULL,
  `endhour` time DEFAULT NULL,
  `Subject2` varchar(50) NOT NULL,
  `Teacher2` varchar(50) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `StartTime2` time NOT NULL,
  `EndTime2` time NOT NULL,
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tbltimetable`
--

INSERT INTO `tbltimetable` (`id`, `dayofweek`, `class`, `semester`, `subject`, `teacher`, `starthour`, `endhour`, `Subject2`, `Teacher2`, `StartTime2`, `EndTime2`, `remarks`) VALUES
(1, 'Saturday', '1', '1', '1', '5', '08:30:00', '10:10:00', 'English I', 'عبدالستار کاکر', '10:40:00', '00:50:00', 'Come on time'),
(2, 'Sunday', '1', '1', '2', '9', '08:10:00', '10:00:00', 'Math I', 'حبیب الهی رحمانی', '10:10:00', '00:50:00', 'Bring Your Computer'),
(3, 'Monday', '1', '1', '3', '10', '09:30:00', '10:20:00', 'English I', 'عبدالستار کاکر', '10:00:00', '11:50:00', 'Come on Time'),
(4, 'Saturday', '2', '1', '4', '5', '07:50:00', '09:10:00', 'Math II', 'محمد صدیق روحی', '10:00:00', '00:00:00', 'Come on time');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_files`
--

CREATE TABLE IF NOT EXISTS `tbl_files` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `ClassID` int(11) NOT NULL,
  `SubjectID` int(11) NOT NULL,
  `TeacherID` int(11) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_files`
--

INSERT INTO `tbl_files` (`id`, `filename`, `ClassID`, `SubjectID`, `TeacherID`, `created`) VALUES
(1, '1-Code REfactorin.pdf', 1, 1, 1, '2020-09-04 08:10:01'),
(2, '2-Attendance Report.pdf', 1, 5, 1, '2020-09-04 12:49:09'),
(3, '3-Attendance Report.pdf', 1, 20, 10, '2020-09-06 12:25:45'),
(5, '4-time.pdf', 1, 4, 5, '2020-09-24 19:46:58');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
