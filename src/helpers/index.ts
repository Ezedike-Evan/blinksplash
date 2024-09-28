import { createActionHeaders } from "@solana/actions";
import { clusterApiUrl } from "@solana/web3.js";

// CONSTANTS
export const CLUSTER_URL = process.env.RPC_URL ?? clusterApiUrl("devnet");
export const HEADERS = createActionHeaders({
	"chainId": "devnet",
	"actionVersion": "2.2",
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET,POST,PUT,OPTIONS",
	"Access-Control-Allow-Headers":
	  "Content-Type, Authorization, Content-Encoding, Accept-Encoding, X-Accept-Action-Version, X-Accept-Blockchain-Ids",
	"Access-Control-Expose-Headers": "X-Action-Version, X-Blockchain-Ids",
	"Content-Type": "application/json",
});