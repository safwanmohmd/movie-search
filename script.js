let inp = document.getElementById('inp')
let submit = document.getElementById('btnSubmit')
let galllery = document.getElementById('list')
let div = document.createElement('div')
let errrorDiv = document.createElement('err')
submit.addEventListener('click' , ()=>{
getMovie(inp.value)
})

const getMovie = async (movie) =>{

    if (movie == ''){
        return alert('fill in the field')
    }
    try {
    div.innerHTML =""
    errrorDiv.innerHTML = ''
    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=16a7b1ef&t=${movie}&plot=short`)
    let data = await response.json()
    console.log(data);


    if(data.Response == 'False'){
        errrorDiv.innerHTML = `  <div class="card mb-3 w-100">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="https://images.pexels.com/photos/3747159/pexels-photo-3747159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body w-100 text-center d-flex flex-column justify-content-center" >
                          <h3 class="card-title">Search Results Of " ${inp.value} "</h3>
                          <p class="mt-3 card-text">ERROR : ${data.Error}</p>
                         
                          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>`
                  galllery.appendChild(errrorDiv)
        return
    }
 

div.innerHTML = `  <div class="card mb-3 w-100">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${data.Poster}" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body w-100" >
                      <h5 class="card-title">${data.Title} (${data.Year})</h5>
                      <p class="mt-3 card-text">Director : ${data.Director}</p>
                      <p class="card-text">Language : ${data.Language}</p>
                      <p class="card-text">Writer : ${data.Writer}</p>
                    
                     
                      <p class="card-text">Released : ${data.Released}</p>
                      <p class="card-text">Plot : ${data.Plot}</p>
                    
                    </div>
                  </div>
                </div>
              </div>`

galllery.appendChild(div)

 

} catch(error) {
    console.log(`Error : ${error}`);
   
}

    }
    