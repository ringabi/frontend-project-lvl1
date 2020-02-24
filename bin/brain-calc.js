#!/usr/bin/env node

import { greeting, getUserName, engine } from '../src/index.js';
import toCount from '../src/games/brain-calc-game.js';

greeting();
engine(toCount(), getUserName());
