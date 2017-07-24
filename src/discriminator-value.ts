// tslint:disable:ext-variable-name

export type ClassDecorator = (ctr:Function) => void;

export interface Class<T> {
    new(...args:any[]):T;
}

export interface DiscriminatedClass<T> extends Class<T> {
    discriminatorValue:string;
}

export function DiscriminatorValue(value:string):ClassDecorator {
    return (type:DiscriminatedClass<any>) => {
        type.discriminatorValue = value;
    };
}
