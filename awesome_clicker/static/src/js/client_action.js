/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useClicker } from "./clicker_hooks"; // Import the custom hook

class ClientAction extends Component {
    setup() {
        this.clicker = useClicker(); // Use the custom hook
    }
    static props = ['*'];
}

ClientAction.template = "ClientActionTemplate";

registry.category("actions").add("awesome_clicker.client_action", ClientAction);
