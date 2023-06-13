
import { useQuery } from '@tanstack/react-query';
import ClassesCard from './ClassesCard';
import { Helmet } from 'react-helmet-async';
const Classes = () => {
    const { data: allClasses = [], } = useQuery(['approvedClasses'], async () => {
        const res = await fetch(`https://sports-academies-server-fawn.vercel.app/approvedClasses`)
        return res.json()
    })
 


    console.log(allClasses)
    return (
        <>

<Helmet>
        <title>Sport Academic | Classes Page</title>
      </Helmet>


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