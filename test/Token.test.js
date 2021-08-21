const { expect } = require("chai");
const { ethers } = require("ethers");

describe("Token contract", function () {
    if ("Deployment should assign the total supply of token to the owner", async function () {
        const [owner] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const token = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await token.totalSupply()).to.equal(ownerBalance);
    });
});