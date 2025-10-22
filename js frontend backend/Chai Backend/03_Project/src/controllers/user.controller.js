import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudnary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
// import jwt from "jsonwebtoken"
// import mongoose from "mongoose"



// Access and refresh token 
const generateAccessAndRefereshTokens = async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating refreshing and access token")
        
    }
}



const registerUser = asyncHandler( async (req,res) => {
    
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary , avatar
    // create user object - create entry in db
    // remove password and refresh token field from response 
    // check for user creation 
    // return res

    

    // 1)get details
    const {fullname, email, username,password} = req.body
    // console.log("email: ", email);

    // if (fullname === "") {
    //     throw new ApiError(400, "full name is required")   
    // }

    // 2) validation
    if(
        [fullname,email,username,password].some((field) => 
            field?.trim() === "")
    ){
       throw new ApiError(400, "All fields are required")
    }


    // 3) check exist 
    const existedUser = await User.findOne({
        $or: [{username } ,{email } ]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    // 4)
    //  console.log(req.files?.avatar[0]?.path); // undifined
     
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.lenth > 0) {
        coverImageLocalPath = req.files.coverImage[0].path  
    }


    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")  
    }
    
    // 5) upload to cloudnary

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    
    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")         
    }

    // 6) Enter into database

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "" , // error
        email,
        password,
        username: username.toLowerCase()
    })


    // 7)
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user.")
    }

    // return response

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

   
})

const loginUser = asyncHandler( async (req,res) => {
    // req body -> data
    // username or email
    // find the user
    // password check
    // access and referesh token
    // send cookie secure cookies


    const {username, email, password} = req.body


    if (!username && !email) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({ // mongoose throw
        $or: [{username},{email}] // user or email needed
    })

    if (!user) { // this is instance of our user
        throw new ApiError(404,"User does not exist")
    }
    
    const isPasswordValid = await user.isPasswordCorrect(password)
    
    if (!isPasswordValid) { // this is instance of our user
        throw new ApiError(401,"Invalid user Credentials")
    }


    const {accessToken,refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
    
    // cookiessend 
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken, options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,{
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser = asyncHandler( async(req,res) => {
    // cookies clear and middleware concept
    // req.user._id
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {} , "User logged Out"))
    
})

export {registerUser, loginUser ,logoutUser}