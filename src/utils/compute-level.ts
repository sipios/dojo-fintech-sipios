import {Skin} from "../types/skin.type";

export const computeLevel = (skin: Skin) => {
    const price = skin.price;
    if (price <= 10) {
        return 1;
    }
    if (price <= 50) {
        return 2;
    }
    if (price <= 1000) {
        return 3;
    }
    return 4;
}