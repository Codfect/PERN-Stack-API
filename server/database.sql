CREATE DATABASE jwtt;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  nome TEXT NOT NULL,
  sobrenome TEXT NOT NULL, 
  username TEXT NOT NULL,
  senha TEXT NOT NULL,
  salt TEXT NOT NULL,
  datacriacao TIMESTAMP
);

INSERT INTO users (nome, sobrenome, username, senha, salt, datacriacao)
VALUES ('Julius', 'Inving', 'ji76', '767676', 'salt', CURRENT_DATE);

/* 
               test uuid

user_id     | 762065d9-9478-468c-aa97-155bfd266558
nome        | Julius
sobrenome   | Inving
username    | ji76
senha       | 767676
salt        | salt
datacriacao | 2021-03-18 00:00:00

*/