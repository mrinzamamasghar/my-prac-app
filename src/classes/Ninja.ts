import { inject, injectable } from "inversify";
import { ThrowableWeapon, Warrior, Weapon } from "./inversify/interfaces";
import { TYPES } from "./inversify/types";

@injectable()
export class Ninja implements Warrior {


    @inject(TYPES.Weapon) private katana: Weapon;
    @inject(TYPES.ThrowableWeapon) private _shuriken: ThrowableWeapon;
    constructor() {
        this.katana = {
            hit: () => "hit"
        }
        this._shuriken = {
            throw: () => "throw"
        }
    }
    public fight() { return this.katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

