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
    console.log(document);
    console.log(document.body);
    let divName = document.createElement('div');
    document.body.appendChild(divName);
    //
    let labelName = document.createElement('label');
    labelName.innerText = '用户名：';
    labelName.setAttribute('for', 'username');
    divName.appendChild(labelName);
    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'username';
    divName.appendChild(inputName);
    //
    let divPass = document.createElement('div');
    document.body.appendChild(divPass);
    let labelPass = document.createElement('label');
    labelPass.innerText = '密码：';
    labelPass.setAttribute('for', 'password');
    divPass.appendChild(labelPass);
    let inputPass = document.createElement('input');
    inputPass.type = 'password';
    inputPass.id = 'password';
    divPass.appendChild(inputPass);
    //
    let submitBtn = document.createElement('button');
    submitBtn.innerText = '登录';
    submitBtn.id = 'submit';
    document.body.appendChild(submitBtn);

}

run();