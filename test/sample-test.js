const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", () => {
  it("should return its name", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");

    await myContract.deployed();
    expect(await myContract.getName()).to.equal("My Contract");
  });
  it("should change its name when requested", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");

    await myContract.changeName("Sunday");
    expect(await myContract.getName()).to.equal("Sunday");
  });
  it("should change its fullname when requested", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");

    await myContract.changeFullname("Nattapon");
    expect(await myContract.getFullname()).to.equal("Nattapon")
  })
  it("should change its fullname and name when requested", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");

    await myContract.changeFullname("Nattapon");
    await myContract.changeName("Sun");
    expect(await myContract.getNameProfile()).to.equal("Nattapon Sun")
  })
});