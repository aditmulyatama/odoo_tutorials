/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

class ClientAction extends Component {
    setup() {
        // You can add setup logic here if needed
    }
    static props = ['*'];

    closePopup() {
        this.trigger('close'); // Trigger the close event
    }
}

ClientAction.template = "ClientActionTemplate";

registry.category("actions").add("awesome_clicker.client_action", ClientAction);
