const translations = {
    en: {
        title: "Create Account",
        signIn: "Sign In",
        register: "Register",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        emailPlaceholder: "Email Address",
        password: "Password",
        privacy: "Privacy Policy",
        subscription: "Subscription",
        terms: "Terms Of Use",
        help: "F1 Help",
        cookies: "Cookie Preferences"
    },

    fr: {
        title: "Créer un compte",
        signIn: "Se connecter",
        register: "S'inscrire",
        firstName: "Prénom",
        lastName: "Nom",
        email: "E-mail",
        emailPlaceholder: "Adresse e-mail",
        password: "Mot de passe",
        privacy: "Politique de confidentialité",
        subscription: "Abonnement",
        terms: "Conditions d'utilisation",
        help: "Aide F1",
        cookies: "Préférences des cookies"
    },

    de: {
        title: "Konto erstellen",
        signIn: "Anmelden",
        register: "Registrieren",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "E-Mail",
        emailPlaceholder: "E-Mail-Adresse",
        password: "Passwort",
        privacy: "Datenschutz",
        subscription: "Abonnement",
        terms: "Nutzungsbedingungen",
        help: "F1-Hilfe",
        cookies: "Cookie-Einstellungen"
    },

    es: {
        title: "Crear cuenta",
        signIn: "Iniciar sesión",
        register: "Registrarse",
        firstName: "Nombre",
        lastName: "Apellidos",
        email: "Correo electrónico",
        emailPlaceholder: "Dirección de correo electrónico",
        password: "Contraseña",
        privacy: "Política de privacidad",
        subscription: "Suscripción",
        terms: "Condiciones de uso",
        help: "Ayuda de F1",
        cookies: "Preferencias de cookies"
    },

    nl: {
        title: "Account aanmaken",
        signIn: "Inloggen",
        register: "Registreren",
        firstName: "Voornaam",
        lastName: "Achternaam",
        email: "E-mail",
        emailPlaceholder: "E-mailadres",
        password: "Wachtwoord",
        privacy: "Privacybeleid",
        subscription: "Abonnement",
        terms: "Gebruiksvoorwaarden",
        help: "F1-help",
        cookies: "Cookievoorkeuren"
    },

    pt: {
        title: "Criar conta",
        signIn: "Iniciar sessão",
        register: "Registar",
        firstName: "Nome",
        lastName: "Apelido",
        email: "E-mail",
        emailPlaceholder: "Endereço de e-mail",
        password: "Palavra-passe",
        privacy: "Política de privacidade",
        subscription: "Subscrição",
        terms: "Termos de utilização",
        help: "Ajuda F1",
        cookies: "Preferências de cookies"
    },

    ja: {
        title: "アカウントを作成",
        signIn: "ログイン",
        register: "登録",
        firstName: "名",
        lastName: "姓",
        email: "メールアドレス",
        emailPlaceholder: "メールアドレスを入力",
        password: "パスワード",
        privacy: "プライバシーポリシー",
        subscription: "サブスクリプション",
        terms: "利用規約",
        help: "F1ヘルプ",
        cookies: "Cookieの設定"
    }
};
function changeLanguage(lang) {
    const text = translations[lang]

    if (!text) {return}

    document.documentElement.lang = lang

    document.querySelector("h1").textContent = text.title;

    document.querySelector(".options .inactive").textContent =
        text.signIn;

    document.querySelector(".options .current").textContent =
        text.register;

    // Change the form headings
    const headings = document.querySelectorAll("#registerForm h2");

    headings[0].textContent = text.firstName;
    headings[1].textContent = text.lastName;
    headings[2].textContent = text.email;
    headings[3].textContent = text.password;

    // Change the input placeholders
    document.querySelector("#Firstname").placeholder = text.firstName;
    document.querySelector("#Surname").placeholder = text.lastName;
    document.querySelector("#Email").placeholder =
        text.emailPlaceholder;
    document.querySelector("#Password").placeholder = text.password;

    // Change the register button
    document.querySelector(".confirmButton").textContent =
        text.register;

    // Change the footer links
    const footerLinks = document.querySelectorAll(".Footer-Options p");

    footerLinks[0].textContent = text.privacy;
    footerLinks[1].textContent = text.subscription;
    footerLinks[2].textContent = text.terms;
    footerLinks[3].textContent = text.help;
    footerLinks[4].textContent = text.cookies;

    // Highlight the selected language
    document.querySelectorAll(".Language-Sub-Options").forEach(option => {
        option.classList.toggle(
            "current-language",
            option.dataset.lang === lang
        );
    });
}

// Add a click event to each language
document.querySelectorAll(".Language-Sub-Options").forEach(option => {
    option.closest("a").addEventListener("click", function(event) {
        event.preventDefault();
        changeLanguage(option.dataset.lang);
    });
});

// English is the default language
changeLanguage("en");