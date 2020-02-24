#!/usr/bin/env node

import { greeting, getUserName, engine } from '../src/index.js';
import checkParity from '../src/games/brain-even-game.js';

greeting();
engine(checkParity(), getUserName());
