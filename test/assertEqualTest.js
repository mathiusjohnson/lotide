const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");

assertEqual(1, 1);
assertEqual(3, 5);
assertEqual(head([5, 6, 7]), 5);
