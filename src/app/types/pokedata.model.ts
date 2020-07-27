export class PokeData {
  thumbnail: string;
  image: string;
  id: number;
  name: string;
  hebrewName: string;
  type: string;
  ev: string;
  catchRate: string;
  happiness: string;
  baseStats: {
    hp: string;
    atk: string;
    def: string;
    s_atk: string;
    s_def: string;
    spd: string;
    total: string;
  };
}
