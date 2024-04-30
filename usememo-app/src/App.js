// Uses of useMemo
// 1.Complex/Expensive Calculations
// Example 1

// import React, {useMemo} from 'react'
// function Calculation({value}) {
// const computedValue = useMemo(() => {
// some complex calculations here
// return value * 2;
// }, [value]);
// return <div>{computedValue}</div>;
// }
// export default Calculation

// Example 2

// import React, {useState, useMemo} from 'react'
// function Factorial() {
// const [number, setNumber] = useState(1);
// const factorial = useMemo(() => {
// let result = 1;
// for (let i = 2; i <= number; i++) {
// result *= i;
// }
// return result;
// }, [number]);
// return (
// <div>
// <input type="number" value={number} onChange={(e) =>
// setNumber(e.target.value)} />
// <p>Factorial of {number} is: {factorial}</p>
// </div>
// );
// }
// export default Factorial

//2. Data fetching

import React, {useState, useEffect, useMemo}from 'react'
function fetchDataFromAPI() {
// Simulate fetching data from an API
return new Promise((resolve) => {
setTimeout(() => {
resolve({ data: 'Some fetched data' });
}, 3000);
});
}
function Fetch() {
const [data, setData] = useState(null);
useEffect(() => {
fetchDataFromAPI().then((result) => {
setData(result.data);
});
}, []); // Fetch data only once on component mount
const cachedData = useMemo(() => data, [data]);
return (
<div>
<h1>Data from API:</h1>
{cachedData ? (
<p>{cachedData}</p>
) : (
<p>Loading...</p>
)}
</div>
);
}
export default Fetch