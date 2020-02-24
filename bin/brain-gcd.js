#!/usr/bin/env node

import { greeting, getUserName, engine } from '../src/index.js';
import getGreatestCommonDivisor from '../src/games/brain-gcd-game.js';

greeting();
engine(getGreatestCommonDivisor(), getUserName());
