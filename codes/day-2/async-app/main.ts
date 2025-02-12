//function global(){
const divide = async (a: number, b: number): Promise<number> => {
    const result = a / b
    if (result === Infinity)
        throw new Error('divisor should not be zero')
    else
        return result
}

const add = async (a: number, b: number): Promise<number> => a + b

//await keyword can be used inside a function declared with async keyword
//you can use await keyword in global scope as the global scope is not async
async function callDivide(): Promise<void> {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (err: any) {
        console.log(err.message);
    }
}
// const addRes = add(12, 3)
// console.log(addRes);

async function callAdd(): Promise<void> {
    try {
        const data = await add(12, 3)
        console.log(data);
    } catch (err: any) {
        console.log(err.message);
    }
}
callAdd()
callDivide()

const multiply = (a: number, b: number) => a * b
console.log(multiply(12, 3));
//}
//global()