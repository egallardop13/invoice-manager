import { CalendarIcon } from '@heroicons/react/24/outline';
import { generateYAxis } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import { any } from 'zod';
import { fetchRevenue } from '@/app/lib/data';
import dropDown from './dropDown';


// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/



export default async function RevenueChart() { // Make component async, remove the props
  const monthsArray=[
    'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dec'
  ];

  const revenue = await fetchRevenue('2023');
  //  const revenue = [
  //   { month: 'Jan', revenue: 2000 },
  //   { month: 'Feb', revenue: 1800 },
  //   { month: 'Mar', revenue: 2200 },
  //   { month: 'Apr', revenue: 2500 },
  //   { month: 'May', revenue: 2300 },
  //   { month: 'Jun', revenue: 3200 },
  //   { month: 'Jul', revenue: 3500 },
  //   { month: 'Aug', revenue: 3700 },
  //   { month: 'Sep', revenue: 2500 },
  //   { month: 'Oct', revenue: 2800 },
  //   { month: 'Nov', revenue: 3000 },
  //   { month: 'Dec', revenue: 4800 },
  // ];
  const chartHeight = 350;
  // NOTE: comment in this code when you get to this point in the course
 
  

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

   if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
   }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
        

       <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((item) => (
            <div key={item.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * item.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {monthsArray[item.month-1]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">2023</h3>
          
        </div>
      </div> 
    </div>
  );
}
