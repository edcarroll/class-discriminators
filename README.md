# Class Discriminators

Aids Typescript type checking for class based discriminated unions.

Note that the object being tested doesn't need to be an instance of any of the classes, it only needs a discriminator value!

## Installation

```sh
$ npm install --save @edcarroll/class-discriminators
```

## Quickstart

Start by decorating your classes with their discriminator values:

```typescript
import { DiscriminatorValue } from "@edcarroll/class-discriminators";

@DiscriminatorValue("hello")
export class Hello {
    public readonly type = "hello";

    public sharedProp = 0;
    public helloProp = 10;
}

@DiscriminatorValue("world")
export class World {
    public readonly type = "world";

    public sharedProp = 1;
    public worldProp = 11;
}

// HelloWorld is the type union we are going to be narrowing.
export type HelloWorld = Hello | World;
```

Next, configure a guard factory using `configureGuardFactory` by providing the name of the field you're discriminating on:

```typescript
import { configureGuardFactory } from "@edcarroll/class-discriminators";

const guardFactory = configureGuardFactory<HelloWorld>("type");
```

Now you can use the guard factory to test the type of various values.

### Array Filtering

The usefulness of this library shows itself when filtering arrays. This library works with the type checker to ensure that when you run `Array.filter` it returns an array typed as the union of the provided types, so that you can then run functions.

An example use case would be with Redux / ngrx and class based actions.

```typescript
const itemA = new Hello();
const itemB = new World();

// Take an array of multiple types
const arr = [itemA, itemB, itemA, itemB];

// You can use our configured guard factory to filter down to one or more specified types:
const hellos = arr
    .filter(guardFactory(Hello))
    .forEach(h => console.log(h.helloProp)); // prints 0, 0.

const worlds = console.log(arr
    .filter(guardFactory(World))
    .reduce((s, w) => w.worldProp + s, 0)); // prints 22.

// As mentioned before, `guardFactory` is a variadic higher order function,
// so you aren't limited to just 1 type:
const helloWorlds = arr
    .filter(guardFactory(Hello, World))
    .forEach(hw => console.log(hw.sharedProp)); // prints 0, 1, 0, 1.

// Also works well with Observables:
Observable
    .of(itemA, itemB, itemA, itemB)
    .filter(guardFactory(Hello))
    .subscribe(i => console.log(i.helloProp)); // prints 0, 0.
```

### Individual Guarding

Individual guarding is less useful as you can just `switch` on the discriminator property, however it works all the same:

```typescript
// i.e. we have an item but know only it's a hello or a world.
const item:HelloWorld = new Hello();

if (guardFactory(Hello)(item)) {
    console.log(item.helloProp); // prints 0.
} else if (guardFactory(World)(item)) {
    console.log(item.worldProp); // prints 1.
}

// The above will print 0 as item is a `Hello` (not a surprise for us,
// but at least the type checker is happy!)
```

### API

### @DiscriminatorValue(value:string)

Configures the class with the provided discriminator value.

### configureGuardFactory<T>(discriminatorProperty:keyof T):GuardFactory<...U extends T>

Takes a property name to use for discriminator value checks, and returns a `GuardFactory` function.

#### GuardFactory<...U extends T>(...types:Class<U>[]):Guard<T, U>

Takes `n` classes decorated with `@DiscriminatorValue` and returns a `Guard`.

#### Guard<T, U>(guardee:T) => guardee is U

Takes an object of type `T` and returns `true` if its discriminator value is equal to one of the ones passed into the guard factory.

### extractDiscriminators<T>(types:Class<T>[]):string[]

Takes an array of types and returns an array of their discriminator values.