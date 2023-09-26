

declare global {

  interface field {
    label: String;
    name: String;
    as: String;
    rules: Object;
    type?: String;
  }

  interface FieldsArrayForm {
    fields: Array<field>;
  }

  type FormAuth = {
    lastname: String;
    firstname: String;
    email: String;
    password: String;
  }

  type TypeAuth = "connexion" | "subscribe" | "";
}
export { FieldsArrayForm, FormAuth, TypeAuth };
