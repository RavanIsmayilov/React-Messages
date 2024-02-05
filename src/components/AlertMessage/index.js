import './style.css'

const AlertMessage = ({message, clas ,foto}) =>{

    return (
        <div className= {clas}>

            Emeliyyatin veziyyeti: {message}

            <img src = {foto} alt = {clas} />


        </div>

    )
}

export default AlertMessage;