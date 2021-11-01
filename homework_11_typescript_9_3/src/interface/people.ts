interface Person{
    name: string;
    height: string | number;
    mass: string | number;
    gender: string;
}
export interface Api{
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Person>;
}