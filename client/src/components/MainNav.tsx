import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

import ContactForm from "../forms/contact-form/ContactForm";
import { useContactApi } from "../api/ContactApi";
import { useNavigate } from "react-router-dom";



const MainNav = () => {
  const { postContact } = useContactApi();
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="font-bold hover:text-white hover:bg-green-500"
          >
            Contact Us
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
          <ContactForm onSave={postContact} isLoading={false} />
        </DialogContent>
      </Dialog>
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-white hover:bg-green-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
