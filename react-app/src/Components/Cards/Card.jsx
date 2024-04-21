import React from 'react'
import tree from '../../assets/tree.avif'
import building from '../../assets/building.avif'

import './Card.css'
// export const Card = () => {
//     return (
//         <div>Card</div>
//     )
// }
function Card() {
    return (
        <div className='cards-outer-container'>
            <div className='card-container'>
                <img src={tree} alt="Card Image" className='card-img'/>
                <h1 className='card-title'>Tree Detection</h1>
                <p className='card-discription'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloremque repudiandae nisi adipisci pariatur blanditiis qui eos fugiat facere officiis nihil sequi veniam, quasi velit, ipsam, similique nobis! Ipsa, eveniet.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quo, ut expedita soluta excepturi saepe aspernatur quidem reiciendis dicta, ad, totam velit cumque quod aliquam iure ducimus deserunt sint?
                </p>
                <a href='tree_detection' className='card-btn'>Detect Now</a>
            </div>

            <div className='card-container'>
                <img src={building} alt="Card Image" className='card-img'/>
                <h1 className='card-title'>Building Detection</h1>
                <p className='card-discription'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, delectus rem fugit nam atque rerum animi doloremque cupiditate beatae et? Dolores assumenda tempora nostrum repudiandae ea, neque saepe unde sed.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quo, ut expedita soluta excepturi saepe aspernatur quidem reiciendis dicta, ad, totam velit cumque quod aliquam iure ducimus deserunt sint?
                </p>
                <a href='tree_detection' className='card-btn'>Detect Now</a>
            </div>
            

        </div>
        
    )
}

export default Card