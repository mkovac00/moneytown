import { Form } from "react-router-dom";

// Library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

// Assets
import illustration from "../assets/illustration.svg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span className="accent">your money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today!
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What's your name?"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person creating a budget" />
    </div>
  );
};

export default Intro;
