/** @odoo-module **/

import { Component, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "./clicker_hooks"; // Import the custom hook

class ClickerSystrayItem extends Component {
    setup() {
        this.actionService = useService("action");
        this.clicker = useClicker(); // Use the custom hook
    }

    openClientAction() {
        this.actionService.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker Game"
        });
    }

    incrementClickCount(event) {
        event.stopPropagation();
        if (event.target.closest('.fa-hand-pointer-o')) {
            this.clicker.clickCount += 9; // Update to use the new hook
        }
    }
}

ClickerSystrayItem.template = "ClickerSystrayItemTemplate";

export const item = {
    Component: ClickerSystrayItem
}
registry.category("systray").add("awesome_clicker.clicker_systray_item", item, { sequence: 1000 });
