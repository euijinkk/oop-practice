{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // static 멤버 변수
    static BEANS_GRAM_PER_SHOT = 7; // static -> class level (클래스와 연결이 되었으니, object 생성마다 만들어지지는 않는다. -> this를 안써도 된다. ClassName.변수 로 쓴다)
    // 멤버변수 - 매번 새롭게 만들어져야하는 것
    coffeeBeans: number = 0; // instance level

    // 생성자
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static 메소드
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3);

  // Math.abs() 같은 녀석을 사용할 수 있는 이유는, 모두 클래스 레벨에서 선언되었기 때문이다.
}
