import * as yup from "yup";

export const authFormSchema: fieldsArrayForm = {
  fields: [
    {
      label: "Prénom *",
      name: "firstname",
      as: "input",
      rules: yup.string().required("Champ requis"),
    },
    {
      label: "Nom *",
      name: "lastname",
      as: "input",
      rules: yup.string().required("Champ requis"),
    },
    {
      label: "Email *",
      name: "email",
      as: "input",
      rules: yup.string().email("Email invalide").required("Champ requis"),
    },
    {
      label: "Mot de passe *",
      name: "password",
      as: "input",
      type: "password",
      rules: yup
        .string()
        .required("Champ requis")
        .test({
          name: "is-psw",
          skipAbsent: true,
          test(value, ctx) {
            const format = /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            const specialCaractFormat =
              /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            const capitalLetterFormat = /[A-Z]/;
            if (value.length < 8) {
              return ctx.createError({
                message: "Doit contenir au minimum 8 caractères",
              });
            }
            if (!value.match(format)) {
              return ctx.createError({
                message:
                  "Merci d'utiliser au minimum un caractère spécial et une majuscule.",
              });
            }
            if (!value.match(specialCaractFormat)) {
              return ctx.createError({
                message:
                  "Merci d'utiliser au minimum un caractère spécial.",
              });
            }
            if (!value.match(capitalLetterFormat)) {
              return ctx.createError({
                message: "Merci d'utiliser au minimum une majuscule.",
              });
            }

            return true;
          },
        }),
    },
  ],
};