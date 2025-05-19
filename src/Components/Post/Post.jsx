import { useState } from 'react';
import Coment from '../Coment/coment';
import './Post.css'

function Post(props) {
    const [comment, setComment] = useState('');

    function Comment(e) {
        e.preventDefault();

        props.comments.push({
            author: "Lara Samari",
            img: " https://img.freepik.com/fotos-gratis/tela-vazia-branca_1194-7555.jpg?w=360",
            career: "Estudante",
            comment: comment,
            likes: 0
        })
        setComment('');
    }
    return (
        <div className="post">
            <div className='user'>
                <img src={props.user.img} className='profile-picture' />
                <div>
                    <p className='user-name'>{props.user.author}</p>
                    <p className='user-career'>{props.user.career}</p>
                </div>
            </div>
            <p>{props.user.content}</p>
            <hr color='#323238' />
            <div className='coment'>
                <h4>Deixe seu feedback:</h4>
                <input className='coment-input' value={comment} onChange={(e) => setComment(e.target.value)} />
                <button className='coment-button' onClick={(e) => Comment(e)}>Publicar</button>

                {props.comments.map((obj, i) => (
                    <Coment
                        key={i}
                        author={obj.author}
                        coment={obj.comment}
                        img={obj.img}
                        career={obj.career}
                        likes={obj.likes}
                        deleted={false}
                    />
                ))}
            </div>
        </div>
    )
}

export default Post;