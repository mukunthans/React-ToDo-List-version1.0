const Footer = ({length}) => {
    //const today = new Date();
    return (
        <footer>
            <p>
                {length} {length===1 ? "Item" : "Items"} in List
            </p>
        </footer>
    )
}

export default Footer