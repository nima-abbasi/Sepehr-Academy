
import { useState } from "react";
//import Head from "next/head";

//import styles from "../styles/Home.module.css";

//import { DetailsProps } from "../types/types";

import ContactUsForm from "../component/footer/contactUs";

//import SearchBox from "./search";

export default function Home() {
  const [searchResult, setSearchResult] = useState<Array<DetailsProps>>();
  return (
    <div className="container" >
      <ContactUsForm/>
    </div>
  );
}
