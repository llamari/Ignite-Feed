import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './Components/Post/Post'
import Header from './Components/Header/Header'
import './index.css'
import Profile from './Components/Profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Profile />
        <div>
          <Post
            user={{
              author: 'Beea',
              content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam quaerat enim neque aspernatur voluptate facere consequuntur earum eos ipsum, veniam ad mollitia ipsam doloremque voluptatum numquam nostrum, quisquam sunt!",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak6zs1GFGoUSOEDXkIIQ968alOD6rG3Dh-A&s",
              career: "Estudante"
            }}

            comments={[
              {
                author: "Autor 1",
                img: "https://www.avimortecidos.com.br/static/6370/sku/tricoline-tecido-tricoline-liso-vermelho-veludo-100-algodao-c326--p-1602274582101.gif",
                career: "Estudante",
                comment: "Comentário 01",
                likes: 10
              },
              {
                author: "Autor 2",
                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDysZFRkrKysrKysrLSstLS0rNysrKystKystKy0tLSs3Kys3LS0tNzcrNzcrKzctLS0tNystLf/AABEIAMoA+gMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGxABAQEAAgMAAAAAAAAAAAAAABEBIcExQaH/xAAYAQEBAAMAAAAAAAAAAAAAAAAAAQIGB//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO8RW4OWqIoiiKIKgCiKgACKAAACoAKIIKgKAICoAAIKogoAgMqgrJVQRFABRFEFQBRFQABBUoKogIogCiAAIKqB0AAoCAoADCoKqriLiCiKIAAKigACKIAqACiACoAAAAgKICqgAAgAArCoqqoiiKIoCoCKIqAACiAKIAqACiAAAAAAgCoIKohVAQBABVEUFEUQABRAFEUAAAABUERRAAEVVEAVAABAAABAUAAABQQGi54QBRARRAFEAUKABUBQABAFQAABQEAAAABBFVVEEFAEAAUQBRAFEAURQAQFEUAQBUAAAAAUTn38UBIQQARVVRARRFBRKIKIKKIqAAoAIgAKAgKCKKIAqBgKggKVAAEFBFFFQEUQBRFAVAFEBFEoCiAKIAogCiAKICgAAgCoJQUQFRUAURQUQBRFAAEUQBRAFEAUQBRAFEKCoAFBAUQFCoAAgqiAKIoAAKICKIoKIAoheYCiFBRAFEAAABAFEAAFUEAAKAIIqiKqAACoAolUAABagiKIKAAAAoAAIAtQAAAN0QFAARUEFDAAFVAAAAAABUwAVFBBUAAAAAAADAEFNFQABF1Af//Z",
                career: "Estudante",
                comment: "Comentário 02",
                likes: 15
              },
              {
                author: "Autor 3",
                img: "https://cdn3.ecshop.com.br/mgno9rbpq/product_images/n/683/l105__50127.jpg",
                career: "Estudante",
                comment: "Comentário 03!",
                likes: 30
              }
            ]}
          />
          <Post
            user={{
              author: 'Japonês',
              content: "Recebill",
              img: "https://www.receiteria.com.br/wp-content/uploads/sushi-1.jpg",
              career: "Criador de games"
            }}

            comments={[
              {
                author: "Alguém",
                img: "https://images.tcdn.com.br/img/img_prod/898929/tecido_tricoline_liso_natal_verde_50cm_x_1_50mt_1451_1_fdb4ab4361a836f091fa8e076b0e8106.png",
                career: "Estudante",
                comment: "Comentário de alguém",
                likes: 30
              },
              {
                author: "Alguém 02",
                img: "https://static.significados.com.br/foto/cor-laranja-og.jpg",
                career: "Estudante",
                comment: "Comentário de alguém 02",
                likes: 2
              }
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default App
