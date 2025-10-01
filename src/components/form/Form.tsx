import { useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Text from "../text/Text";
import Input from "../input/Input";
import Button from "../button/Button";

import "./form.css";

const SITE_KEY = "6LczLNsrAAAAACxBlJUO5K0Rm1cMj_LX1GHl8sLn";
const WEB3FORM = "";

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean | "pending" | "error">(false);
  const [btnText, setBtnText] = useState("Send");

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA first!");
      return;
    }

    setIsSubmitted("pending");
    setBtnText("Sending..");

    const formData = new FormData(e.currentTarget);
    // recaptcha adds the field 'g-recaptcha-response' to the formData,
    // which web3form doesnt support and it throws a 400 bad request.
    // instead, change the field name to 'captcha'
    formData.delete("g-recaptcha-response");
    formData.append("captcha", captchaValue);
    formData.append("access_key", WEB3FORM);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
      setBtnText("Send");
    } else {
      setIsSubmitted("error");
      setCaptchaValue(null);
    }
  };

  return (
    <div className="get-in-touch-form-container">
      <div className="blob-wrapper">
        <div className="blob a" />
      </div>
      <div className="blob-wrapper">
        <div className="blob b" />
      </div>

      {isSubmitted === true ? (
        <>
          <Text
            size="md"
            fontWeight="bold"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            Thank you for reaching out!
          </Text>
          <Text
            size="sm"
            fontWeight="light"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            Your details have been submitted.
          </Text>
          <br />
          <Text
            size="sm"
            fontWeight="light"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            To go back click <a href="/">here</a>.
          </Text>
        </>
      ) : isSubmitted === "error" ? (
        <>
          <Text
            size="md"
            fontWeight="bold"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            Error submitting details!
          </Text>
          <Text
            size="sm"
            fontWeight="light"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            Looks like there was an error while trying to sbumit your details.
          </Text>
          <br />
          <Text
            size="sm"
            fontWeight="light"
            color="var(--white)"
            align="center"
            style={{
              position: "relative",
              zIndex: 9,
            }}
          >
            Please go back and try again <a href="/">here</a>.
          </Text>
        </>
      ) : (
        <form onSubmit={submitForm} id="get-in-touch-form">
          <div className="form-header-container">
            <Text size="lg" fontWeight="bold" color="var(--white)" align="center">
              Get in touch
            </Text>
            <Text size="md" fontWeight="light" color="var(--white)" align="center">
              Fill in your contact information below,
            </Text>
            <Text size="md" fontWeight="light" color="var(--white)" align="center">
              and we'll be in touch shortly.
            </Text>
          </div>

          <div className="form-inputs-container">
            <div className="form-text-inputs-container">
              <Input type="text" name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Enter email" />
              <Input type="text" name="position" placeholder="Position" />
              <Input type="text" name="company" placeholder="Company" />
            </div>
            <div className="form-captcha-and-submit-container">
              <ReCAPTCHA sitekey={SITE_KEY} onChange={setCaptchaValue} />
              <Button isLoading={isSubmitted} type="submit">
                {btnText}
              </Button>
            </div>
          </div>

          <Text size="sm" fontWeight="light" color="var(--white)" align="center">
            Or Email us at{" "}
            <a href="mailto:contact@digitalparagon.net">contact@digitalparagon.net</a>
          </Text>
        </form>
      )}
    </div>
  );
};

export default Form;
