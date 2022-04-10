const Role = require('../models/role')
const User = require('../models/user')

const validRole = async(role = '')=> {
    const existeRole = await Role.findOne({ role });

    if ( !existeRole ) {
        throw new Error(`El Role ${ role } no está registrado en la BD`)
    }
};

//verify email exist?
const emailExist = async (email = '')=> {
const existeEmail = await User.findOne( { email });

if ( existeEmail ) {
    /* return res.status(400).json({
        msg: 'EMAIL ALREADY EXISTS'
    }) */
    throw new Error(`El correo ${ email } ya se encuentra registrado en la BD`)
}};

//verify user exist?
const userExist = async (id)=> {
    const existeUser = await User.findById(id);
    
    if ( !existeUser ) {
        /* return res.status(400).json({
            msg: 'EMAIL ALREADY EXISTS'
        }) */
        throw new Error(`El usuario con el id: ${ id } no existe en la BD`)
    }};


module.exports = {
    validRole,
    emailExist,
    userExist
}