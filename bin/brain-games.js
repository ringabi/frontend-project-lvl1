#!/usr/bin/env node

import { greeting } from '../src/index.js';
import checkParity from '../src/games/brain-even-game.js';
import toCount from '../src/games/brain-calc-game.js';
import getGreatestCommonDivisor from '../src/games/brain-gcd-game.js';
import findTheMissingNumber from '../src/games/brain-progression-game.js';
import isAPrime from '../src/games/brain-prime-game.js';

greeting();
checkParity();
toCount();
getGreatestCommonDivisor();
findTheMissingNumber();
isAPrime();
