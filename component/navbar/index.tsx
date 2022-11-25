import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowDown } from "@emotion-icons/evaicons-solid/ArrowDown";
import { AccountCircle } from "@emotion-icons/material-rounded/AccountCircle";

import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") !== null) {
        setLogin(true);
        setUsername(
          JSON.parse(localStorage.getItem("user") || "{}")?.student.fullName
        );
      } else {
        setLogin(false);
      }
    }
  });

  const toggleNavBar = () => {
    navRef.current?.classList.toggle(`${styles.navbar__responsive}`);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Link className={styles.navbar__link} href="/" data-scroll>
          <Image
            src="/sepehr00.svg"
            alt="logo"
            width={50}
            height={50}
            className={styles.navbar__logo}
            loading="eager"
            priority={true}
          />
        </Link>
        <button
          className={`${styles.navbar__link} ${styles.navbar__burger}`}
          onClick={toggleNavBar}
          data-scroll
        >
          Menu
          <ArrowDown size={15} />
        </button>
        <nav ref={navRef} className={`${styles.navbar__links}`}>
          <span
            className={`${styles.navbar__burger_close}`}
            onClick={toggleNavBar}
          >
            &times;
          </span>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/"
            onClick={toggleNavBar}
            data-scroll
          >
            Home
          </Link>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/#courses"
            onClick={toggleNavBar}
            scroll={false}
          >
            Courses
          </Link>
          <Link
            className={`${styles.navbar__link} ${styles.navbar__item}`}
            href="/#contact"
            onClick={toggleNavBar}
            scroll={false}
          >
            Contact
          </Link>
        </nav>
      </div>
      {login ? (
        <div
          className={`d-flex align-items-center gap-2 ${styles.navbar__account}`}
        >
          {username}
          <AccountCircle size={25} />
        </div>
      ) : (
        <Link
          className={`${styles.navbar__link} ${styles.navbar__login}`}
          href="/login"
        >
          Log in
        </Link>
      )}
    </header>
  );
};
export default Navbar;
