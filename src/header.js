const Header = (props) => {

   const headerStyle = {
            backgroundColor:"royalblue",
            color:"white"
        };

    return (
        <header style={headerStyle}>
            <h1>{props.title}</h1>

        </header>

    )
}
//Default props values are used if props are not passed
Header.defaultProps = {
    title : 'Default'
}

export default Header;