import { NextRequest, NextResponse } from "next/server";
import {
    ActionGetResponse,
    createActionHeaders,
    ActionError,
  } from "@solana/actions";
  
  // create the standard headers for this route (including CORS)
  const headers = createActionHeaders();
  
  export const GET = async (req: NextRequest) => {
    try {
      const requestUrl = new URL(req.url);
      const baseHref = new URL(`/api/actions/blinkslash`,requestUrl.origin).toString();
  
      const payload: ActionGetResponse = {
        title: "SOLANA SUPERSTAR GIVEAWAY",
        icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=035',
        description: "receive $10 worth of a sol from solana superstars by entering your wallet address.you must be a registered member of solana superstars team",
        label: "Send SOL",
        links: {
          actions: [
            {
              type:'transaction',
              label : "Recieve SOL", // button text
              href: `${baseHref}&amount={amount}`, // this href will have a text input
              parameters: [
                {
                  name: "amount", // parameter name in the `href` above
                  label: "Enter your wallet address", // placeholder of the text input
                  required: true
                }
              ]
            }
          ]
        },
      };
  
      return NextResponse.json(payload, {
        headers,
      });
    } catch (err) {
      console.log(err);
      const actionError: ActionError = { message: "An unknown error occurred" };
      if (typeof err == "string") actionError.message = err;
      return Response.json(actionError, {
        status: 400,
        headers,
      });
    }
  };