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

        });
        function increment(inc) {
            state.clickCount += inc * 10;
            state.clickValue = humanNumber(state.clickCount, { decimals: 1, minDigits: 0 });

        }
        function humanizeClickCount() {
            return humanNumber(state.clickCount);
        }
        document.addEventListener("click", () => increment(1), true);

        return {
            state,
            increment,
            humanizeClickCount,
        };
    },
};

registry.category("services").add("awesome_clicker.clicker_state", clickerStateService);