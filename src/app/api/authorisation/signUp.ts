import axios from "axios";

export interface FormData {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }
  

export default function submitSignUpForm({
    formData,
    e,
  }: {
    formData: FormData;
    e: React.FormEvent<HTMLFormElement>;
  }) :string | null{
    e.preventDefault();
  
    axios
      .post("http://localhost:8080/user/signUp", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      })
      .then(function (response) {
          if( response.data === "user created successfully"){
            return "success"
          }
      })
      .catch(function (error) {
        (error);
        return null
      });

      return null
    }