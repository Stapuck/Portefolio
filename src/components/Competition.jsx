import React from 'react'
import { competitions } from '../constants'
import { Card, Typography } from "@material-tailwind/react";
 
// const TABLE_HEAD = [ "title", "type", "startdate", "enddate", "place",  "result"];
const TABLE_HEAD = [ "title", "type", "date", "place",  "result"];
// "done",

const Competition = () => {


  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
 
  console.log(newDate);
  console.log("div");
  console.log(date, month, year);

  const test1 = new Date().toLocaleString();
  console.log(test1);

  

//    const  date_create = moment().format("DD-MM-YYYY");
//   console.log(date_create);






  return (
    <section>


        {/* mettre 10 lignes max  */}

        <div className='flex justify-center'>Compétition</div>
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
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
                    <tr key={id}  className={rowClasses}>
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
                        {done === true ?  <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                        >
                            {result}
                        </Typography>
                        </td>  :  <td>Coming soon</td> }
                        
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </Card>


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




 

 