import { Class, DiscriminatedClass } from "./discriminator-value";

declare global {
    // tslint:disable-next-line:ext-variable-name
    interface Array<T> {
        filter<S extends T>(callbackfn:(value:T, index:number, array:ReadonlyArray<T>) => value is S, thisArg?:any):S[];
    }
}


export type Guard<T, U extends T> = (guardee:T) => guardee is U;

// tslint:disable-next-line:ext-variable-name
export interface GuardFactory<T> {
    <U extends T>(
        t1:Class<U>)
            :Guard<T, U>;

    <U1 extends T, U2 extends T>(
        t1:Class<U1>, t2:Class<U2>)
            :Guard<T, U1 | U2>;

    <U1 extends T, U2 extends T, U3 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>)
            :Guard<T, U1 | U2 | U3>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>)
            :Guard<T, U1 | U2 | U3 | U4>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>)
            :Guard<T, U1 | U2 | U3 | U4 | U5>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T, U11 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>, t11:Class<U11>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10 | U11>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T, U11 extends T, U12 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>, t11:Class<U11>, t12:Class<U12>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10 | U11 | U12>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T, U11 extends T, U12 extends T, U13 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>, t11:Class<U11>, t12:Class<U12>, t13:Class<U13>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10 | U11 | U12 | U13>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T, U11 extends T, U12 extends T, U13 extends T, U14 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>, t11:Class<U11>, t12:Class<U12>, t13:Class<U13>, t14:Class<U14>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10 | U11 | U12 | U13 | U14>;

    <U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T, U7 extends T, U8 extends T, U9 extends T,
     U10 extends T, U11 extends T, U12 extends T, U13 extends T, U14 extends T, U15 extends T>(
        t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>, t7:Class<U7>, t8:Class<U8>, t9:Class<U9>,
        t10:Class<U10>, t11:Class<U11>, t12:Class<U12>, t13:Class<U13>, t14:Class<U14>, t15:Class<U15>)
            :Guard<T, U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10 | U11 | U12 | U13 | U14 | U15>;
}

export function extractDiscriminators<T>(types:Class<T>[]):string[] {
    return types.map((t:DiscriminatedClass<T>) => {
        if (t.discriminatorValue) {
            return t.discriminatorValue;
        }
        throw new Error(`Class ${t.name} doesn't have a discriminator value. Apply one using @DiscriminatorValue.`);
    });
}

export function configureGuardFactory<T>(discriminatorProperty:keyof T):GuardFactory<T> {
    return <U extends T>(...types:Class<U>[]) =>
        (guardee:T):guardee is U =>
            extractDiscriminators(types).indexOf(guardee[discriminatorProperty].toString()) !== -1;
}
