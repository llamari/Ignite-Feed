import { useEffect, useState } from 'react';
import Coment from '../Coment/coment';
import './Post.css'

function Post(props) {
    const [comment, setComment] = useState('');
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        setComentarios(props.comments);
    }, [props.comments])

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
        document.getElementsByClassName('coment-input').setCustomValidity("ERRO")
    }

    function DeleteComment(i) {
        console.log("Excluindo comentário: " + i);
        const updated = comentarios.filter((item, index) => index !==i);
        setComentarios(updated);
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
                <textarea className='coment-input' onChange={(e) => e.target.setCustomValidity("ERRO!")} />
                <button className='coment-button' onClick={(e) => Comment(e)}>Publicar</button>

                {comentarios.map((obj, i) => (
                    <Coment
                        key={i}
                        index={i}
                        author={obj.author}
                        coment={obj.comment}
                        img={obj.img}
                        career={obj.career}
                        likes={obj.likes}
                        deleted={DeleteComment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Post;