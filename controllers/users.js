
export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`)

    res.send(users)
}

export const createUsers = (req, res) => {   
    const user = req.body

    users.push({...user,})
    
    console.log(`User [${user.username}] added to the database.`)
};

export const deleteUsers = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`)
    
    users = users.filter((user) => user.id !== req.params.id)
};

export const updateUsers =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id)
    
    user.username = req.body.username
    user.age = req.body.age

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};