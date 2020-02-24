#!/usr/bin/env node

import { greeting, getUserName, engine } from '../src/index.js';
import isAPrime from '../src/games/brain-prime-game.js';

greeting();
engine(isAPrime(), getUserName());
