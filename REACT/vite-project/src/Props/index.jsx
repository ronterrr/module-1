/*
1. Components are functions.
    input is data, output is ui

2. To create reusable components, you need an understanding of props (properties).

3. Each component you create in react will always have props.

4. Props are passed from parent to child. All data types can be passed into props, including other components. 
*/

function Parent(){
    //primitive data types
    const str = "Hello World";
    const amount = 2000;
    const isOk = true;
    const notSet = null;


    return(
        <>
        <div>
            <h1>I am the parent component</h1>
            <Child1 str={str} amountInNumber = {amount} isOk={isOk} notSet={notSet}/>
        </div>
        </>
    )
}

//display props using prop keyword
function Child1(props){
    console.log(props);
    return(
        <>
        <div>
            <h1>I am the child component</h1>
            <ul>
                <li>
                    Favourite String: <b>{props.str}</b>
                </li>
                <li>
                    Amount: <b>{props.amountInNumber}</b>
                </li>
                <li>
                    isOk: <b>{String(props.isOk)}</b>
                    {/*For boolean, convert to string before displaying */}
                </li>
                <li>
                    Not Set: <b>{props.notSet}</b>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Parent;
