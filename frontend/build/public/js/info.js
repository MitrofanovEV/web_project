let xhr = new XMLHttpRequest()
let url = window.location.href
let id = url.slice(url.indexOf('info/'))
xhr.open('GET', '/info=' + id, true)
  
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    console.log(data)
    let str = ''
    str =  '<h1 class="jumbotron-heading" >' +  data.Name + '</h1>'
    str += '<img src="'+ data.Img +'" class="img-thumbnail">'
    str += '<p style="text-align:left">' + data.Description + '</p>'
    str += '<button class="btn btn-primary btn-lg" onclick="openForm(this)" value="'+ data._id +'">Купить</button>'
    document.getElementById('header').innerHTML = str
}
xhr.send()

function openForm(x) {
  document.getElementById("myForm").style.display = "block";
  console.log(x.value)
  document.getElementById("cat_id").value = x.value
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none"
  }