import { User } from "../model/userModel.js";

//.....................................create user start...................
export const createUser = async (req, res) => {

    try {
        const userData = new User(req.body)
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        const savedData = await userData.save()
        // console.log(savedData)
        res.status(200).json({
            msg:"User Created Successfully",
            data:savedData
        })

    } catch (error) {
        res.status(500).json({ 
            error: error ,
            msg:"Required all field"
        })

    }
}
//..........................................create user end ................................

//...........................................fetch user details start........................
export const getAllUser = async (req, res) => {
    try {
        const userData = await User.find()
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({ error: error })

    }
}

// get particular user details

export const getOneUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ msg: "User not found" })
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ error: error })

    }
}
//...........................................fetch user details end........................

// ............................................uddate user start...........................
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(401).json({ msg: "User not found" })
        }
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        console.log(updatedUser)
        res.status(200).json({
            msg:"User Updated Successfully",
            data:updatedUser
        })
    } catch (error) {
        res.status(500).json({ error: error })

    }

}
// ............................................update user end.................................. 

// .............................................delete user start...............................
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(401).json({ msg: "User not found" })
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({ msg: "User deleted Successfully" })

    } catch (error) {
        res.status(500).json({ error: error })

    }
}
// ............................................delete user end ...............................................