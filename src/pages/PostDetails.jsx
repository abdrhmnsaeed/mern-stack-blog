import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog10.jpg'

const PostDetails = () => {
    return (
        <section className='post-detail'>
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
                        <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
                    </div>
                </div>
                <h1 className="post-detail__title">This is the post title</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime temporibus facilis id ut, assumenda distinctio quaerat ducimus ad saepe, consequuntur similique quasi exercitationem voluptates? Labore aut odit sapiente, numquam vero quia tempora sequi quibusdam deserunt ab eaque ut ipsam.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores id repellendus, quas expedita quisquam rem eaque voluptatum quis exercitationem atque corrupti facere tempora incidunt commodi necessitatibus natus, veniam culpa quae ex quidem repudiandae est dolore perferendis. Aspernatur beatae, modi earum aut saepe numquam temporibus repudiandae obcaecati, officiis amet explicabo? Accusantium sit nihil incidunt sed ullam!</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit iste voluptas tempore consectetur soluta tenetur quia ullam fuga assumenda reiciendis ea, unde magni vitae, veritatis exercitationem rem a quae provident! Nobis quo, molestias quibusdam adipisci dolor iure ipsa enim sapiente voluptate quia, natus odit eveniet laudantium reiciendis cum. Perferendis molestiae laboriosam labore perspiciatis ratione praesentium vel ut? Asperiores quasi debitis doloremque corporis voluptate commodi. Esse quidem vitae ab, et minus ut fugiat eius consequatur ex, voluptatum tempore. Mollitia voluptatem fuga doloremque! Cumque quod explicabo sint. Atque delectus molestiae autem aperiam voluptatibus obcaecati, cum id eaque quod dolores assumenda maxime ullam, nam corporis? Harum error porro ipsa. Quos placeat, adipisci amet, illo a enim minus quibusdam unde molestiae ut in. Incidunt.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, commodi aspernatur? Eaque corporis totam voluptas, rerum distinctio quam harum. Et praesentium ipsa illum dolorem hic ad ea, quae harum ratione! Placeat vitae fugiat quo, ratione ex animi voluptatum facilis dolorem quidem similique nemo nesciunt cum minus sint quaerat dicta maiores delectus dolores aspernatur necessitatibus, sit distinctio quasi! Maxime vel obcaecati facere quaerat assumenda dicta similique culpa eum consequatur? Eius qui sunt error enim voluptatum eos magnam neque molestias quas porro deleniti beatae, est debitis quos voluptatem a, officia vitae corporis quibusdam veritatis cumque architecto. Esse corporis maiores molestias qui explicabo blanditiis vitae perspiciatis eum alias ad temporibus odit aspernatur, odio dicta eveniet hic enim deserunt quia itaque, nulla labore debitis, nostrum atque nihil. Eum saepe tempore officia voluptatem vero magni laborum assumenda repellat non odit? Rerum, saepe. Tenetur architecto omnis iusto non maiores natus, animi possimus eaque rem quos placeat odit. Sit, officia. Nobis et accusamus voluptas quisquam ab ad qui minima blanditiis quo, esse, eos magni cum repudiandae odit velit, quia eveniet cumque magnam similique quaerat! Modi praesentium dolorem, in maiores temporibus esse, sit aperiam, necessitatibus sapiente ab ratione eius a. Id neque at nisi facilis alias. Minus, impedit.
                </p>
            </div>
        </section>
    )
}

export default PostDetails