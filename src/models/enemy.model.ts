export class EnemyModel {
  type: string;
  number: number;

  static MECH = 'mech';
  static SOLDIER = 'soldier';

  constructor(type: string, number: number) {
    this.type = type;
    this.number = number;
  }
}
