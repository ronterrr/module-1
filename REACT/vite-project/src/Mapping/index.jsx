function Mapping(){
    /*
        In react, you might need to display data from an array
     */

    const colors = ["green", "yellow", "blue", "black"];

        return(
            <>
            <div>
                <h1>Mapping colors</h1>
                <h4>Using arrow functions</h4>
                {colors.map((color, index) => {
                    return(
                        <>
                        <div>
                            <b>{index + 1}: {color}</b>
                        </div>
                        </>
                    )
                })}

                <h4>Using direct arrow function</h4>
                {colors.map((c, i) => (
                    <div>
                        <b>{i+1}: {c}</b>
                    </div>
                    ))}

            </div>
            </>
        );
}

export default Mapping;