function Containers(props){
return(
    <>
    <div style={styles.container}>
        <img src={props.img} alt="" />
        <h6 style={styles.title}>{props.title}</h6>
        <article style={styles.text}>{props.text}</article>
    </div>
    </>
)
}

const styles = {
    container: {
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    title: {
     color: '#4C545C',
     fontSize: '23px',
     margin: '44px 0 16px 0'
    },
    text: {
     fontSize: '15px',
     width: '330px',
    }

}

export default Containers