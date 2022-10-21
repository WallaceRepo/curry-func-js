const buildSandwich = (ing1)=> {
    return (ing2)=> {
        return (ing3) => {
            return(ing4) => {
                return `${ing1}, ${ing2}, ${ing3}, ${ing4}`
            }
        }
    }
}

const mySandwich =  buildSandwich("backon")("lettuce")("bread")("tomatoes")
console.log(mySandwich);

const buildSammy = ing1 => ing2 => ing3 => ing4 => 
`${ing1}, ${ing2}, ${ing3}, ${ing4}`
console.log(buildSammy("bakon")("tomatoes")("bread")("lettuce"));

// Another example of a curried function for below function
let log = console.log;
const multiply = (x,y) => x * y;
   // curry version
const curriedMultiply = x => y => x * y;
log(curriedMultiply(2)(3))
log(curriedMultiply(2));

// Partially applied functions are a common use of currying

const times = curriedMultiply(10)
log(times)
log(times(8));

// Another exampe
const  updateElemTxt = id => content => document.querySelector(`#${id}`).textContent = content;

const updateHeaderTxt =updateElemTxt('header');
updateHeaderTxt('Hello Dave!');

// Function Composition
// Allows  calling small functions in a specific order

const addCustomer = fn => (...args) => {
    log('saving customer info')
    return fn(...args)
}
