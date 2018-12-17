function end (button) {
    let id = button.value
    $.post('/show_info', { Id: id })
  }

var xhr = new XMLHttpRequest()

xhr.open('GET', '/products', true)

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let qq = ''
    for (let i = 0; i < data.length; ++i) {
        if (data[i].Status == 'Продано') {
            continue;
        }
        qq += '<div class="col-md-4">'
        qq += '   <div class="card mb-4 shadow-sm">'
        qq += '   <img class="card-img-top" src="' + data[i].Img + '" data-holder-rendered="true">'
        qq += '   <div class="card-body">'
        qq += '       <p class="card-text">' + data[i].Name + '</p>'
        qq += '       <div class="d-flex justify-content-between align-items-center">'
        qq += '       <div class="btn-group">'
        qq += '           <button type="button" class="btn btn-sm btn-outline-secondary" onclick="send(this)" value="' + data[i]._id + '">Просмотр</button>'
        qq += '           <button type="button" class="btn btn-sm btn-outline-secondary" onclick="openForm(this)" value="' + data[i]._id + '">Купить</button>'
        qq += '       </div>'
        qq += '       <small class="text-muted">' + data[i].Count + '$</small>'
        qq += '       </div>'
        qq += '   </div>'
        qq += '   </div>'
        qq += '</div>'
    }
    document.getElementById('bars').innerHTML = qq
}
xhr.send()

function send (button) {
    //$.get('/show_info/'+button.value);
    window.location = 'http://localhost:8080/info/'+button.value
}

function openForm(x) {
    document.getElementById("myForm").style.display = "block";
    console.log(x.value)
    document.getElementById("cat_id").value = x.value
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }