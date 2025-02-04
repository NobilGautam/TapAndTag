import axios from '../../Axios/Axios'
import React, { useEffect, useState } from 'react'
import { usePrintContext } from '../Context/PrintCards'
import { toast, ToastContainer } from "react-toastify";
import ShimmerPrint from '../Shimmer/ShimmerPrint';


function PrintList() {
  const [printarray, setPrintarray] = useState([])
  const {printCards, setPrintCards} = usePrintContext()
  const handleExport = (ids) =>{
    let index = printarray.indexOf(ids);
    if (index === -1) {
      setPrintarray([...printarray, ids]);
    } else {
      let updatedOrder = [...printarray];
      updatedOrder.splice(index, 1);
      setPrintarray(updatedOrder);
    }
  }
  console.log(printarray)

  const handlePrintSubmit = async() =>{
    const res = await axios.post('admin/update-export-status',
    {printIds: printarray}
  )

    if(res.status === 200){
      setPrintCards(res.data.printData)
      toast.success("Exported!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
    }
  }

return !printCards? <ShimmerPrint/> : (
<div className='w-full h-full flex flex-col px-20 gap-4 py-2'>
<ToastContainer/>
<div className='flex gap-8 self-end'>
<button onClick={handlePrintSubmit} class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Export
</button>

</div>
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Select
                </th>
                <th scope="col" class="px-6 py-3">
                Order Id
                </th>
                <th scope='col' className='px-6 py-3'>
                User Email
                </th>
                <th scope="col" class="px-6 py-3">
                Card Details
                </th>
                <th scope="col" class="px-6 py-3">
                Card Quantity
                </th>
            </tr>
        </thead>
        <tbody>
        {Object.values(printCards).map((item, index) => (!item.printed && !item.exported ? (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className='flex items-center justify-center py-6'><input type="checkbox"
               onClick={() => handleExport(item._id)}
               className=''/></td>
              <td className="px-6 py-4 whitespace-nowrap">{item.orderId}</td>
              <td className='px-6 py-4 writespace-nowrap'>{item.useremail}</td>
              <td className="px-6 py-4 flex flex-col gap-1 whitespace-nowrap">
                <td>Name: {item.orderdetails[0].cardDetails.name}</td>
                <td>Designation: {item.orderdetails[0].cardDetails.designation}</td>
                <td>CompanyName: {item.orderdetails[0].cardDetails.companyName}</td>
                <td>PageUrl: {item.orderdetails[0].cardDetails.pageUrl}</td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <td>Metal: {item.orderdetails[0].cardQuantity.metalCard}</td>
                <td>Plastic: {item.orderdetails[0].cardQuantity.plasticCard}</td>
                <td>Wood: {item.orderdetails[0].cardQuantity.woodCard}</td>
              </td>
            </tr>
        ):('')))}
        </tbody>
    </table>
</div>
</div>
  )
}

export default PrintList
