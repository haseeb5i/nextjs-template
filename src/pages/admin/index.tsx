import { NextPage } from "next";

// no need to manually check if admin on each page here
// middleware makes life easy!
const GreetAdmin: NextPage = () => <div>Hello Admin!</div>;
export default GreetAdmin;
