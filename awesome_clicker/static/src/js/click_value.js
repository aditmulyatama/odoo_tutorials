/** @odoo-module **/

import { Component } from "@odoo/owl";
import { humanNumber } from "@web/core/utils/numbers"; // Assuming this is where humanNumber is located

export class ClickValue extends Component {
    setup() {
        this.formattedValue = () => humanNumber(this.props.value);
    }
}

ClickValue.props = {
    value: Number,
};

ClickValue.template = "ClickValue"; // Ensure you have a template defined for this component
