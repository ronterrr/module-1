function FilterList(props){

    /*
        props:
            1. title
            2. array of options (new, renewed, user)
            3. options (adjustable length, tangle free, anti-chew)
     */
    const {title, options} = props;
    return(
        <>
        <div>
            <b>{title}</b>
            <div>
                {options.map((option, i) => {
                    return(
                        <div key={i}>
                            <input type="checkbox" />
                            <span>{option}</span>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default FilterList;