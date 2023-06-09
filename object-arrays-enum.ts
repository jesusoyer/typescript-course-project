

// {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = 
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: "max",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

// let favoriteActivities: any[];
// favoriteActivities = ["sports"];

console.log(person.name);
