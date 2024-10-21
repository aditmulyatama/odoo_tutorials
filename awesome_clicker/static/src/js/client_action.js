/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";



class ClientAction extends Component {
    setup() {
        // You can add setup logic here if needed
        this.clickerStateService = useState(useService("awesome_clicker.clicker_state"));
    }
    static props = ['*'];
}

ClientAction.template = "ClientActionTemplate";

registry.category("actions").add("awesome_clicker.client_action", ClientAction);
