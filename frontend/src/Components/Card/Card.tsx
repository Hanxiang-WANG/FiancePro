import React from 'react'
import appleImage from '../../Images/Apple_logo_black.svg.png'

type Props = {
    companyName:string;
    ticker: string;
    price: number;
}

const Card : React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return <div className='card'>
    <img
        src={appleImage}
        alt="image"
    />
    <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
    </div>
    <p className='infon'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur repellat ipsum laborum 
        consequuntur accusantium deleniti esse optio voluptate, tempora beatae nisi, ducimus, 
        quisquam sequi fugit nulla aspernatur adipisci soluta dolor!
    </p>
  </div>
}

export default Card