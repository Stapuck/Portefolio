import React from 'react'
import { competitions } from '../constants/index'
import { competitionsen } from '../constants/index-en.js'
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD_EN = [ "Title", "Type", "Date", "Place",  "Result"];
const TABLE_HEAD_FR = [ "Titre", "Type", "Date", "Lieu",  "Resultat"];

const Competition = () => {
    const lgSite = document.documentElement.lang;
    const data = lgSite === "fr" ? TABLE_HEAD_FR : TABLE_HEAD_EN;

    // TODO: faire pareil que dans timeline pour compétition et gestion de traduction des info dans le tableau 

    const date = new Date();
    const output = String(date.getDate()).padStart(2, '0') + '-' +
    String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();

  return (
    <section>


        {/* todo mettre 10 lignes max  */}

        <div className='flex justify-center'>Compétition</div>
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    
                    {data.map((head) => (
                    <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                        <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 "
                        >
                        {head}
                        </Typography>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {/* {competitions.map(({ id, title, startdate, enddate, result, type, place, done }, index) => { */}
                {competitions.map(({ id, title, date,  result, type, place, done }, index) => {
                    const isLast = index === competitions.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 ";
                    const rowClasses = index % 2 === 0 ? "bg-blue-200" : "bg-green-200";
        
                    return (
                    <tr key={index}  className={rowClasses}>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {title}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {type}
                        </Typography>
                        </td>
                        {/* <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {startdate}
                        </Typography>
                        </td> */}
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {date}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {place}
                        </Typography>
                        </td>
                        {/* <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {done === true ? "yes" : "not yet"}
                        </Typography>
                        </td> */}
                        {/* {done === true ?   */}
                        {/* {date <= output ?   */}
                        
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {result}
                        </Typography>
                        {/* </td>  :  <td>Coming soon  */}
                        </td> 
                        {/* } */}
                        
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </Card>

            {/* utiliser le fonctionnement de en fonction de la date pour autre chose car la inutile au final, voir pour changement de couleur 
            en fonction de si fait ou non,  */}


            {/* <div>
            <ul>
            {competitions.map(({ id, title, date,  result, type, place, done }, index) => {

               <div key={index}> 
                    {date}
               </div>
                
            })}
            </ul>
            </div> */}

















        {/* <div className='flex justify-center mb-4 underline font-semibold text-xl'>Competition :</div>


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
        </div> */}
        

    
    </section>
  )
}

export default Competition




 

 