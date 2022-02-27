import { ethers } from "ethers";

const RegisterForm = ({
    handleSubmit
}) => {

    const connectWallet = async () => {
    //connect wallet using ethersjs
    const [accounts] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(accounts[0]);
    setWallet(accounts[0]);
    setBalance(balance);
    };
    
    return (
        <>
        <div className="tb-section padding-bottom-xlg-150">
            <div className="tb-section-inner tb-wrap max-width-800">
                <form 
                    onSubmit={handleSubmit}
                    className="tb-form-lg"
                >
                    <div className="tb-form-group">
                        <label>Name*</label>
                        <input className="tb-form-control" type="text" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="tb-form-group">
                        <label>Email address*</label>
                        <input className="tb-form-control" type="email" name="email" placeholder="Enter your email" required />
                        <small className="tb-form-text">Your Rowan email</small>
                    </div>
                    <div className="tb-form-group">
                        <label>Username*</label>
                        <input className="tb-form-control" type="text" name="username" required />
                        <small className="tb-form-text">This is the username that will be visible on the website.</small>
                    </div>                    
            <div className="tb-btn tb-btn-light-outline">
                <button onClick={() => connectWallet} data-hover="Connect Wallet">Connect Wallet</button>
            </div> 

            <div className="tb-btn tb-btn-light-outline">
                <button type="submit" data-hover="Submit">Submit</button>
            </div> 
        </form>
    </div>
    </div>
    </>
)};

export default RegisterForm;