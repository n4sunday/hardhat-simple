async function main() {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");
    const Token = await ethers.getContractFactory("Token");
    const token = await MyContract.deploy("Token Contract");

    console.log("My Contract deployed to:", myContract.address);
    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });