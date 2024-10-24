# 01-json-server

1) Instalar o Node.js:
   https://nodejs.org/en

2) Verificar a versão instalada do Node.js:
   node -v

3) Atualizar a instalação do npm:
   npm install -g npm 

4) Verificar a versão instalada do npm:
   npm -v

5) Instalar o JSON-Server:
   npm install -g json-server

6) Na raiz do projeto, criar "db/db.json":
 {
    "cidades": [
      {"id": 1, "cidade": "Belo Horizonte", "estado": "MG", "população": 3800000},
      {"id": 2, "cidade": "São Paulo", "estado": "SP", "população": 11800000},
      {"id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "população": 5300000},
      {"id": 4, "cidade": "Curitiba", "estado": "PR", "população": 1200000},
      {"id": 5, "cidade": "Fortaleza", "estado": "CE", "população": 2100000}
    ]
  }
 
7) Instalar o middleware CORS (Cross-Origin Resource Sharing):
   npm install cors

8) Executar o arquivo server.js:
   node server.js
