import { EventEmitter } from 'events';

type ID = string | number;

interface User<T = any> {
    id: ID;
    readonly username: string;
    email?: string;
    metadata: T;
}

enum Role {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 0
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Accessing ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}

function deprecated(message: string) {
    return function (constructor: Function) {
        console.warn(`${constructor.name} is deprecated: ${message}`);
    };
}

class BaseService extends EventEmitter {
    protected version: string = "1.0.0";
}

@deprecated("Use UserService instead")
class MyService extends BaseService implements User<Role> {
    public id: ID = 123;
    public readonly username: string = "pedro";
    public email?: string = "pedro@example.com";
    public metadata: Role = Role.Admin;

    private _secret: string;

    constructor(secret: string) {
        super();
        this._secret = secret;
    }

    @log
    async fetchData<U extends Record<string, any>>(path: string): Promise<Array<U & { processed: boolean }>> {
        const response = await fetch(`${path}?v=${this.version}`);
        const data = await response.json() as U[];
        
        if (!data) {
            throw new Error("No data found");
        }

        return data.map(item => ({
            ...item,
            processed: true
        }));
    }
}

const PI: number = 3.14159;
let count: number = 0;

function createMultiplier(factor: number): (n: number) => number {
    return (n: number) => n * factor;
}

const double = createMultiplier(2);

const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
const multiLine = `
    This is a
    template literal
    with ${count} interpolations.
`;

const config = {
    "key": "value",
    num: 42,
    bool: true,
    nothing: null,
    undef: undefined
};

const { username, ...rest } = config as any;
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

export default MyService;
