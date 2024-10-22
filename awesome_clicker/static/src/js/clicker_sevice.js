/** @odoo-module **/
import { registry } from "@web/core/registry";
import { ClickerModel } from "./clicker_model";
import { useService } from "@web/core/utils/hooks";

const clickerStateService = {
    dependencies: ["effect"],
    start(env, services) {
        const clicker = new ClickerModel();

        const bus = clicker.bus;
        bus.addEventListener("MILESTONE_1k", () => {
            services.effect.add({
                message: "Milestone reached! You can now buy clickbots",
                type: "rainbow_man",
            });
        });

        // Set a 10-second interval to increment clicks by 10 * clickBots
        setInterval(() => {
            if (clicker.state.clickBots > 0) {
                clicker.increment(clicker.state.clickBots * 10 * clicker.state.powerMultiplier);
            }
            if (clicker.state.bigBots > 0) {
                clicker.increment(clicker.state.bigBots * 100 * clicker.state.powerMultiplier);
            }
        }, 1000);

        document.addEventListener("click", () => clicker.increment(1), true);

        return clicker;
    },
};

registry.category("services").add("awesome_clicker.clicker_state", clickerStateService);
