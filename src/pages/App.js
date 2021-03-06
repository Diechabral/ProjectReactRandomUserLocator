import React from "react";
import { Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            loading: true,
        };
    }

    repeat() {
        if (this.state.loading === true) {
            this.setState({ loading: false });
        }
        fetch("https://randomuser.me/api/?results=1")
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                let pictures = data.results.map((person, key) => {
                    return (

                        <div  key={key}>
                            <div>
                                <img
                                    src={person.picture.large}
                                    className='profile-pic'
                                    style={{
                                        marginTop: "-130px",
                                        marginLeft: "85px",
                                        height: "200px",
                                        width: "200px",
                                        borderRadius: "100px",
                                        border: "5px solid #ff591d",
                                    }}
                                    alt='profile-img'
                                />
                                <h1
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    Nome: {person.name.first}
                                </h1>
                                <h1
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    G??nero: {person.gender}
                                </h1>
                                <h1
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    Idade: {person.dob.age}
                                </h1>
                                <h1
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    Pa??s: {person.location.country}
                                </h1>
                                <h1
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    Cidade: {person.location.city}
                                </h1>

                            </div>

                            <Link to="/locate" state={person.location.coordinates}>
                                <button type="button" className='random-btn'>
                                    Localize Usuario
                                </button>
                            </Link>
                        </div>
                    );
                });
                this.setState({ pictures: pictures });
            });
    }

    render() {
        return (

            <div>
                <h1> Random User Locator App</h1>
                <button className='random-btn' onClick={() => this.repeat()}>
                    Nova lista de Usuarios
                </button>
                <div
                    style={{
                        borderRadius: "20px",
                        height: "520px",
                        width: "450px",
                        marginTop: "150px",
                        backgroundColor: "#222831",
                    }}
                >
                    <div className="container1" style={{ margin: "30px" }}>
                        <div className="container2">
                            {this.state.loading
                                ? this.loadingAnimation()
                                : this.state.pictures}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
    loadingAnimation() {
        return (
            <div>
                <h1
                    style={{
                        color: "white",
                        justifyContent: "center"
                    }}> Aperte o Bot??o acima</h1>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="spinner-third"
                    className="svg-inline--fa fa-spinner-third fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                    ></path>
                </svg>

                <svg
                    id="shadow"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="spinner-third"
                    className="svg-inline--fa fa-spinner-third fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                    ></path>
                </svg>
            </div >
        );
    }
}

export default App;
