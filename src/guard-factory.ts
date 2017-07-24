import { Class, DiscriminatedClass } from "./discriminator-value";

export type Guard<T, U extends T> = (guardee:T) => guardee is U;

export function extractDiscriminators<T>(types:Class<T>[]):string[] {
    return types.map((t:DiscriminatedClass<T>) => {
        if (t.discriminatorValue) {
            return t.discriminatorValue;
        }
        throw new Error(`Class ${t.name} doesn't have a discriminator value. Apply one using @DiscriminatorValue.`);
    });
}

export function guardFactory<T, U extends T>(discriminatorProperty:keyof T, ...types:Class<U>[]):Guard<T, U> {
    return (guardee:T):guardee is U => {
        return extractDiscriminators(types).indexOf(guardee[discriminatorProperty].toString()) !== -1;
    };
}
