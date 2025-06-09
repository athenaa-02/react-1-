
function Childcomponent(props) {
    return (
        <>
            <div className="wrapper">
                <h3 style={styles.header}>{props.header}</h3>
                <p style={styles.text}>
                    {props.text}
                </p>
            </div>
        </>
    )
}
const styles = {
    header: {
        margin: 0,
        color: '#4C545C',
    },
    text: {
        color: '#9EABB2',
        width: '360px',
    }
}

export default Childcomponent