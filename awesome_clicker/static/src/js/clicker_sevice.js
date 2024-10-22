/** @odoo-module **/
import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";

const clickerStateService = {
    start(env) {
        const clicker = new ClickerModel();

        // Set a 10-second interval to increment clicks by 10 * clickBots
        setInterval(() => {
            if (clicker.state.clickBots > 0) {
                clicker.increment(clicker.state.clickBots * 10);
            }
        }, 10000);

        document.addEventListener("click", () => clicker.increment(1), true);

        return clicker;
    },
};

registry.category("services").add("awesome_clicker.clicker_state", clickerStateService);
