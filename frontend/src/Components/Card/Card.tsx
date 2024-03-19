import React from 'react'
import appleImage from '../../Images/Apple_logo_black.svg.png'
import { CompanySearch } from '../../company';

type Props = {
    id:string;
    searchResult:CompanySearch;
}

const Card : React.FC<Props> = ({ id, searchResult }: Props): JSX.Element => {
  return <div className='card'>
    <img
        //src={appleImage}
        alt="Company Logo"
    />
    <div className='details'>
        <h2>{searchResult.name} ({searchResult.symbol})</h2>
        <p>{searchResult.currency}</p>
    </div>
    <p className='infon'>
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
    </p>
  </div>
}

export default Card