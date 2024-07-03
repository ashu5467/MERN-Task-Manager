  how to run this Task manager App
  before starting this task manager app please run this commands at below path
 - connect to mongo db
 - C:\projects\MERN Task Manager>
   C:\projects\MERN Task Manager\client>
   at both this paths run "npm i" command



  - C:\projects\MERN Task Manager>  npm i express,
                                   npm i moongoose,
                                   npm i cors,
  -C:\projects\MERN Task Manager\client>  npm install react-axios,
                                          npm install react-router-dom,
                                          npm install -D tailwindcss

  - C:\projects\MERN Task Manager> --at this path run "node server.js" command
  - C:\projects\MERN Task Manager\client> --at this path run "npm start" or "npm run start"



below is the file structure of this project
  mern-task-manager/

│── models/
│   │   └── taskmodel.js
├── routes/
│   │   └── tasks.js
├── server.js
└── package.json
└── package-lock.json
└── client/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── TaskList.js
    │   │   └── TaskForm.js
    │   ├── App.js
    │   ├── index.js
    ├── package.json
    ├── package-lock.json
