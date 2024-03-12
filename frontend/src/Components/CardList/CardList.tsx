import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList : React.FC<Props> = (props: Props) : JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPLE' price={100}/>
        <Card companyName='Microsoft' ticker='MCSF' price={200}/>
        <Card companyName='Tesla' ticker='TES' price={300}/>
    </div>
  )
}

export default CardList