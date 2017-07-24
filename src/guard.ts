import { Class } from "./discriminator-value";
import { guardFactory } from "./guard-factory";

// Variations up to 10 types.

export function guard<T, U1 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>):obj is U1;

export function guard<T, U1 extends T, U2 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>):obj is U1 | U2;

export function guard<T, U1 extends T, U2 extends T, U3 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>):obj is U1 | U2 | U3;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>):obj is U1 | U2 | U3 | U4;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>):obj is U1 | U2 | U3 | U4 | U5;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>):obj is U1 | U2 | U3 | U4 | U5 | U6;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                      U7 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>):obj is U1 | U2 | U3 | U4 | U5 | U6 | U7;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                      U7 extends T, U8 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>):obj is U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                      U7 extends T, U8 extends T, U9 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>):obj is U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9;

export function guard<T, U1 extends T, U2 extends T, U3 extends T, U4 extends T, U5 extends T, U6 extends T,
                      U7 extends T, U8 extends T, U9 extends T, U10 extends T>(
    obj:T, descriminatingProperty:keyof T,
    t1:Class<U1>, t2:Class<U2>, t3:Class<U3>, t4:Class<U4>, t5:Class<U5>, t6:Class<U6>,
    t7:Class<U7>, t8:Class<U8>, t9:Class<U9>, t10:Class<U10>):obj is U1 | U2 | U3 | U4 | U5 | U6 | U7 | U8 | U9 | U10;


export function guard<T, U extends T>(
    obj:T, descriminatingProperty:keyof T):obj is never;

export function guard<T, U extends T>(obj:T, descriminatingProperty:keyof T, ...types:Class<U>[]):obj is U {
    return guardFactory<T, U>(descriminatingProperty, ...types)(obj);
}

