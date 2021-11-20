"use strict";
{
    class CoffeeMaker {
        constructor(coffeeBeans) {
            this.BEANS_GRAM_PER_SHOT = 7;
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }
    const maker = new CoffeeMaker(32);
    // 생성자
    console.log(maker);
}
