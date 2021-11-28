// declara um conjunto inicial de usuarios
var db_usuarios_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Vitor Barcelos",
            "senha": "12345678",
            "email": "barcelosvitor@email.com",
            "telefone": "3197586222"
        },
        {
            "id": 2,
            "nome": "Andrei Marques",
            "senha": "10072036",
            "email": "andrei@gmail.com",
            "telefone": "31 34111507"
        },
        {
            "id": 3,
            "nome": "João Rodrigues",
            "senha": "852369741",
            "email": "rodriguesjoao@hotmail.com",
            "telefone": "21 85693366"
        },
        {
            "id": 4,
            "nome": "Lara Cristina",
            "senha": "456321789",
            "email": "criss@email.com",
            "telefone": "3456862221"
        },
        {
            "id": 5,
            "nome": "Caio Barcelos",
            "senha": "856932478",
            "email": "caio@barcelos.net",
            "telefone": "36859633"
        },
        {
            "id": 6,
            "nome": "Geraldo Almeida",
            "senha": "159263478",
            "email": "almeidageraldo@email.net",
            "telefone": "1-477-935-8478"
        },
        {
            "id": 7,
            "nome": "Igor Marcos",
            "senha": "753698214",
            "email": "igormarcos@email.com",
            "telefone": "37 125689333"
        },
        {
            "id": 8,
            "nome": "Nicolau Lima",
            "senha": "917328465",
            "email": "lima.nicolau@email.com",
            "telefone": "31 98567785"
        },
        {
            "id": 9,
            "nome": "Brenda Ramos",
            "senha": "426853179",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "31966852233"
        },
        {
            "id": 10,
            "nome": "Bruno Reis Costa",
            "senha": "856214739",
            "email": "reiscosta@email.com",
            "telefone": "11 13265598"
        }
    ]
}
var db = JSON.parse(localStorage.getItem('db_usuario'));
if (!db) {
    db = db_usuarios_inicial
};
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertUsuario(usuario) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoUsuario = {
        "id": novoId,
        "nome": usuario.nome,
        "email" : usuario.email,
        "telefone": usuario.telefone,
        "senha" : usuario.senha
    };
    db.data.push(novoUsuario);
    displayMessage("Usuario inserido com sucesso");
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function updateUsuario(id, usuario) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = usuario.nome,
    db.data[index].email = usuario.email,
    db.data[index].telefone = usuario.telefone,
    db.data[index].senha = usuario.senha

    displayMessage("Usuario alterado com sucesso"); 
    localStorage.setItem('db_usuario', JSON.stringify(db));
}

function deleteUsuario(id) {   
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Usuario removido com sucesso");
    localStorage.setItem('db_usuario', JSON.stringify(db));
}
