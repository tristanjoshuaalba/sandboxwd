// When to use Promises?
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('Error!'))

// Note: A fetch simply returns a promise



const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums',albums)
    } catch {
        console.log('oops!')
    }
    
}

// ES9 (ES2018)
// Object Spread Operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals;
// tiger >> 23
// rest >> {lion: 5, monkey: 2}

const array = [1,2,3,4,5];

function sum(a, b, c, d, e) {
    return a + b+ c+d+e
}

sum (...array);

const { tiger, lion, ...rest}

// FINALLY
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.cp/api/people/4'
]

Promise.all(urls.map(url=> {
    return fetch(url).then(people=>people.json())
}))
.then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
})
.catch(err=>console.log('ugggghhhh fix it!', err))
.finally(data=> console.log('extra',data))

// FOR AWAIT - takes each item from each Promises and iterate over them
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
}