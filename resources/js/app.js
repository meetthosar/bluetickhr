import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import {loadStdlib} from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as reachBackend from './build/index.admissions.mjs';
const stdlib = loadStdlib('ALGO');
Window.Reach = stdlib;
Window.ALGO = MyAlgoConnect;
Window.REAHCBACKEND = reachBackend;

Window.Reach.setWalletFallback(Window.Reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect }));

