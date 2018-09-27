// import * as React from 'react';
// import UserInterface from '../Interfaces/UserInterface'


// export interface IProps {
//     email?: string;
//     password?: string;
//   }
// class Login extends React.Component<IProps> {
//     constructor(props:IProps){
//         super(props)
//         this.state ={

//         }
//     }

//     public handleSubmit(e: any){
//         e.preventDefault()
//         if(this.props.email === ''){
//             alert("Email is required")
//         } else{
//             alert('submitted')
//             alert(this.props.email)
//         }
//         e.preventDefault()
//     }
//     public render() {
//     return (
//         <div className="Login">
//         {}
//         <h3>Login</h3>
//         <form onSubmit={this.handleSubmit}>
//             <div>
//                 <label>Email</label>
//                 <input type="email" name={this.props.email} />
//             </div>
//             <div>
//                 <label>Password</label>
//                 <input type="password" name={this.props.password}/>
//             </div>
//             <input type="submit" value="Submit"/>
//         </form>
//         </div>
//     );
//     }
//     }

// export default Login;
