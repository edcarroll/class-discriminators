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

// Variations up to 10 types.

export function guardFactory<T, U extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U>):Guard<T, U>;

export function guardFactory<T, U1 extends T, U2 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>):Guard<T, U1 | U2>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>):Guard<T, U1 | U2 | U3>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>):Guard<T, U1 | U2 | U3 | U4>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>):Guard<T, U1 | U2 | U3 | U4 | U5>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T, U9 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9>;

export function guardFactory<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T, U9 extends T, U10 extends T>(
    discriminatorProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>, t10:Class<U10>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10>;


export function guardFactory<T, U extends T>(
    discriminatorProperty:keyof T):Guard<T, never>;

export function guardFactory<T, U extends T>(discriminatorProperty:keyof T, ...types:Class<U>[]):Guard<T, U> {
    return (guardee:T):guardee is U => {
        return extractDiscriminators(types).indexOf(guardee[discriminatorProperty].toString()) !== -1;
    };
}
