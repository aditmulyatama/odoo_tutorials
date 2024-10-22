/** @odoo-module **/
import { Reactive } from "@web/core/utils/reactive";
import { humanNumber } from "@web/core/utils/numbers";

export class ClickerModel extends Reactive {
    constructor() {
        super();
        this.state = {
            clickCount: 0,
            clickValue: '0.00',
            level: 0,
            clickBots: 0,
        };
    }

    increment(inc) {
        this.state.clickCount += inc * 10;
        this.state.clickValue = humanNumber(this.state.clickCount, { decimals: 1, minDigits: 0 });
        this.levelUp();
    }

    buyClickBot(price) {
        this.state.clickCount -= price;
        this.state.clickValue = humanNumber(this.state.clickCount, { decimals: 1, minDigits: 0 });
        this.state.clickBots += 1;
    }

    levelUp() {
        const thresholds = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000];
        if (this.state.clickCount >= thresholds[this.state.level]) {
            this.state.level += 1;
        }
    }
}
