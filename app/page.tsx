"use strict";
"use client"

import { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Tooltip } from '@nextui-org/react';
import { Link } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import styles from './styles/Home.module.css'; 
import {Tabs, Tab, Image } from "@nextui-org/react";
import blob1 from './styles/b1.svg';
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Avatar} from "@nextui-org/react";
import Preloader from "../components/Preloader"


export default function Home() {
  const [age, setAge] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // age = Preloader()
  // days = Preloader()

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop:any) => {
    setBackdrop(backdrop)
    onOpen();
  }


  useEffect(() => {
    const calculateAgeAndDays = () => {
      const birthDate = new Date('2009-02-25');
      const currentDate = new Date();

      const diffTime = Math.abs(currentDate.getTime() - birthDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      const ageDate = new Date(diffTime);
      const ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(ageYears);
      setDays(diffDays);
      setLoading(false); // Ustawia loading na false po obliczeniach
    };

    calculateAgeAndDays();
    const intervalId = setInterval(calculateAgeAndDays, 86400000); 
    return () => clearInterval(intervalId);
  }, []);

  // import React from "react";
  // import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
  
  // export default function App() {
  //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  //   return (
  //     <>
  //     </>
  //   );
  // }
  


  return (
    <div>
      <div style={{ width: "200px", filter: "blur(100px)", margin: "20px" }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#9353D3" d="M43.7,-65C53.8,-52.8,57.4,-36.3,64.7,-19.6C72,-3,83,13.8,80.6,27.7C78.2,41.6,62.2,52.7,46.5,61.9C30.9,71.1,15.4,78.4,1.3,76.6C-12.8,74.8,-25.6,63.8,-36.7,53.1C-47.8,42.4,-57.1,32,-62.6,19.3C-68.1,6.7,-69.8,-8.3,-67.5,-24C-65.2,-39.7,-59,-56.2,-47.1,-67.9C-35.2,-79.6,-17.6,-86.5,-0.4,-86C16.8,-85.4,33.5,-77.3,43.7,-65Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div style={{ marginTop: "-70px" }} className={styles.container}>
        <div className={styles.centered}>
          <div className={styles.text}>Hey, I'm Jakub </div>
          {loading ? (
            <Preloader />
           ) : (
          <p>or <span style={{ color: '#9353D3', cursor: 'pointer' }}>Kuba</span> (currently {age} years old or {days} days old)</p>
          )}
          <Button onPress={onOpen} style={{ marginTop: "20px" }} color="secondary" variant="flat">
            Learn more
          </Button> 
          <div style={{ width: "200px", filter: "blur(120px)", marginLeft: "330%", marginTop: "30%", zIndex: "-99999999" }}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9353D3" d="M43.7,-65C53.8,-52.8,57.4,-36.3,64.7,-19.6C72,-3,83,13.8,80.6,27.7C78.2,41.6,62.2,52.7,46.5,61.9C30.9,71.1,15.4,78.4,1.3,76.6C-12.8,74.8,-25.6,63.8,-36.7,53.1C-47.8,42.4,-57.1,32,-62.6,19.3C-68.1,6.7,-69.8,-8.3,-67.5,-24C-65.2,-39.7,-59,-56.2,-47.1,-67.9C-35.2,-79.6,-17.6,-86.5,-0.4,-86C16.8,-85.4,33.5,-77.3,43.7,-65Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
      </div>
        <Modal isOpen={isOpen} backdrop='blur' placement='bottom' scrollBehavior='inside' onOpenChange={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">More about me</ModalHeader>
                <ModalBody>
                  <p> 
                    You are probably more interested in things about me, so I'm passionate with programming since age of 7, I started with easy batch (.bat) scripts, now I am mastering my JavaScript skills while learning Next.js.
                  </p>
                  <p>
                    I am interested in computers, programming and cyber-sec as a whole. I like to work on physical electronics like computers (PC's and laptops), TV's, engines from anything.
                  </p>
                  <p>
                    Mainly I use JavaScript and TypeScript (this website is using it), but I also know other programming languages but not at the same level as previously mentioned ones and I'm actively extending my knowladge at other languages. 
                  </p>
                  <p>
                    Over the course of my programming career I have worked on many project's but I have always failed to release them or just lost them with time. I like to work with a team on ambitous projects that would make a diffrence.
                  </p>
                  <p><strong>Known programming languages</strong></p>
                  <div className="flex gap-4 items-center">
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                  </div>
                  <div className="flex gap-4 items-center">
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                  </div>
                  <p><strong>Known technologies/tools</strong></p>
                  <div className="flex gap-4 items-center">
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
                    <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                  </div>
                  <div className="flex gap-4 items-center">
                  <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                  <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                  <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />
                  <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                  <Avatar isBordered radius="md" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
    </div>
  );
}