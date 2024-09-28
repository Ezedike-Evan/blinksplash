import { NextRequest, NextResponse } from "next/server";
import { ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse,ACTIONS_CORS_HEADERS } from "@solana/actions";
import { Connection, PublicKey, TransactionMessage, VersionedTransaction } from "@solana/web3.js";
import { CLUSTER_URL, HEADERS } from "@/helpers";

export const GET = async(req:NextRequest)=>{
  const payload : ActionGetResponse = {
    title: 'name',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=035',
    description: "receive $10 worth of a sol from solana superstars by entering your name. your name and wallet address will be sent to solana superstar for payment",
    label: "Send SOL"
    // links:{
    //   actions:[{
    //     type:'transaction',
    //     label : "Recieve SOL",
    //     href: '',
    //     parameters: [{
    //       name: "username", 
    //       label: "Enter your name",
    //       required: true
    //     }]
    //   }]
    // }
  }
  return NextResponse.json(payload,{headers:ACTIONS_CORS_HEADERS})
}

export const POST = async(req:NextRequest)=>{
  const requestBody : ActionPostRequest = await req.json()
  const userPublicKey = requestBody.account
  console.log(requestBody)
  

  const payer = new PublicKey(userPublicKey)
  const connection = new Connection(CLUSTER_URL);
  const { blockhash } = await connection.getLatestBlockhash();

  const message = new TransactionMessage({
    payerKey: payer,
    recentBlockhash: blockhash,
    instructions: [],
  }).compileToV0Message();

  const tx = new VersionedTransaction(message);

  const payload : ActionPostResponse = await createPostResponse({
    fields:{
      type:'post',
      transaction: tx,
      message:`hello ${userPublicKey}`
    }
  })

  return NextResponse.json(payload,{headers:ACTIONS_CORS_HEADERS})
}

export const OPTION = async()=>{
  return NextResponse.json(null,{headers:ACTIONS_CORS_HEADERS})
}