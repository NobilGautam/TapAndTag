import axios from "../Axios/Axios";



export const handlePayment = (authData) => async () => {
  const token = localStorage.getItem("token");
  try {
    const key = process.env.REACT_APP_RZP_KEY;
    const {data} = await axios.post("users/payment/checkout", authData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      console.log(data);
      const options = {
        key: key,
        amount: data.order.amount,
        currency: "INR",
        name: "Tap & Tag Inc.",
        description:
          "It is a payment during ordering cards from Tap & Tag Inc.",
        image:
          "https://tap-and-tag.vercel.app/static/media/logo.0449bfa0577d6e8e0065.png",
        order_id: data.order.id,
        prefill: {
          name: "Kaustubh Pathak",
          email: "kaustubhpathak9@gmail.com", //user email to be send
          contact: "8707887106",
        },
        notes: {
          address: "Razorpay Corporate Office",
          orderId: `6608f4972fc0506c27b98f53`,  //order Id of order db mongo to be send
        },
        theme: {
          color: "#085e04",
          hide_topbar:true,
        },
        modal: {
          backdropclose: true,
          escape: true,
          handleback: true,
          confirm_close: false,  
          animation: true
        },
        callback_url: `https://j3hg2gqz-8080.inc1.devtunnels.ms/users/payment/verification?orderId=6608f4972fc0506c27b98f53`, //https://stack-overflow-server.vercel.app //mongodb order id to be send
      };

      const razor = new window.Razorpay(options);
      razor.open();
    }
  } catch (error) {
    console.log(error);
  }
};
