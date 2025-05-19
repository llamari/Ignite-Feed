import { AiOutlineLike } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import './index.css'
import { useState } from "react";

function Coment(props) {
    const [liked, setLiked] = useState(false);

    
    return (
        <div>
            <div className='user' style={{ alignItems: 'start' }}>
                <img src={props.img} className='profile-picture' />
                <div style={{ width: '100%', margin: '0 0 1rem 0' }}>
                    <div className="comment-content">
                        <p className='user-name'>
                            {props.author}

                            {props.author=="Lara Samari" && <FaTrashAlt/>}    
                        </p>
                        <p className='user-career'>{props.career}</p>
                        <div>
                            <p>{props.coment}</p>
                        </div>
                    </div>
                    <div>
                        <div 
                        style={{color: liked ? "#00B37E" :  "#8D8D99", display: 'flex', alignItems: 'center', cursor: 'pointer'}}
                        onClick={() => setLiked(!liked)}
                        >
                        <AiOutlineLike
                            size={20}
                            style={{fontWeight: 'bold', marginRight: '.5rem'}} 
                        />
                        <p>Aplaudir • {liked ? props.likes + 1 : props.likes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coment;