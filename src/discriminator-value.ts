// tslint:disable:ext-variable-name

export type ClassDecorator = (ctr:Function) => void;
export type PropertyDecorator = (target:any, key:string) => void;

export interface Class<T> {
    new(...args:any[]):T;
}

export interface DiscriminatedClass<T> extends Class<T> {
    discriminatorValue:string;
    discriminatorProperty:string;
}

export function DiscriminatorValue(value:string):PropertyDecorator {
    return (target:any, key:string) => {
        const ctr:DiscriminatedClass<any> = target.constructor;
        ctr.discriminatorValue = value;
        ctr.discriminatorProperty = key;
    };
}
