let box = document.querySelector(".box")

let inp = document.getElementById("input1")
let inp2 = document.getElementById("input2")
let btn = document.querySelector(".btn")
let box2 = document.querySelector(".box2")
let helo = document.querySelector(".helo")
let data = ["salox9090"]
let data1 = [201212]

alert(`sizningi Login ${data} va pasword ${data1}`)

btn.addEventListener("click",() =>{
  if (inp.value == data && inp2.value == data1 ) {
      alert(`Дабро пожаловать`)
  
  
  
       if (inp.value == data && inp2.value == data1 == true ) {
        p.textContent = ""
        // p.innerHTML = `<p style="color:white;font-size:15px;" >sizninig Login yoki Psaword toxri emas</p>`
        box2.append(p)
       p.style.fontSize = "25px"
        p.style.color = "red"
        p.style.width = "300px"
        p.style.textAlign = "center"
       }
        let p  = document.createElement("p")
      
        let h1 = document.querySelector(".h1")
        let btn1 = document.querySelector(".btn1")
     
    helo.append(h1,btn1)   
     helo.style.display = "block" 
     h1.style.color = "black"
     helo.style.display = "flex" 
     helo.style. flexDirection = "column";
     helo.style.justifyContent = "space-center"
     helo.style.alignItems = "center"
     helo.style.gap ="20px"
     
     let helo2 = document.querySelector(".helo2")
    
     helo.append(helo2)
     btn1.addEventListener("click",()=>{
         let p2 = document.createElement("p")
         let data =  prompt("savol kiriting")
         p2.innerHTML = `<p style = "color:black;" >${data}</p>`
         p2.style.fontSize = "20px"
         helo2.append(p2,data)

       
     })


        box2.append(p)
      inp2.value = ''
      inp.value = ''
   
    } 

  
    else  {
    
      p.textContent = "sizninig Login yoki Psaword toxri emas"
      // p.innerHTML = `<p style="color:white;font-size:15px;" >sizninig Login yoki Psaword toxri emas</p>`
      box2.append(p)
     p.style.fontSize = "25px"
      p.style.color = "red"
      p.style.width = "300px"
      p.style.textAlign = "center"
   
        
        
         let h1 = document.querySelector(".h1")
         let btn1 = document.querySelector(".btn1")
      helo.append(h1,btn1)   
      helo.style.display = "block" 
      h1.style.color = "black"
      helo.style.display = "flex" 
      helo.style. flexDirection = "column";
      helo.style.justifyContent = "space-center"
      helo.style.alignItems = "center"
      helo.style.gap ="20px"
      
      let helo2 = document.querySelector(".helo2")
      helo.append(helo2)
      
      btn1.addEventListener("click",()=>{
        
        helo.style.display = "flex" 
        helo.style. flexDirection = "column";
        helo.style.justifyContent = "space-center"
        helo.style.alignItems = "center"
        helo.style.gap ="20px"
        let p2 = document.createElement("p")
        let data =  prompt("savol kiriting")
        p2.innerHTML = `<p style = "color:black;" >${data}</p>`
          p2.style.fontSize = "20px"
          helo2.append(data,p2)

        
        })
        
        inp2.value = ''
        inp.value = ''
      }
    })
    
    let p  = document.createElement("p")

