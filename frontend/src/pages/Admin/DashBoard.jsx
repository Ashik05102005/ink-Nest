import React, { useEffect, useMemo } from 'react'
import Sidebar from '../../components/Admin.jsx/Sidebar'
import Navbar from '../../components/Admin.jsx/Navbar'
import Stats from '../../components/Admin.jsx/Dashboard/Stats'
import SalesOverview from '../../components/Admin.jsx/Dashboard/SalesOverview'
import RecentOrders from '../../components/Admin.jsx/Dashboard/RecentOrders'
import { useOrders } from '../../hooks/useOrders'
import { useDispatch } from 'react-redux'
import { setOrders } from '../../redux/slices/OrderSlice'
import LowStock from '../../components/Admin.jsx/Dashboard/LowStock'
import CategoryPieChart from '../../components/Admin.jsx/Dashboard/CategoryPieChart'
import { useBooks } from '../../hooks/useBooks'
function DashBoard() {
  const dispatch = useDispatch()
  const { data: orders, isLoading, error } = useOrders();
  const {data: books , isLoading:bookLoading} = useBooks()
  const chartData = useMemo(() => {
    if (!orders) return [];

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    // Create data from 1st of current month → today
    const data = Array.from(
      { length: today },
      (_, index) => {
        const day = index + 1;

        return {
          date: `${day} ${now.toLocaleString("en-IN", {
            month: "short",
          })}`,
          sales: 0,
        };
      }
    );

    // Add order sales
    orders.forEach((order) => {
      const orderDate = new Date(order.orderAt);

      if (
        orderDate.getFullYear() === year &&
        orderDate.getMonth() === month &&
        orderDate.getDate() <= today
      ) {
        const day = orderDate.getDate();

        data[day - 1].sales += Number(order.total || 0);
      }
    });

    return data;
  }, [orders]);

  // pie chart data

  const categoryData = useMemo(() => {
    if (!books) return [];

    const categoryCount = {};

    books.forEach((book) => {
      const category = book.category || "Unknown";

      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });

    const sorted = Object.entries(categoryCount)
      .map(([category, count]) => ({
        category,
        count,
      }))
      .sort((a, b) => b.count - a.count);

    // Keep top 5 categories
    const topCategories = sorted.slice(0, 5);

    // Everything else → Others
    const othersCount = sorted
      .slice(5)
      .reduce((total, item) => total + item.count, 0);

    if (othersCount > 0) {
      topCategories.push({
        category: "Others",
        count: othersCount,
      });
    }

    return topCategories;
  }, [books]);


  useEffect(() => {
    dispatch(setOrders(orders))
  }, [orders, dispatch])

  
  if (isLoading || bookLoading) return <h1>Loading....</h1>
  if (error) return <h1>error....</h1>

  // console.log(orders);


  return (
    <div>
      <Stats />
      <div className='p-3 grid grid-cols-10 gap-3   max-h-200 '>
        <div className='col-span-6'>
          <SalesOverview data={chartData} />
        </div>
        <div className='col-span-4'>
          <CategoryPieChart  data={categoryData}/>
        </div>
      </div>
      <div className='lg:mt-2  mt-15 p-3 grid lg:grid-cols-2 gap-4'>
        <RecentOrders/>
        <LowStock />
      </div>
    </div>
  )
}

export default DashBoard