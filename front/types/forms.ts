

declare global {

  interface field {
    label: String;
    name: String;
    as: String;
    rules: Object;
    type?: String;
  }

  interface fieldsArrayForm {
    fields: Array<field>;
  }

  type formAuth = {
    lastname: String;
    firstname: String;
    email: String;
    password: String;
  }

  type TypeAuth = "connexion" | "subscribe" | null;
}
export { fieldsArrayForm, formAuth, TypeAuth };
