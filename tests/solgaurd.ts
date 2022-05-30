import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Solgaurd } from "../target/types/solgaurd";

describe("solgaurd", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Solgaurd as Program<Solgaurd>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
