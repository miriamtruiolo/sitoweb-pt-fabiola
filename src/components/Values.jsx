import React from 'react'
import Image from '../images/values.jpeg'
import SectionHead from './sectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values__container'>
            <div className='values__left'>
                <div className='values__image'>
                    <img src={Image} alt='Fabiola sorridente'/>
                 </div>
            </div>
            <div className='values__right'>
                <SectionHead icon={<GiCutDiamond/>} title='Values'/> 
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam sint labore aut veritatis ex. Eveniet rem quia itaque perspiciatis! Repellat quae officiis corporis possimus autem? Esse pariatur consectetur ullam illo.
                </p>
                <div className='values__wrapper'>
                    {
                        values.map (({id, icon, title, desc}) => {
                            return <Card className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values