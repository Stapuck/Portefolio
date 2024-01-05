import React from 'react'
import { competition } from '../constants'

const Competition = () => {
  return (
    <section>
        <div className='flex justify-center mb-4 underline font-semibold text-xl'>Competition :</div>


        <div className='flex justify-center'>
        <table className="w-full table-auto "> 
            <thead>
            <tr className="bg-gray-200">
                <th>Nom</th>
                <th>type</th>
                <th>lieu</th>
                <th>date</th>
                <th>result</th>
            </tr>
            </thead>
            <tbody>
            {competition.map((race) => (
            <tr key={race.id} className=''>
                <td className="flex justify-center p-2">{race.title}</td>
                <td className="border-black-500 p-2">{race.type}</td>
                <td className="border-black-500 p-2">{race.place}</td>
                <td className="border-black-500 p-2">{race.date}</td>
                {race.done === true ?  <td>{race.result}</td> :  <td>Coming soon</td> }
            </tr>
        ))}
            </tbody>
        </table>
        </div>
        

    
    </section>
  )
}

export default Competition