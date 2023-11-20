type DeepPartial<T> = unknown extends T
    ? T
    : T extends object
    ? {
        [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
    }
    : T;

interface ObjectInterface {
    name: string;
    age: number;

    school: {
        name: string;
        year: number;
        major?: string;
        frends?: {
            name: string;
        }[]
    }[];

}


const obj: DeepPartial<ObjectInterface> = {
    school: [
        {
            name: 'test school',
            frends: [
                {
                    name: 'nee'
                },
                {
                    name: 'nee2',
                }
            ]
        },
        {
            name: 'test school',
            year: 1,
            frends: [
                {
                    name: 'nee'
                },
            ]
        },
    ]
}


const obj2: ObjectInterface = {
    name: '',
    age: 0,
    school: [
        {
            name: 's1',
            year: 1,
        }],
}


const newS = obj.school?.filter(
    (v) => v.name && v.year
) as { name: string, year: number }[] ?? [];

const obj3: ObjectInterface = {
    ...obj2,
    school: [
        ...obj2.school, 
        ...newS
    ]
}