/** @odoo-module **/
import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";

const clickerStateService = {
    start(env) {
        const state = reactive({ clickCount: 0 });
        function increment(inc) {
            state.clickCount += inc;
        }
        document.addEventListener("click", () => increment(1), true);

        return {
            state,
            increment,
        };
    },
};

registry.category("services").add("awesome_clicker.clicker_state", clickerStateService);