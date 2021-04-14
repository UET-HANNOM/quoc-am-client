import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import googleIconImageSrc from "./google.svg";
import twitterIconImageSrc from "./twitter.svg";

const Container = tw.div`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;

const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const AuthScreen = ({
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ],
  forgotPasswordUrl = "#",
  signupUrl = "#",
}) => (
  <Container>
    <div className="cs-auth">
      <div className="cs-auth-main">
        <h1>Đăng Nhập UET Hán - Nôm</h1>
        <div>
          <div className="cs-auth-social">
            {socialButtons.map((socialButton, index) => (
              <SocialButton key={index} href={socialButton.url}>
                <span className="iconContainer">
                  <img
                    src={socialButton.iconImageSrc}
                    className="icon"
                    alt=""
                  />
                </span>
                <span className="text">{socialButton.text}</span>
              </SocialButton>
            ))}
          </div>
          <p style={{ margin: "2em", textAlign: "center", fontSize: "80%" }}>
            Or Sign in with your e-mail
          </p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <SubmitButton type="submit">
              <i class="fi-rr-sign-in"></i>
              <span className="text">Sign In</span>
            </SubmitButton>
          </form>
          <p tw="mt-6 text-xs text-gray-600 text-center">
            <a href={forgotPasswordUrl}>Forgot Password ?</a>
          </p>
          <p tw="mt-8 text-sm text-gray-600 text-center">
            Dont have an account? <a href={signupUrl}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default AuthScreen;
