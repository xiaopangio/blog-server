/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 101.37.30.31:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 20/07/2021 14:16:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '省份名称',
  `province_code` mediumint(6) unsigned NOT NULL DEFAULT '0' COMMENT '省份代码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='省份表';

-- ----------------------------
-- Records of provinces
-- ----------------------------
BEGIN;
INSERT INTO `provinces` VALUES (1, '北京市', 110000);
INSERT INTO `provinces` VALUES (2, '天津市', 120000);
INSERT INTO `provinces` VALUES (3, '河北省', 130000);
INSERT INTO `provinces` VALUES (4, '山西省', 140000);
INSERT INTO `provinces` VALUES (5, '内蒙古自治区', 150000);
INSERT INTO `provinces` VALUES (6, '辽宁省', 210000);
INSERT INTO `provinces` VALUES (7, '吉林省', 220000);
INSERT INTO `provinces` VALUES (8, '黑龙江省', 230000);
INSERT INTO `provinces` VALUES (9, '上海市', 310000);
INSERT INTO `provinces` VALUES (10, '江苏省', 320000);
INSERT INTO `provinces` VALUES (11, '浙江省', 330000);
INSERT INTO `provinces` VALUES (12, '安徽省', 340000);
INSERT INTO `provinces` VALUES (13, '福建省', 350000);
INSERT INTO `provinces` VALUES (14, '江西省', 360000);
INSERT INTO `provinces` VALUES (15, '山东省', 370000);
INSERT INTO `provinces` VALUES (16, '河南省', 410000);
INSERT INTO `provinces` VALUES (17, '湖北省', 420000);
INSERT INTO `provinces` VALUES (18, '湖南省', 430000);
INSERT INTO `provinces` VALUES (19, '广东省', 440000);
INSERT INTO `provinces` VALUES (20, '广西壮族自治区', 450000);
INSERT INTO `provinces` VALUES (21, '海南省', 460000);
INSERT INTO `provinces` VALUES (22, '重庆市', 500000);
INSERT INTO `provinces` VALUES (23, '四川省', 510000);
INSERT INTO `provinces` VALUES (24, '贵州省', 520000);
INSERT INTO `provinces` VALUES (25, '云南省', 530000);
INSERT INTO `provinces` VALUES (26, '西藏自治区', 540000);
INSERT INTO `provinces` VALUES (27, '陕西省', 610000);
INSERT INTO `provinces` VALUES (28, '甘肃省', 620000);
INSERT INTO `provinces` VALUES (29, '青海省', 630000);
INSERT INTO `provinces` VALUES (30, '宁夏回族自治区', 640000);
INSERT INTO `provinces` VALUES (31, '新疆维吾尔自治区', 650000);
INSERT INTO `provinces` VALUES (32, '台湾省', 710000);
INSERT INTO `provinces` VALUES (33, '香港特别行政区', 810000);
INSERT INTO `provinces` VALUES (34, '澳门特别行政区', 820000);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
