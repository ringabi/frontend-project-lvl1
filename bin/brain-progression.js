#!/usr/bin/env node

import { greeting, getUserName, engine } from '../src/index.js';
import findTheMissingNumber from '../src/games/brain-progression-game.js';

greeting();
engine(findTheMissingNumber(), getUserName());
