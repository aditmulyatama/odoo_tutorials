/** @odoo-module **/
import { Reactive } from "@web/core/utils/reactive";
import { EventBus } from "@odoo/owl";
import { humanNumber } from "@web/core/utils/numbers";
import { rewards } from "./click_reward";
import { choose } from "./utils";
export class ClickerModel extends Reactive {
    constructor() {
        super();
        this.state = {
            clickCount: 0,
            clickValue: '0.00',
            level: 0,
            clickBots: 0,
            bigBots: 0,
            powerMultiplier: 1,
        };
        this.bus = new EventBus();
    }
    getRandomReward() {
        choose(rewards).apply(this);
    }
    increment(inc) {
        this.state.clickCount += inc * 10;
        this.state.clickValue = humanNumber(this.state.clickCount, { decimals: 1, minDigits: 0 });
        this.levelUp();
    }
    buyClickBot(bots_amount) {
        if (bots_amount === undefined) {
            bots_amount = 1;
            this.state.clickCount -= 1000;
        }
        this.state.clickValue = humanNumber(this.state.clickCount, { decimals: 1, minDigits: 0 });
        this.state.clickBots += bots_amount;
    }
    buyBigBot(bots_amount) {
        if (bots_amount === undefined) {
            bots_amount = 1;
            this.state.clickCount -= 5000;
        }
        this.state.clickValue = humanNumber(this.state.clickCount, { decimals: 1, minDigits: 0 });
        this.state.bigBots += bots_amount;
    }
    buyPowerMultiplier(price) {
        this.state.clickCount -= price;
        this.state.powerMultiplier += 1;
    }
    levelUp() {
        const thresholds = [0, 1000, 5000, 100000];
        if (this.state.clickCount >= thresholds[this.state.level + 1]) {
            this.state.level += 1;
            this.bus.trigger('MILESTONE_1k');
        }
    }
}
