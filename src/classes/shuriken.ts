import { injectable } from "inversify";
import { ThrowableWeapon } from "../inversify/interfaces";

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}