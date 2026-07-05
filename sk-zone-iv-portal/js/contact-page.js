/* Contact Page */

document.addEventListener("DOMContentLoaded", () => {

    initContactForm();

});


/* Contact Form */

function initContactForm() {

    const contactForm =
        document.getElementById("contactForm");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document
                .getElementById("contactName")
                .value
                .trim();


        const email =
            document
                .getElementById("contactEmail")
                .value
                .trim();


        const concern =
            document
                .getElementById("contactConcern")
                .value;


        const subject =
            document
                .getElementById("contactSubject")
                .value
                .trim();


        const message =
            document
                .getElementById("contactMessage")
                .value
                .trim();


        if (
            !name ||
            !email ||
            !concern ||
            !subject ||
            !message
        ) {

            return;

        }


        const concernLabel =
            getConcernLabel(concern);


        const emailSubject =
            `[${concernLabel}] ${subject}`;


        const emailBody = `
Good day, SK Barangay Zone IV.

My name is ${name}.

Type of Concern:
${concernLabel}

Message:
${message}

Contact Information:
Name: ${name}
Email: ${email}

Thank you.
        `.trim();


        const mailtoLink =
            "mailto:kabataangzone4@gmail.com" +
            "?subject=" +
            encodeURIComponent(emailSubject) +
            "&body=" +
            encodeURIComponent(emailBody);


        window.location.href = mailtoLink;

    });

}


/* Concern Labels */

function getConcernLabel(concern) {

    const concernLabels = {

        "program":
            "Program Inquiry",

        "activity":
            "Activity Information",

        "documents":
            "Public Documents",

        "youth-concern":
            "Youth Concern",

        "suggestion":
            "Suggestion or Feedback",

        "other":
            "Other Inquiry"

    };


    return concernLabels[concern] || "General Inquiry";

}