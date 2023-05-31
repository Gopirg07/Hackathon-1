

var cont=document.createElement("div");
cont.setAttribute("class","container");

var ph=document.createElement("div");
ph.setAttribute("class","product_head");

var heading=document.createElement("h1");
heading.setAttribute("class","product_heading");
heading.innerHTML="Enter The Product Type";
heading.setAttribute("class","heading"); 

var productTypeNames=document.createElement("p");
productTypeNames.setAttribute("class","productTypeNames");
productTypeNames.innerHTML="Product Types => [ Blush, Bronzer, Eyebrow, Eyeliner, Eyeshadow, Foundation, Lip liner, Lipstick, Mascara, Nail polish ]";
productTypeNames.setAttribute("class",""); 


var inp=document.createElement("input");
inp.setAttribute("type","text");
inp.setAttribute("id","form");
inp.setAttribute("class","form-control porm");
inp.setAttribute("placeholder","Search The Product Types");

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";

button.addEventListener("click",foo);

var ptitle=document.createElement("div");
ptitle.setAttribute("class","col-lg-12 name");  

var hr=document.createElement("hr"); 
hr.setAttribute("class","col-lg-12 hr")
hr.innerHTML="_______________________________________________________________________________________________________________________________________________________________________"
ph.append(heading,productTypeNames,inp,button,ptitle,hr);


var pb=document.createElement("div");
pb.setAttribute("class","product_body"); 

var productMain=document.createElement("div");
productMain.setAttribute("class","row productMain");
 
pb.append(productMain);

cont.append(ph,pb);
document.body.append(cont);



async function foo(){
    //this is to show only the products which is being searched!
    productMain.innerHTML="";
    console.clear();
    try{
        
        var pt=document.getElementById("form").value;
        console.log(pt);
        var res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${pt}`); 
        var res1=await res.json(); 
        console.log(res1); 
        ptitle.innerHTML=`<h1>Listing ${pt}</h1>
        <h5>Product type : ${pt}</h5>`;  

        for(i=0;i<res1.length;i++)
        {
             var product=document.createElement("div");
            product.setAttribute("class","col-lg-3 product"); 

            var panel=document.createElement("div");
            panel.setAttribute("class","panel"); 
            panel.innerHTML=`<div class="card bg-light mb-3" style="max-width: 18rem;">
                             <div class="card-body">  

                             <div class="img-div"> <img src="${res1[i].image_link}" class="card-img-top" alt="..."> </div>
 
                             <div class="brand/name"> <p class="card-text"> <b> Brand :</b> ${res1[i].brand} </p>
                             <p class="card-text"><b>Product Name :</b>${res1[i].name}</p> </div>

                             <div class="cat/price"> <p class="card-text"> <b> Category :</b> ${res1[i].category} </p> 
                             <p class="card-text"><b>Price :</b> ${res1[i].price_sign} ${res1[i].price} </p> </div>
                             

                             <div class="plink"> <p class="card-text"> <b> Product link :</b> <a href="${res1[i].product_link}"> click here </a> </p> </div>
                             


                             <div class="desc"> <p class="card-text"> <b> Description :</b> ${res1[i].description} </p> </div> 
                            
                             </div>
                             </div>`; 
 
            product.append(panel);
            productMain.append(product);
        } 
    } 
    catch(err){
        console.log(err);
    }
}
