import RegisterForm from "../components/misc/RegisterForm";
import BlocSocNFTAuth from '../artifacts/contracts/BlocSocNFTAuth.sol/BlocSocNFTAuth.json';
import { ethers } from "ethers";

function Form() {
    const registerUser = async event => {
        event.preventDefault();

        const [accounts] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    
        const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    
        const contract = new ethers.Contract(
            contractAddress, BlocSocNFTAuth.abi, signer);



        const body = JSON.stringify({
            sheet1: {
            name: event.target.name.value,
            email: event.target.email.value,
            username: event.target.username.value,
            wallet: accounts[0]
            }
        })

        const res = await fetch(
            'https://api.sheety.co/3490fb2b16fd7cace02457c26b47fc68/nfttAuthApi/sheet1',
            {
                body: body,
                headers : {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

        const json = await res.json();
        console.log(json);

        const result = await contract.safeMint(event.target.name.value, event.target.email.value, event.target.username.value)
        console.log(result);

        alert('User registered successfully');
    }

    return (
        <>
        <div id="page-content">
        <div className="tb-section no-padding-bottom">
            <div className="tb-section-inner">
            <div className="section-title text-center">
              <h2 className="title">Register as Rowan ID Holder</h2>
          </div>
            <RegisterForm handleSubmit={registerUser} />
            </div>
        </div>
        </div>
        </>
      )
}

export default Form;