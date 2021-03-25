import React from 'react';
import { FaCode, FaSketch, FaShopify } from 'react-icons/fa';
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: 'web development',
    text: `as a web developer I am responsible for writing all the code that is responsible for making your web site or application operate as you expect it to.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: 'web design',
    text: `I use figma as my web design weapon of choice, I use it for everything from wire frames to high fidelity mockups. I go through the whole process with you from layout to production.`,
  },
  {
    id: 3,
    icon: <FaShopify className="service-icon" />,
    title: 'ecommerce development',
    text: `since 2020 I have been helping small businesses impacted by the COVID-19 virus get their products online to their customers. Helping them get their stores online and bring in new revenue.`,
  },
];
