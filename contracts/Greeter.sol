//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MyContract {
    string private name;
    string private fullname;

    constructor(string memory _name) {
        name = _name;
    }

    function changeName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function changeFullname(string memory _fullname) public {
        fullname = _fullname;
    }

    function getFullname() public view returns (string memory) {
        return fullname;
    }

    function getNameProfile() public view returns (string memory) {
        return string(abi.encodePacked(fullname, " ", name));
    }
}
