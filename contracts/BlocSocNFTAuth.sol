// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./libs/Base64.sol";

contract BlocSocNFTAuth is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 maxSupply = 100;

    event NewNFKeyMinted(address sender, uint256 tokenId);
    event NewNFKeyBurned(address sender, uint256 tokenId);

    string baseSvg =
        "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: sans-serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";

    constructor() ERC721("BlocSocNFTAuth", "BSAuth") {}

    function safeMint(string memory name, string memory email, string memory username) public {
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId < maxSupply, "Max supply has been reached");

        string memory svgText = string(
            abi.encodePacked("NFKey #", Strings.toString(tokenId + 1))
        );

        string memory finalSvg = string(
            abi.encodePacked(baseSvg, svgText, "</text></svg>")
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"pid: "', svgText, '", "name": "', name, '", "email": "', Base64.encode(bytes(email)), '", "username": "', username, '", "description": "Rowan BlocSoc Auth Protocol", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(finalSvg)), '"}'
                    )
                )
            )
        );

        string memory uri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );

        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);

        emit NewNFKeyMinted(msg.sender, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);

        emit NewNFKeyBurned(msg.sender, tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

}
