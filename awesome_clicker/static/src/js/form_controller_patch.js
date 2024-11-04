// /** @odoo-module **/

// import { FormController } from "@web/views/form/form_controller";
// import { patch } from "@web/core/utils/patch";
// import { useService } from "@web/core/utils/hooks";

// patch(FormController.prototype, {
//     setup() {
//         super.setup(...arguments);
//         this.notification = useService("notification");
//         this.actionService = useService("action");

//         // 1% chance to give a reward
//         if (Math.random() < 1) {
//             this.model.getReward().then((reward) => {
//                 this.notification.add(
//                     `Congrats you won a reward: "${reward.description}"`,
//                     {
//                         type: "sticky",
//                         buttons: [
//                             {
//                                 text: "Collect",
//                                 onClick: () => {
//                                     reward.apply(this.model);
//                                     this.actionService.doAction({
//                                         type: "ir.actions.client",
//                                         tag: "awesome_clicker.client_action",
//                                         target: "new",
//                                         name: "Clicker Game",
//                                     });
//                                 },
//                             },
//                         ],
//                     }
//                 );
//             });
//         }
//     },
// });