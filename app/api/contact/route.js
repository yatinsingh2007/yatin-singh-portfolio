import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import doten from "dotenv";
doten.config();

export async function POST(req){
    try{
        const { email , message } = await req.json();
        const transport = nodemailer.createTransport({
            service : "gmail" ,
            auth : {
                user : process.env.USER_EMAIL ,
                pass : process.env.EMAIL_APP_PASSWORD
            }
        })

        await transport.sendMail({
            from : process.env.USER_EMAIL,
            to : process.env.USER_EMAIL ,
            subject : `Portfolio Contact Form - ${email}` ,
            text : message
        })

        return NextResponse.json({ message : "Email sent successfully" } , {
            status : 200
        })
    }catch(err){
        console.log(err);
        return NextResponse.json({
            message : "Email not sent"
        } , { 
            status : 500
        })
    }
}