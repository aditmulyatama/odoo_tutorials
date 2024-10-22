/** @odoo-module **/

export function randomReward(clicker) {
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    reward.apply(clicker);
}