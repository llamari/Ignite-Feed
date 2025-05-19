import { PiPencilSimpleLineBold } from "react-icons/pi";
import './Profile.css'

function Profile() {

    return (
        <div className="profile">
            <img src='https://cdn.awsli.com.br/2524/2524457/produto/227322066/cr333201r-xz0vnt1gip.jpg' className='cover-picture' />

            <div style={{ padding: "1rem 1.5rem" }}>
                <img src="https://img.freepik.com/fotos-gratis/tela-vazia-branca_1194-7555.jpg?w=360" className="profile-picture-profile" />

                <p className='user-name' style={{textAlign: 'center', justifyContent: 'center'}}>Lara Samari</p>
                <p className='user-career'>Estudante</p>
                <hr color="#323238" />

                <button className="edit-profile">
                    <PiPencilSimpleLineBold />
                    Editar Perfil
                </button>
            </div>
        </div>
    )
}

export default Profile