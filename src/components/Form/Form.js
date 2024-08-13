import React from "react";
import "./Form.css";

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         firstNameData: "",
         lastNameData: "",
         emailData: "",

         submitted: false,

         allValid: false,
      };
   }

   submitHandler(event) {
      event.preventDefault();

      this.setState({
         submitted: true,
      });

      if (this.state.lastNameData && this.state.firstNameData && this.state.emailData) {
         this.setState({
            allValid: true,
         });

         setTimeout(() => {
            this.setState({ allValid: false });
         }, 3000);
      }
   }

   fnameInputHandler(event) {
      this.setState({
         firstNameData: event.target.value,
      });
   }

   lnameInputHandler(event) {
      this.setState({
         lastNameData: event.target.value,
      });
   }

   emailInputHandler(event) {
      this.setState({
         emailData: event.nativeEvent.target.value,
      });
   }

   render() {
      return (
         <div className="form-container">
            <form className="register-form" autoComplete="off" onSubmit={(event) => this.submitHandler(event)}>
               {this.state.allValid && <div className="success-message">ثبتنام با موفقیت انجام شد!</div>}

               <input id="first-name" value={this.state.firstNameData} onChange={(event) => this.fnameInputHandler(event)} className="form-field" type="text" placeholder="نام" name="firstName" />
               {this.state.submitted && this.state.firstNameData.length === 0 && <span id="first-name-error">لطفا نام خود را به درستی وارد کنید. </span>}

               <input id="last-name" value={this.state.lastNameData} onChange={(event) => this.lnameInputHandler(event)} className="form-field" type="text" placeholder="نام خانوادگی" name="lastName" />
               {this.state.submitted && this.state.lastNameData.length === 0 && <span id="last-name-error">لطفا نام خانوادگی خود را به درستی وارد کنید.</span>}

               <input id="email" value={this.state.emailData} onChange={(event) => this.emailInputHandler(event)} className="form-field" type="text" placeholder="ایمیل" name="email" />
               {this.state.submitted && this.state.emailData.length === 0 && <span id="email-error">لطفا ایمیل خود را به درستی وارد کنید</span>}

               <button className="form-field" type="submit">
                  ثـبـتـنـام
               </button>
            </form>
         </div>
      );
   }
}
