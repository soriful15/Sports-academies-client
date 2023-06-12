
import { useQuery } from '@tanstack/react-query';
import ClassesCard from './ClassesCard';
const Classes = () => {
    const { data: allClasses = [], } = useQuery(['allClasses'], async () => {
        const res = await fetch(`http://localhost:4000/approvedClasses`)
        return res.json()
    })
 


    console.log(allClasses)
    return (
        <>

            <h1 className='lg:text-2xl text-base font-bold text-zinc-600 text-center mt-6'>Hi! Student Enrolled Classes </h1>
          
            <div className="border-t-4 border-orange-200 mt-5 mb-5 w-3/4 mx-auto "></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 container gap-6 mt-10 mx-auto'>


                {
                    allClasses.map(classes =>

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