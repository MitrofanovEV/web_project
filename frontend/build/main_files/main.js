var xhr = new XMLHttpRequest()

xhr.open('GET', '/products', true)

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText)
    let qq = ''
    for (let i = 0; i < data.length; ++i) {
        qq += '<div class="col-md-4">'
        qq += '   <div class="card mb-4 shadow-sm">'
        qq += '   <img class="card-img-top" data-src="' + data[i].Img + '" data-holder-rendered="true">'
        qq += '   <div class="card-body">'
        qq += '       <p class="card-text">' + data[i].Description + '</p>'
        qq += '       <div class="d-flex justify-content-between align-items-center">'
        qq += '       <div class="btn-group">'
        qq += '           <button type="button" class="btn btn-sm btn-outline-secondary">Просмотр</button>'
        qq += '           <button type="button" class="btn btn-sm btn-outline-secondary">Купить</button>'
        qq += '       </div>'
        qq += '       <small class="text-muted">9 mins</small>'
        qq += '       </div>'
        qq += '   </div>'
        qq += '   </div>'
        qq += '</div>'
    }
    document.getElementById('bars').innerHTML = qq
}
xhr.send()