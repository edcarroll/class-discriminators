import { Class, DiscriminatedClass } from "./discriminator-value";

declare global {
    // tslint:disable-next-line:ext-variable-name
    interface Array<T> {
        filter<S extends T>(callbackfn:(value:T, index:number, array:ReadonlyArray<T>) => value is S, thisArg?:any):S[];
    }
}


export type Guard<T, U extends T> = (guardee:T) => guardee is U;

export function extractDiscriminators<T>(types:Class<T>[]):string[] {
    return types.map((t:DiscriminatedClass<T>) => {
        if (t.discriminatorValue) {
            return t.discriminatorValue;
        }
        throw new Error(`Class ${t.name} doesn't have a discriminator value. Apply one using @DiscriminatorValue.`);
    });
}

// tslint:disable-next-line:typedef
export function configureGuardFactory<T>(discriminatorProperty:keyof T) {
    function configuredGuardFactory<U extends T>(
    t1:Class<U>):Guard<T, U>;

    function configuredGuardFactory<U1 extends T, U2 extends T>(
    t1:Class<U1>, t2:Class<U2>):Guard<T, U1 | U2>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>):Guard<T, U1 | U2 | U3>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>):Guard<T, U1 | U2 | U3 | U4>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>):Guard<T, U1 | U2 | U3 | U4 | U5>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T, U9 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9>;

    function configuredGuardFactory<U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                                U7 extends T, U8 extends T, U9 extends T, U10 extends T>(
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>, t10:Class<U10>):Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10>;

    function configuredGuardFactory<U extends T>(...types:Class<U>[]):Guard<T, U> {
        return (guardee:T):guardee is U =>
            extractDiscriminators(types).indexOf(guardee[discriminatorProperty].toString()) !== -1;
    }

    return configuredGuardFactory;
}
