import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {

    const {signUp} = useContext(AuthContext);


    const handleSignup = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name= form.get('name');
        const email= form.get('email');
        const password= form.get('password');

        console.log(name, email, password);

        signUp(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error.message);
        })


    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <p>Already have an account? <Link className="text-red-500 underline" to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;