/** @odoo-module **/

import { Component, useState, useExternalListener } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class ClickerSystrayItem extends Component {
    setup() {
        this.actionService = useService("action");
        this.clickerStateService = useState(useService("awesome_clicker.clicker_state"));
        // this.state = useState({ clickCount: 0 });
        // useExternalListener(document.body, "click", () => this.state.clickCount += 1, { capture: true });
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
            this.state.clickCount += 9;
        }
    }
}

ClickerSystrayItem.template = "ClickerSystrayItemTemplate";

export const item = {
    Component: ClickerSystrayItem
}
registry.category("systray").add("awesome_clicker.clicker_systray_item", item, { sequence: 1000 });
