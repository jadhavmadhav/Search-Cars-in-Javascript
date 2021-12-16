



const Search = () => {
   const InputData = document.getElementById("input");
   document.getElementById("card").style.display = "block"

   // Data Post in Body
   const PostData = document.getElementById("search")
   data.filter((value) => {
         // change Text in LowerCase

           const companyName =value.productname.toLowerCase()
           const userdata =InputData.value.toLowerCase()
            
      if (companyName === userdata) {
         InputData.value = ""
          document.getElementById("card").style.display="none"

         return PostData.innerHTML += `
                    <div class="card">
                       <div class="card-image"> 
                         <img src=${value.img} alt=""> 
                       </div>
                       <div class="card-hedear">
                           <h3>${value.productname}</h3>
                        </div>
                        <div class="card-body"> 
                           <h5>Price ${value.price} Lakh*</h5> 
                           <strong> Discount: ${value.discount}%</strong>
                        </div>
                     </div> `}
   })

}

const Search1 = () => {
   const InputData = document.getElementById("input1");
   document.getElementById("card").style.display = "block"



   const result = data.filter((ele) => ele.price <= InputData.value)
   // console.log(result)
   InputData.value = ""
   result.map((ele) => {
      const PostData = document.getElementById("search")
      document.getElementById("card").style.display = "none"
      // console.log(ele.price)
      return PostData.innerHTML += ` 
                     <div class="card">
                       <div class="card-image"> 
                         <img src=${ele.img} alt=""> 
                       </div>
                       <div class="card-hedear">
                           <h3>${ele.productname}</h3>
                        </div>
                        <div class="card-body"> 
                           <h5>Price ${ele.price} Lakh*</h5> 
                           <strong> Discount: ${ele.discount}%</strong>
                        </div>
                     </div>  `})

}