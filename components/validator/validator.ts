import * as Yup from "yup";

function formatDate(date: any){
  return new Date(date).toLocaleDateString()
}

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required!")
    .min(2, "Username must be at least 2 characters.")
    .max(20, "Username must not exceed 20 characters."),
  email: Yup.string()
    .email("Email is invalid.")
    .required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters.")
    .max(40, "Password must not exceed 40 characters."),
  phoneNumber : Yup.string()
  .required("phoneNumber is required!")
  .min(10, "phoneNumber must be at least 10 characters.")
  .max(15, "phoneNumber must not exceed 15 characters."),
  birthDate : Yup.string()
  .required("birthDate is required!"),
  //.min(Yup.ref('originalEndDate'), ({min}) => `Date needs to before ${formatDate(min)}!!`,),
  nationId : Yup.string()
  .required("nationId is required!")
  .min(10, "nationId must be at least 10 characters.")
  .max(11, "nationId must not exceed 11 characters."),
  profile : Yup.string()
  .required("profile is required!")
  .min(6, "profile must be at least 6 characters.")
  .max(40, "profile must not exceed 40 characters."),
})