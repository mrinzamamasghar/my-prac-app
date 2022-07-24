import { injectable } from "inversify";
import { Weapon } from "../inversify/interfaces";

@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}