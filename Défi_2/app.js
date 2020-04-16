const xhr = new XMLHttpRequest;
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');


button1.addEventListener('click', function loadcustomer() {
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // document.getElementById('customer').innerHTML = xhr.response;
                var ob1 = JSON.parse(xhr.response)
                document.getElementById('customer').innerHTML = "name: " + ob1.name + "<br>" + "company: " + ob1.company + "<br>" + "phone: " + ob1.phone + "<br>" + "id: " + ob1.id;

            }
            if (xhr.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    xhr.open('get', 'customer.json', true);
    xhr.send();
})

button2.addEventListener('click', function loadcustomers() {
    xhr.onload = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var ob1 = JSON.parse(xhr.response);
                var output = " ";
                for (let i = 0; i < ob1.length; i++) {
                    output += "<ul >" + '{'+
                        "<li style  = 'color:#291aee'  > name: " + "<span style  = 'color:#ef7e49' >" + ' "'+ ob1[i].name +' "' +"</span>" + "</li>  " +
                        "<li style  = 'color:#291aee'  > company: " + "<span style  = 'color:#ef7e49' >" + ' "'+ ob1[i].company + ' "'+"</span>"+ "</li>  " +
                        "<li style  = 'color:#291aee'  > phone: " + "<span style  = 'color:#ef7e49' >" + ' "'+ ob1[i].phone + ' "'+"</span>"+ "</li>  " +
                        "<li style  = 'color:#291aee'  >  id: " + "<span style  = 'color:#1aee47' >" +  ob1[i].id +"</span>"+ "</li>  " +
                        '}' +"</ul>";
                }
                document.getElementById('customers').innerHTML = output;
            }
            if (xhr.status == 404) {
                console.log("ERROR 404")
            }
        }
    }
    xhr.open('get', 'customers.json', true);
    xhr.send();
})