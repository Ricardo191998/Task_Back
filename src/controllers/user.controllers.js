
module.exports = {

    home : (req, res)=>{
        return res.status(200).json({
            message : "Home"
        });
    },

    createTask : (req, res)=>{
        return res.status(200).json({
            message : "Create Task"
        });
    },
    
    getTask : (req, res)=>{
        return res.status(200).json({
            message : "Get task"
        });
    },

    getAllTask : (req, res)=>{
        return res.status(200).json({
            message : "Get all task"
        });
    },

    deleteTask : (req, res)=>{
        return res.status(200).json({
            message : "Delete Task"
        });
    },

    updateTask : (req, res)=>{
        return res.status(200).json({
            message : "Update Task"
        });
    }

}