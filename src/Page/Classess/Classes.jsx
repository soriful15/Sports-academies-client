
import { useQuery } from '@tanstack/react-query';
import ClassesCard from './ClassesCard';


const Classes = () => {
    const { data: allClasses = [], } = useQuery(['classes'], async () => {
        const res = await fetch(`http://localhost:4000/classes`)
        return res.json()

    })

console.log(allClasses)
    return (
        <>
  

<div>


{
    allClasses.map(classes=>
    
        <ClassesCard
        key={classes._id}
        classes={classes}
        ></ClassesCard>
    
    )
}

</div>


          
        </>
    );
};

export default Classes;