import RegisterForm from "../components/misc/RegisterForm";
import { ethers } from "hardhat";

function Form() {
    const registerUser = async event => {
        event.preventDefault();

        const body = JSON.stringify({
            name: event.target.name.value,
            email: event.target.email.value,
            username: event.target.username.value,
            wallet: ethers.provider.selectedAddress
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

        if (json.success) {
            alert('User registered successfully');
        } else {
            alert('Error registering user');
        }

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