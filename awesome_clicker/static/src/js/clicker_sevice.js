/** @odoo-module **/
import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";
import { useComponent } from "@web/core/utils/hooks";
import { humanNumber } from "@web/core/utils/numbers";


const clickerStateService = {
    start(env) {
        const state = reactive({
            clickCount: 0,
            clickValue: '0.00',
            level: 0, //incremented at some milestones and open new features
            clickBots: 0, // represents the number of robot that have been purchased
        });

        function increment(inc) {
            state.clickCount += inc * 10;
            state.clickValue = humanNumber(state.clickCount, { decimals: 1, minDigits: 0 });
            levelUp();
        }

        function buyClickBot(price) {
            state.clickCount -= price;
            state.clickValue = humanNumber(state.clickCount, { decimals: 1, minDigits: 0 });
            state.clickBots += 1;
        }

        function levelUp() {
            const thresholds = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000];
            if (state.clickCount >= thresholds[state.level]) {
                state.level += 1;
            }
        }

        // Set a 10-second interval to increment clicks by 10 * clickBots
        setInterval(() => {
            if (state.clickBots > 0) {
                increment(state.clickBots * 10);
            }
        }, 10000);

        document.addEventListener("click", () => increment(1), true);

        return {
            state,
            increment,
            buyClickBot,
        };
    },
};

registry.category("services").add("awesome_clicker.clicker_state", clickerStateService);
