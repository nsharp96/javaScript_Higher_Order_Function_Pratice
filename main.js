const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
 
//forEach Method
companies.forEach(function(company)
{
    console.log(company);
});

//filter
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

//Fitler retail companies
const isRetail = companies.filter(retail => retail.category === "Retail");

console.log(isRetail.length);

//Fiilter companies in the 80s
const from80 = companies.filter(comp => comp.start >= 1980 && comp.start <= 1989);

console.log(from80.length);

//Filter companies that lasted longer than 10 years
const last10 = companies.filter(comp => comp.end-comp.start >= 10);

console.log(last10);

//map
const companyNames = companies.map(comp => `${comp.name} [${comp.start} - ${comp.end}]`);

console.log(companyNames); 

//Find sqrroot of ages
const sqrRootAge = ages.map(age => Math.sqrt(age));

console.log(sqrRootAge);

//Sort
const sortedComp = companies.sort((a,b) => (a.start > b.start ? 1 : -1) );
console.log(sortedComp);

//Sort ages
const sortAges = ages.sort( (a,b) => (a - b) );
console.log(sortAges);

//Reduce
const addAges = ages.reduce( (total, age) => total + age, 0);
console.log(addAges);

//Total years in all companies
const rangeOfComp = companies.reduce( (total, comp) => (total + (comp.end-comp.start)), 0 );
console.log(rangeOfComp);

//Combine all functions

const combine = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort( (a,b) => a -b )
    .reduce( (a,b) => a+b, 0)

console.log(combine);