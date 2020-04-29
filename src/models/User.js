const {Schema , model} = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name : String ,
    email : String ,
    password : String
});


userSchema.pre('save', function(next) {
    var user = this;
    
    bcrypt.genSalt(process.env.SALT_WORK_FACTOR|| 10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = async function(password) {
    let valid
    try{
        valid = await bcrypt.compare(candidatePassword, this.password);
    }catch(error){
        return{
            success: false,
            error: "We have an error"
        }
    }
    return {
        success: true,
        valid
    };
};


module.exports = model("User", userSchema);