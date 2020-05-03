module.exports = {

    addFriend : (req, res)=>{
        return res.status(200).json({
            message : "Add Friend"
        });
    },

    deleteFriend : (req, res)=>{
        return res.status(200).json({
            message : "Delete Friend"
        });
    },

    changePrivileges : (req, res)=>{
        return res.status(200).json({
            message : "Change Friend Privileges"
        });
    }


}