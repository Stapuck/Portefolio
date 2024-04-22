import React, { useState } from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const Gallery = () => {


  const data = [
        {
          label: "Buenos Aires",
          value: "Race1",
          images: [
            {
              imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
            {
              imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
            },
            {
              imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            },
          ],
        },
        {
          label: "Ivrea 2022",
          value: "Race2",
          images: [
            {
              imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
          ],
        },
        {
          label: "Autre",
          value: "Race3",
          images: [
            {
              imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
            {
              imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
            },
            {
              imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            },
          ],
        },
        {
          label: "Race4",
          value: "Race4",
          images: [
            {
              imageLink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
          ],
        },
        {
          label: "Race5",
          value: "Race5",
          images: [
            {
              imageLink:
                "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
            },
            {
              imageLink:
                "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
            },
            {
              imageLink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
            },
          ],
        },
      ];

    const [activeTab, setActiveTab] = useState("Race1");
    const [click, setClick] = useState("Race1");

    const handleClick = (value) => {
      if (activeTab !== value) {
        setActiveTab(value);
        setClick(value);
      }
    };

  return (

    <section>

        <Tabs value={activeTab}>
                <TabsHeader>
                {data.map(({ label, value }) => (
                    <Tab 
                      key={value} 
                      value={value}
                      className={`rounded-xl bg-slate-200 active:bg-slate-900 hover:bg-slate-400 dark:hover:bg-slate-300 dark:text-black mx-2 ${ click === value ? "bg-blue-300 dark:bg-blue-400 dark:text-white":"bg-red-300 dark:bg-red-400"}`}
                      onClick={() =>handleClick(value)}
                      >
                    {label}
                    </Tab>
                ))}
                </TabsHeader>
                <TabsBody className="grid grid-cols-1 gap-4 ">
                {data.map(({ value, images }) => (
                    <TabPanel
                    className="grid grid-cols-2 gap-4 md:grid-cols-3"
                    key={value}
                    value={value}
                    >
                    {images?.map(({ imageLink }, index) => (
                        <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="image-photo"
                        />
                        </div>
                    ))}
                    </TabPanel>
                ))}
                </TabsBody>
            </Tabs>
           

    </section>
  )
}

export default Gallery

  