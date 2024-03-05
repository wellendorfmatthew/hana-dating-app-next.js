import { NextResponse, NextRequest } from "next/server";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from 'validator';

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const { email, password } = body;

    const secret = process.env.SECRET || "";

    if (!password || !email) {
        return NextResponse.json({error: "All fields must be filled"}, {status: 411});
    }

    if (!validator.isEmail(email)) {
        return NextResponse.json({error: "Invalid email format"}, {status: 401})
    }

    if (!validator.isStrongPassword(password)) {
        return NextResponse.json({error: "Invalid password please try again"}, {status: 401});
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const token = sign({
        email,
    }, secret, {
        expiresIn: 60 * 60 * 24 * 1000
    })

    const serialized = serialize("session", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 1000,
        path: "/"
    })

    return NextResponse.json({message: "Success"}, {status: 200, headers: { "Set-Cookie": serialized}});
}
