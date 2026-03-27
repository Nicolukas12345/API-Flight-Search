
document.querySelector('button').addEventListener('click', fetchSearch)



function fetchSearch(){
  let query = document.querySelector("input").value;
  fetch(`https://api.aviationstack.com/v1/airlines?access_key=742871005855386a0e4154c0798e72d0&callback=${query}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.data[0].status)
      document.querySelector('h3').innerText = data.data[0].status
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

