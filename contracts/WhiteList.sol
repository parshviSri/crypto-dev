//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";
 contract WhiteList{
     using Counters for Counters.Counter;
     Counters.Counter public numberOfUser;
     uint maxNumberOfWhiteListed;
     mapping(address => bool)listedAddress;
     constructor(uint _maxNumberOfWhiteListed){
         maxNumberOfWhiteListed = _maxNumberOfWhiteListed;
     }
     function checkWhitListed()public{
         require(!listedAddress[msg.sender],"You are already a white listed");
         require(numberOfUser.current() < maxNumberOfWhiteListed,"Sorry all spots are filled !!");
         listedAddress[msg.sender] = true;
         numberOfUser.increment();
     }

 }