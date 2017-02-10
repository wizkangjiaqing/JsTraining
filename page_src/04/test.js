function run() {
    arrayTest();
    //
    initDom();
}

function arrayTest() {
    //
    let a = [];
    // add
    for (let i=0; i<10; i++) {
        a[i] = i;
    }
    console.log(a);
    // delete
    let length = a.length;
    for (let i=0; i<length; i++) {
        a.pop();
    }
    console.log(a);
}

function initDom() {
    //
    let divName = document.createElement('div');
    document.body.appendChild(divName);
    //
    let labelName = document.createElement('label');
    labelName.innerText = '用户名：';
    labelName.setAttribute('for', 'username');
    divName.appendChild(labelName);
    //
    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'username';
    divName.appendChild(inputName);
    //
    let divPass = document.createElement('div');
    document.body.appendChild(divPass);
    //
    let labelPass = document.createElement('label');
    labelPass.innerText = '密码：';
    labelPass.setAttribute('for', 'password');
    divPass.appendChild(labelPass);
    //
    let inputPass = document.createElement('input');
    inputPass.type = 'password';
    inputPass.id = 'password';
    divPass.appendChild(inputPass);
    //
    let submitBtn = document.createElement('button');
    submitBtn.innerText = '登录';
    submitBtn.id = 'submit';
    submitBtn.addEventListener('click', function(e) {
        let nameValue = inputName.value;
        let passValue = inputPass.value;
        doLogin(nameValue, passValue);
    });
    document.body.appendChild(submitBtn);
}

function doLogin(name, pass) {
    if (!name) {
        alert('用户名不能为空');
        return;
    } else if (!pass) {
        alert('密码不能为空');
        return;
    }
    //
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            if (request.status == 200) {
                console.log('login success');
                alert(request.responseText);
            } else {
                console.log('login failed');
                alert(request.responseText);
            }
        }
    }

    request.open('POST', '/api/login');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(`user_id=${name}&password=${pass}`);

    
}